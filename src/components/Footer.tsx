import Link from "next/link";
import Logo from "./Logo";
import { Mail, Clock, ArrowUpRight, Github, Linkedin, Twitter, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300 border-t border-navy-800">
      {/* Upper Footer: Engineering Studio Summary */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              HASIZ is a digital engineering studio focused on building high-performance websites, e-commerce experiences, custom software, and intelligent digital solutions for modern businesses worldwide.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-navy-800 text-brand-sky border border-navy-700">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-sky animate-pulse"></span>
                Accepting New Client Inquiries
              </span>
            </div>
          </div>

          {/* Services Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-white font-sans">
              Engineering Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/wordpress-development" className="text-slate-400 hover:text-white transition-colors">
                  WordPress & WooCommerce
                </Link>
              </li>
              <li>
                <Link href="/services/shopify-development" className="text-slate-400 hover:text-white transition-colors">
                  Shopify Storefronts
                </Link>
              </li>
              <li>
                <Link href="/services/custom-web-development" className="text-slate-400 hover:text-white transition-colors">
                  Custom Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/ai-integration" className="text-slate-400 hover:text-white transition-colors">
                  AI Integration & Automation
                </Link>
              </li>
              <li>
                <Link href="/services/web-application-development" className="text-slate-400 hover:text-white transition-colors">
                  Web Applications & SaaS
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux-design" className="text-slate-400 hover:text-white transition-colors">
                  UI/UX & Design Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-white font-sans">
              Studio
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About HASIZ
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-slate-400 hover:text-white transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-white transition-colors">
                  Engineering Blog
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Market & World News</span>
                  <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-blue-900 text-blue-300">LIVE</span>
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-slate-400 hover:text-white transition-colors">
                  Technical Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Start a Project
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-slate-400 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information & Channels */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-white font-sans">
              Connect With Us
            </h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-sky mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block text-xs text-slate-400">Project Inquiries:</span>
                  <a href="mailto:contact@hasiz.com" className="text-white hover:text-brand-sky transition-colors">
                    contact@hasiz.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-brand-sky mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block text-xs text-slate-400">Time Zones Supported:</span>
                  <span className="text-slate-300">EST / GMT / CET</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-sky mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block text-xs text-slate-400">Inquiry Response Time:</span>
                  <span className="text-slate-300">Within 24 business hours</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md bg-navy-800 text-slate-400 hover:text-white hover:bg-navy-700 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md bg-navy-800 text-slate-400 hover:text-white hover:bg-navy-700 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md bg-navy-800 text-slate-400 hover:text-white hover:bg-navy-700 transition-colors"
                  aria-label="Twitter Profile"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-800 bg-navy-950/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} HASIZ. All rights reserved. We Engineer Digital Experiences.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors flex items-center gap-1">
              <span>Start Inquiry</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

