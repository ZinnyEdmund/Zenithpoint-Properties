import { services } from "@/data/services";
import { buildWhatsAppLink } from "@/config/site";
import Reveal from "@/components/ui/Reveal";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export default function Services() {
  return (
    <>
      <section className="border-b border-line bg-offwhite pb-14 pt-32 md:pb-16">
        <Container>
          <Reveal className="max-w-measure-lg">
            <SectionLabel>Services</SectionLabel>
            <h1 className="mt-2 font-serif text-h1 font-normal sm:text-h1-lg">
              Every part of the property journey.
            </h1>
            <p className="mt-3.5 max-w-measure text-body text-muted">
              Zenith Point works across the full lifecycle of a property — not just the sale.
            </p>
          </Reveal>
        </Container>
      </section>

      {services.map((service, i) => {
        const reversed = i % 2 === 1;
        return (
          <section key={service.id} className={`py-14 md:py-16 ${i !== services.length - 1 ? "border-b border-line" : ""}`}>
            <Container>
              <div
                className={`grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16 ${
                  reversed ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal className="aspect-[4/3] overflow-hidden rounded bg-offwhite">
                  <img src={service.image} alt={service.name} className="h-full w-full object-cover" />
                </Reveal>
                <Reveal delay={80}>
                  <span className="font-serif text-display text-navy/25">{service.number}</span>
                  <h2 className="mb-4 mt-1 text-h3 font-bold sm:text-h3-lg">{service.name}</h2>
                  <p className="mb-6 max-w-[440px] text-body-sm leading-relaxed text-muted">{service.description}</p>
                  <Button
                    href={buildWhatsAppLink(`Hello Zenith Point, I'd like to learn more about ${service.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="sm"
                  >
                    Ask About This Service
                  </Button>
                </Reveal>
              </div>
            </Container>
          </section>
        );
      })}
    </>
  );
}
