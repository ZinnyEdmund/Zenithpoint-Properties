import { useEffect, useState } from "react";
import Button from "../ui/Button";
import Container from "../ui/Container";

const services = ["Land Procurement", "Property Development", "Surveying", "Property Management", "Sales & Acquisition"];

export default function Hero() {
  // One orchestrated entrance on load — not a scroll-triggered reveal,
  // since this content is visible immediately.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-navy pt-32">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop"
          alt="Modern residential property development under a bright sky"
          className="h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/35 to-navy/90" />
      </div>

      <div
        className={`relative z-10 w-full pb-16 transition-all duration-700 ease-out motion-reduce:transition-none md:pb-20 ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        <Container>
          <p className="mb-4 text-caption font-bold uppercase tracking-[0.12em] text-white/70">
            Zenith Point Properties · Enugu, Nigeria
          </p>

          <h1 className="max-w-[820px] font-serif text-display font-normal leading-[0.98] text-white sm:text-display-md lg:text-display-lg">
            We make
            <br />
            your dream
            <br />
            come home.
          </h1>

          <p className="mt-6 max-w-[480px] text-body leading-relaxed text-white/85">
            From the first plot of land to a finished home, Zenith Point moves your property
            ambitions forward — with clear process and people who know this market.
          </p>

          <div className="mt-9 flex flex-wrap gap-3.5">
            <Button to="/properties" variant="primary">Explore Properties</Button>
            <Button to="/contact" variant="ghost">Talk to Us</Button>
          </div>

          <div className="mt-14 flex max-w-[760px] flex-wrap gap-x-7 gap-y-2.5 border-t border-white/15 pt-7">
            {services.map((s) => (
              <span key={s} className="text-caption font-semibold text-white/70">{s}</span>
            ))}
          </div>
        </Container>
      </div>

      <div className="absolute bottom-9 right-10 z-10 hidden items-center gap-2.5 text-label font-semibold tracking-[0.08em] text-white/70 lg:flex" style={{ writingMode: "vertical-rl" }}>
        <span>SCROLL</span>
        <span className="h-12 w-px bg-white/30" />
      </div>
    </section>
  );
}
