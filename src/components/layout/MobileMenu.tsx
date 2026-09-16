import { Link } from "react-router-dom";
import { navLinks } from "./navLinks";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div
      id="mobile-menu"
      className={`fixed inset-0 z-[200] flex flex-col bg-navy p-6 transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        open ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mb-12 flex items-center justify-between">
        <Link to="/" onClick={onClose} className="font-serif text-[22px] text-white">
          Zenith<span className="text-white/70">Point</span>
        </Link>
        <button onClick={onClose} aria-label="Close menu" className="p-2 text-3xl leading-none text-white">
          &times;
        </button>
      </div>

      <nav className="flex flex-col gap-1" aria-label="Mobile Primary">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            onClick={onClose}
            className="border-b border-white/10 py-3.5 font-serif text-h1 text-white"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Link
        to="/properties"
        onClick={onClose}
        className="mt-8 inline-flex justify-center rounded-sm bg-zenith px-7 py-4 text-body-sm font-semibold text-white"
      >
        Find a Property
      </Link>
    </div>
  );
}
