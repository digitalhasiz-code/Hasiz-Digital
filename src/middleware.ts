import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// In-memory sliding window rate limiting for Edge runtime
interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const rateLimitStore = new Map<string, RateLimitRecord>();

// Clean up stale rate limit entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  rateLimitStore.forEach((value, key) => {
    if (value.resetAt <= now) {
      rateLimitStore.delete(key);
    }
  });
}, 300000);

// Signatures of known malicious vulnerability scanners and scrapers
const MALICIOUS_USER_AGENTS = [
  "sqlmap",
  "nikto",
  "wpscan",
  "acunetix",
  "nessus",
  "havij",
  "masscan",
  "dirbuster",
  "gobuster",
  "zgrab",
  "netsparker",
  "nmap",
  "shodan",
  "censys"
];

// Sensitive path probe attempts to instantly drop
const SENSITIVE_PROBE_PATTERNS = [
  /\.env(\.|$)/i,
  /\.git(\/|$)/i,
  /\.aws(\/|$)/i,
  /\.ssh(\/|$)/i,
  /\.svn(\/|$)/i,
  /wp-admin/i,
  /wp-login\.php/i,
  /xmlrpc\.php/i,
  /wp-config/i,
  /phpmyadmin/i,
  /pma/i,
  /eval-stdin\.php/i,
  /\.\.\//, // Path traversal
  /\.\.\\/  // Windows path traversal
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const userAgent = (request.headers.get("user-agent") || "").toLowerCase();

  // 0. Enforce www canonical domain: 301 Permanent Redirect from non-www hasiz.com to www.hasiz.com
  const host = (request.headers.get("x-forwarded-host") || request.headers.get("host") || "").toLowerCase().split(":")[0];
  if (host === "hasiz.com") {
    const url = request.nextUrl.clone();
    url.host = "www.hasiz.com";
    url.protocol = "https:";
    url.port = "";
    return NextResponse.redirect(url.toString(), 301);
  }
  
  // Extract client IP (Vercel provides x-real-ip / x-forwarded-for)
  const clientIp = 
    request.headers.get("x-real-ip") || 
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
    "127.0.0.1";

  // 1. Block Malicious Vulnerability Scanners
  if (MALICIOUS_USER_AGENTS.some((badAgent) => userAgent.includes(badAgent))) {
    return new NextResponse("Forbidden: Automated security scanner blocked by HASIZ WAF.", {
      status: 403,
      headers: { "Content-Type": "text/plain" }
    });
  }

  // 2. Block Known Exploit & Sensitive File Probes
  if (SENSITIVE_PROBE_PATTERNS.some((pattern) => pattern.test(pathname))) {
    return new NextResponse("Access Denied.", {
      status: 403,
      headers: { "Content-Type": "text/plain" }
    });
  }

  // 3. Block Insecure HTTP Methods
  const method = request.method.toUpperCase();
  if (["TRACE", "TRACK", "DEBUG"].includes(method)) {
    return new NextResponse("Method Not Allowed", {
      status: 405,
      headers: { "Allow": "GET, POST, HEAD, OPTIONS" }
    });
  }

  // 4. Rate Limiting for API routes (specifically /api/contact)
  if (pathname.startsWith("/api/contact") && method === "POST") {
    const now = Date.now();
    const rateLimitKey = `${clientIp}:contact`;
    const windowMs = 60000; // 1 minute window
    const maxRequests = 5;  // Max 5 submissions per minute per IP

    const record = rateLimitStore.get(rateLimitKey);

    if (!record || record.resetAt <= now) {
      rateLimitStore.set(rateLimitKey, { count: 1, resetAt: now + windowMs });
    } else {
      record.count += 1;
      if (record.count > maxRequests) {
        return NextResponse.json(
          {
            success: false,
            message: "Too many requests. For your security, inquiry submissions are rate limited. Please wait 60 seconds before trying again."
          },
          {
            status: 429,
            headers: {
              "Retry-After": "60",
              "X-RateLimit-Limit": maxRequests.toString(),
              "X-RateLimit-Remaining": "0"
            }
          }
        );
      }
    }
  }

  // Proceed with enhanced security headers attached to the response
  const response = NextResponse.next();
  response.headers.set("X-WAF-Protection", "HASIZ-Security-Engine/v2.4");
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - icon files & public assets
     */
    "/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|apple-touch-icon.png|favicon-.*\\.png|site.webmanifest|images/).*)",
  ],
};

