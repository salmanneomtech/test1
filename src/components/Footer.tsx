'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const footerLinks = {
  services: [
    { name: 'SEO', href: '#services' },
    { name: 'PPC Advertising', href: '#services' },
    { name: 'Web Development', href: '#services' },
    { name: 'UI/UX Design', href: '#services' },
    { name: 'Social Media', href: '#services' },
    { name: 'Content Marketing', href: '#services' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' },
  ],
  support: [
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Sitemap', href: '#' },
  ],
};

const socialLinks = [
  { name: 'Twitter', icon: '𝕏', href: '#' },
  { name: 'LinkedIn', icon: 'in', href: '#' },
  { name: 'Instagram', icon: '📷', href: '#' },
  { name: 'Facebook', icon: 'f', href: '#' },
];

export default function Footer() {
  return (
    <footer className="pt-20 pb-8" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--accent-cyan)] to-[var(--accent-purple)] flex items-center justify-center">
                <span className="text-[var(--bg-primary)] font-bold text-xl">N</span>
              </div>
              <span className="font-[var(--font-heading)] text-xl font-bold tracking-wide">
                NEOM <span className="text-[var(--accent-cyan)]">TECHVERSE</span>
              </span>
            </Link>
            <p className="text-[var(--text-secondary)] mb-6">
              Future-ready digital marketing solutions for forward-thinking businesses.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] hover:bg-[var(--bg-primary)] transition-all"
                  style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[var(--text-secondary)] text-sm">
              © {new Date().getFullYear()} NEOM Techverse. All rights reserved.
            </p>
            <p className="text-[var(--text-secondary)] text-sm">
              Designed with <span className="text-[var(--accent-orange)]">♥</span> for the future
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}