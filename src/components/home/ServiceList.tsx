import { useState } from "react";
import { services } from "@/data/services";
import Reveal from "../ui/Reveal";
import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";

export default function ServiceList() {
  const [activeId, setActiveId] = useState(services[0].id);
  const active = services.find((s) => s.id === activeId) ?? services[0];

  return (
    <section id="what-we-do" className="py-16 md:py-24">
      <Container>
        <Reveal className="max-w-measure-lg">
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="mt-2 font-serif text-h2 font-normal sm:text-h2-lg">From land to living.</h2>
          <p className="mt-3.5 max-w-measure text-body text-muted">
            Zenith Point operates across the full property journey — not just the sale.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-[0.95fr_1.05fr] md:gap-16">
          <div className="order-2 border-t border-line md:order-1">
            {services.map((service) => {
              const isActive = service.id === activeId;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveId(service.id)}
                  className={`flex w-full items-baseline gap-5 border-b border-line py-6 text-left transition-colors ${
                    isActive ? "bg-offwhite" : "hover:bg-offwhite/60"
                  }`}
                >
                  <span className={`min-w-7 font-serif text-body-sm ${isActive ? "text-navy" : "text-muted"}`}>
                    {service.number}
                  </span>
                  <span>
                    <h3 className={`text-h5 font-bold transition-colors ${isActive ? "text-navy" : "text-ink"}`}>
                      {service.name}
                    </h3>
                    <p
                      className={`overflow-hidden text-small text-muted transition-all duration-300 ${
                        isActive ? "mt-1.5 max-h-20" : "max-h-0"
                      }`}
                    >
                      {service.description}
                    </p>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative order-1 aspect-[4/5] overflow-hidden rounded bg-offwhite md:sticky md:top-28 md:order-2">
            {services.map((service) => (
              <img
                key={service.id}
                src={service.image}
                alt={service.name}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                  service.id === activeId ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
