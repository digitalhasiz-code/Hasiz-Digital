# HASIZ Digital Engineering Studio — Production Deployment Guide

This document outlines deployment workflows, DNS cutover recommendations, and ongoing environment management for **HASIZ — Digital Engineering Studio**.

---

## 1. Vercel Deployment (Recommended)

Next.js is engineered by Vercel; deploying on Vercel provides zero-configuration edge CDN distribution, atomic immutable deployments, and instant global cache invalidation.

### One-Click Deploy via Vercel CLI:
1. Install or run Vercel CLI:
   ```bash
   npx vercel
   ```
2. Follow the terminal prompts:
   - Link to existing project? **No**
   - Project name: `hasiz-digital-studio`
   - Framework preset: **Next.js**
3. Deploy to production:
   ```bash
   npx vercel --prod
   ```

### Deploy via GitHub Repository:
1. Push this repository to GitHub (e.g. `github.com/your-org/hasiz`).
2. Log into the [Vercel Dashboard](https://vercel.com).
3. Click **Add New...** &rarr; **Project** &rarr; Select your GitHub repository.
4. Framework Preset will auto-detect **Next.js**.
5. Add your Environment Variables:
   - `NEXT_PUBLIC_SITE_URL`: `https://hasiz.com`
   - `NEXT_PUBLIC_GA_ID`: `G-XXXXXXXXXX` (Optional)
   - `CONTACT_WEBHOOK_URL`: `https://hooks.slack.com/...` (Optional)
6. Click **Deploy**.

---

## 2. Docker / Self-Hosted VPS Deployment

If deploying to your own Ubuntu VPS (DigitalOcean, AWS EC2, Hetzner, or Linode):

1. **Build the production application:**
   ```bash
   npm run build
   ```
2. **Start the production server:**
   ```bash
   npm run start -- -p 3000
   ```
3. **PM2 Process Manager:**
   ```bash
   npm install -g pm2
   pm2 start npm --name "hasiz-studio" -- start -- -p 3000
   pm2 save
   pm2 startup
   ```
4. **Nginx Reverse Proxy Configuration:**
   ```nginx
   server {
       listen 80;
       server_name hasiz.com www.hasiz.com;
       return 301 https://hasiz.com$request_uri;
   }

   server {
       listen 443 ssl http2;
       server_name hasiz.com;

       ssl_certificate /etc/letsencrypt/live/hasiz.com/fullchain.pem;
       ssl_certificate_key /etc/letsencrypt/live/hasiz.com/privkey.pem;

       location / {
           proxy_pass http://127.0.0.1:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }
   }
   ```

---

## 3. Cloudflare Edge DNS Configuration

For international performance and DDoS protection:
1. In Cloudflare DNS management for `hasiz.com`:
   - `CNAME @ cname.vercel-dns.com` (Proxy status: Proxied or DNS Only per preference)
   - `CNAME www cname.vercel-dns.com`
2. **SSL/TLS Mode:** Set to **Full (Strict)**.
3. **Always Use HTTPS:** Enabled.
4. **Brotli Compression:** Enabled.
5. **Early Hints:** Enabled.

---

## 4. Production Health Verification

After deployment, test the following endpoints:
- `https://hasiz.com` &rarr; Returns HTTP 200, `<title>` contains HASIZ
- `https://hasiz.com/sitemap.xml` &rarr; Valid XML sitemap with 43 URLs
- `https://hasiz.com/robots.txt` &rarr; Valid directives
- `https://hasiz.com/api/contact` &rarr; Accepts POST with JSON body and honeypot validation

