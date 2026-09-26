import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { NAV_LINKS, SITE, SOCIAL_LINKS } from "@/data/site";
import { LinkedInIcon, InstagramIcon, YouTubeIcon } from "@/components/SocialIcons";

const socialIcons = {
  LinkedIn: LinkedInIcon,
  Instagram: InstagramIcon,
  YouTube: YouTubeIcon,
};

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Azlon AI"
                width={28}
                height={28}
                className="rounded-md"
              />
              <span className="font-display text-lg font-bold">
                Azlon <span className="gold-text">AI</span>
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-[var(--muted)]">
              {SITE.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--gold-solid)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
              Connect
            </h4>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-4 flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--gold-solid)]"
            >
              <Mail className="h-4 w-4" />
              {SITE.email}
            </a>
            <div className="mt-4 flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = socialIcons[social.label as keyof typeof socialIcons];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-all duration-300 hover:border-[var(--gold-solid)] hover:text-[var(--gold-solid)] hover:shadow-[0_0_20px_-4px_var(--glow)]"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>


        <div className="mt-12 border-t border-[var(--border)] pt-6 text-center text-xs text-[var(--muted)]">
          © 2026 Azlon AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
