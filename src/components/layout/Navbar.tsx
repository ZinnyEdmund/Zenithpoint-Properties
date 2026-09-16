import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "./navLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${
          scrolled
            ? "border-b border-line bg-white py-3.5 shadow-[0_8px_24px_-12px_rgba(11,18,32,0.18)]"
            : "border-b border-white/10 bg-navy/95 py-5 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-wrap items-center justify-between px-6 md:px-10 lg:px-14">
          <Link
            to="/"
            className="flex items-center"
            aria-label="Zenith Point Properties"
          >
            <img
              src={scrolled ? "/logo.png" : "/logo-white.png"}
              alt="Zenith Point Properties"
              className={`h-14 w-auto transition-all duration-300 ${
                scrolled ? "" : "scale-125"
              }`}
            />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-9 md:flex"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative py-1 text-small font-semibold transition-colors duration-200 ${
                    scrolled
                      ? isActive
                        ? "text-navy"
                        : "text-ink hover:text-zenith"
                      : isActive
                        ? "text-white"
                        : "text-white/85 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-zenith transition-transform duration-200 ${
                      isActive ? "scale-x-100" : ""
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <Link
            to="/properties"
            className="hidden rounded-sm bg-zenith px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-secondary md:inline-flex"
          >
            Find a Property
          </Link>

          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="flex flex-col gap-[5px] p-2 md:hidden"
          >
            <span
              className={`h-0.5 w-6 transition-colors ${scrolled ? "bg-ink" : "bg-white"}`}
            />
            <span
              className={`h-0.5 w-6 transition-colors ${scrolled ? "bg-ink" : "bg-white"}`}
            />
          </button>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
