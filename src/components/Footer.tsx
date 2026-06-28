import type { ComponentType } from "react";
import { Link } from "react-router-dom";
import { Camera, Mail, MapPin, Music2, Phone, Video } from "lucide-react";
import { navLinks, site } from "../data/site";
import { Logo } from "./Logo";

const socialIcons: Record<string, ComponentType<{ size?: number }>> = {
  Instagram: Camera,
  TikTok: Music2,
  YouTube: Video,
};

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-plum-deep text-linen/80">
      <div
        className="bg-grain absolute inset-0 opacity-20"
        aria-hidden="true"
      />
      <div className="container-page relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo tone="linen" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-linen/70">
            {site.tagline} A boutique aerial yoga studio in {site.location.city},
            where every body is welcome off the ground.
          </p>
          <div className="mt-5 flex gap-3">
            {site.socials.map((s) => {
              const Icon = socialIcons[s.label] ?? Camera;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} — ${s.handle}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-linen/20 text-linen/80 transition-colors hover:border-clay hover:bg-clay hover:text-white"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg text-linen">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-linen/70 transition-colors hover:text-clay-soft"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-linen">Visit</h3>
          <ul className="mt-4 space-y-3 text-sm text-linen/70">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-clay-soft" />
              <span>
                {site.location.address}
                <br />
                {site.location.postal}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="shrink-0 text-clay-soft" />
              <a href={`tel:${site.contact.phone}`} className="hover:text-clay-soft">
                {site.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="shrink-0 text-clay-soft" />
              <a
                href={`mailto:${site.contact.email}`}
                className="hover:text-clay-soft"
              >
                {site.contact.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-linen">Studio hours</h3>
          <ul className="mt-4 space-y-2 text-sm text-linen/70">
            {site.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className="text-linen/90">{h.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-page relative flex flex-col items-center justify-between gap-3 border-t border-linen/15 py-6 text-xs text-linen/60 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.fullName}. Crafted with care in{" "}
          {site.location.city}.
        </p>
        <p className="flex flex-wrap gap-4">
          <Link to="/faq" className="hover:text-clay-soft">
            FAQ
          </Link>
          <Link to="/contact" className="hover:text-clay-soft">
            Contact
          </Link>
          <Link to="/privacy" className="hover:text-clay-soft">
            Privacy
          </Link>
          <Link to="/terms" className="hover:text-clay-soft">
            Terms
          </Link>
        </p>
      </div>
    </footer>
  );
}
