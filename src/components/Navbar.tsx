import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/site";
import { Logo } from "./Logo";
import { LinkButton } from "./Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Prevent body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative text-sm font-medium transition-colors hover:text-plum ${
      isActive ? "text-plum" : "text-ink-soft"
    } after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:rounded-full after:bg-clay after:transition-all after:duration-300 ${
      isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-plum/10 bg-linen/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-page flex h-18 items-center justify-between py-3">
        <Logo />

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <LinkButton to="/contact" variant="primary" size="md">
            Book a class
          </LinkButton>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-2 text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-plum/10 bg-linen/95 backdrop-blur-md transition-[max-height] duration-500 ease-out lg:hidden ${
          open ? "max-h-[32rem]" : "max-h-0"
        }`}
      >
        <div className="container-page flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 text-lg font-medium transition-colors ${
                  isActive ? "bg-plum/10 text-plum" : "text-ink hover:bg-plum/5"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <LinkButton to="/contact" variant="primary" size="lg" className="mt-3">
            Book a class
          </LinkButton>
        </div>
      </div>
    </header>
  );
}
