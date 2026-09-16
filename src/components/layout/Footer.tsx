import { Link } from "react-router-dom";
import { siteConfig, buildWhatsAppLink } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-navy py-16 text-[#c3cceb]">
      <div className="mx-auto max-w-wrap px-6 pb-8 pt-16 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-11 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-3.5 font-serif text-2xl text-white">
              Zenith<span className="text-white/70">Point</span>
            </div>
            <p className="max-w-[320px] text-sm leading-relaxed text-[#a9b6df]">
              {siteConfig.companyName} — land procurement, property development, surveying, sales and
              management in {siteConfig.location}.
            </p>
          </div>

          <div>
            <h4 className="mb-4.5 text-caption uppercase tracking-wide text-white">Explore</h4>
            <ul className="flex flex-col gap-2.5">
              <li><Link to="/properties" className="text-small text-[#a9b6df] hover:text-white">Properties</Link></li>
              <li><Link to="/projects" className="text-small text-[#a9b6df] hover:text-white">Projects</Link></li>
              <li><Link to="/services" className="text-small text-[#a9b6df] hover:text-white">Services</Link></li>
              <li><Link to="/about" className="text-small text-[#a9b6df] hover:text-white">About</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4.5 text-caption uppercase tracking-wide text-white">Contact</h4>
            <ul className="flex flex-col gap-2.5 text-small text-[#a9b6df]">
              <li><a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white">{siteConfig.contact.phone}</a></li>
              <li><a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">{siteConfig.contact.email}</a></li>
              <li><a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp Us</a></li>
              <li>{siteConfig.contact.address}</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4.5 text-caption uppercase tracking-wide text-white">Follow</h4>
            <div className="flex gap-4">
              <a href={siteConfig.social.instagram} aria-label="Instagram" className="text-[#a9b6df] hover:text-white">IG</a>
              <a href={siteConfig.social.facebook} aria-label="Facebook" className="text-[#a9b6df] hover:text-white">FB</a>
              <a href={siteConfig.social.linkedin} aria-label="LinkedIn" className="text-[#a9b6df] hover:text-white">LI</a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3.5 border-t border-white/10 pt-6 text-caption text-[#7f8cbb] sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 {siteConfig.companyName}. All rights reserved.</span>
          <span>{siteConfig.location}</span>
        </div>
      </div>
    </footer>
  );
}
