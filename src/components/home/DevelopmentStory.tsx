import { processSteps } from "@/data/process";
import { buildWhatsAppLink } from "@/config/site";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import Reveal from "../ui/Reveal";
import SampleTag from "../ui/SampleTag";
import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";

// A layered-photography treatment (large image + an overlapping second
// image + a floating contact card) inspired by how competitor real-estate
// sites use warm, human photography to sell trust rather than just specs.
// Built from scratch with different imagery, proportions and card content —
// not a copy of any reference site's layout.
export default function DevelopmentStory() {
  return (
    <section id="process" className="py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:items-center md:gap-12 lg:gap-20">
          {/* Image collage */}
          <Reveal className="relative">
            <div className="mb-3">
              <SampleTag label="Sample photography — replace with real Zenith Point clients/site imagery" />
            </div>

            <div className="relative pb-10 pr-10 sm:pb-14 sm:pr-14">
              <div className="aspect-[4/5] w-[78%] overflow-hidden rounded-lg bg-offwhite">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=900&auto=format&fit=crop"
                  alt="A family settling into their new home"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute bottom-0 right-0 aspect-[4/3] w-[52%] overflow-hidden rounded-lg border-4 border-white bg-offwhite shadow-[0_20px_40px_-20px_rgba(11,31,94,0.35)]">
                <img
                  src="https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=700&auto=format&fit=crop"
                  alt="Handing over the keys to a finished property"
                  className="h-full w-full object-cover"
                />
              </div>

              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-16 left-0 flex items-center gap-3 rounded-lg bg-white px-4 py-3.5 shadow-[0_16px_32px_-16px_rgba(11,18,32,0.3)] transition-transform hover:-translate-y-0.5 sm:bottom-20"
              >
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#20BA5A]">
                  <WhatsAppIcon size={18} />
                </span>
                <span className="text-left">
                  <span className="block text-micro font-semibold text-muted">WhatsApp Us</span>
                  <span className="block text-caption font-bold text-ink">Chat With The Team</span>
                </span>
              </a>
            </div>
          </Reveal>

          {/* Copy + checklist */}
          <Reveal delay={100}>
            <SectionLabel>Development Story</SectionLabel>
            <h2 className="mt-2 font-serif text-h2 font-normal sm:text-h2-lg">From land to legacy.</h2>
            <p className="mt-3.5 max-w-[480px] text-body leading-relaxed text-muted">
              A development isn't finished when the sale closes — it's finished when a family is settled in.
              That's the standard every Zenith Point project is built to.
            </p>

            <ul className="mt-8 flex flex-col gap-5 border-t border-line pt-7">
              {processSteps.map((step) => (
                <li key={step.number} className="flex items-start gap-3.5">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-navy">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-body-sm font-bold">{step.title}</span>
                    <span className="block text-caption text-muted">{step.description}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
