import { buildWhatsAppLink } from "@/config/site";
import Reveal from "../ui/Reveal";
import Container from "../ui/Container";
import Button from "../ui/Button";

// Deliberately restrained: a light background keeps this from becoming
// another solid block of brand blue. The single primary button is the
// only saturated color in the section.
export default function CTASection() {
  return (
    <section id="final-cta" className="border-y border-line bg-offwhite py-16 md:py-24">
      <Container>
        <Reveal className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="max-w-[600px] font-serif text-h1 font-normal leading-tight sm:text-h1-lg">
              Your next property move starts here.
            </h2>
            <p className="mt-3.5 max-w-[440px] text-body text-muted">
              Tell us what you're looking for — land, a home, or a development partner — and we'll take it from
              there.
            </p>
          </div>

          <div className="flex flex-wrap gap-3.5">
            <Button
              href={buildWhatsAppLink("Hello Zenith Point, I'd like to start a conversation about a property.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Start a Conversation
            </Button>
            <Button to="/properties" variant="outline">
              Explore Properties
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
