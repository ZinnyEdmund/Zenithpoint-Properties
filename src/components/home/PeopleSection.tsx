import Reveal from "../ui/Reveal";
import SampleTag from "../ui/SampleTag";
import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";
import Button from "../ui/Button";

export default function PeopleSection() {
  return (
    <section id="people" className="py-16 md:py-24">
      <Container>
        <Reveal className="max-w-measure-lg">
          <SectionLabel>
            The People Behind The Property
          </SectionLabel>
          <h2 className="mt-2 font-serif text-h2 font-normal sm:text-h2-lg">About Zenith Point.</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <Reveal className="aspect-[4/3] overflow-hidden rounded bg-offwhite">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop"
              alt="Team photography placeholder"
              className="h-full w-full object-cover"
            />
          </Reveal>

          <Reveal delay={100}>
            <div className="mb-4">
              <SampleTag label="Sample copy — replace with Zenith Point's real story" />
            </div>
            <p className="mb-4.5 text-body-sm leading-relaxed text-muted">
              Zenith Point Properties Ltd is a real estate and property development company based in Enugu,
              working across land, residential, commercial and managed property.
            </p>
            <p className="mb-6 text-body-sm leading-relaxed text-muted">
              The team works closely with clients from the first site visit through to documentation and
              handover, so property decisions are made with clear information rather than guesswork.
            </p>

            <div className="mb-7 grid grid-cols-2 gap-5">
              <div>
                <h4 className="mb-1.5 text-caption font-bold uppercase tracking-wide text-navy">Mission</h4>
                <p className="text-small text-muted">
                  To make property ownership in Enugu straightforward, well-documented and worth the investment.
                </p>
              </div>
              <div>
                <h4 className="mb-1.5 text-caption font-bold uppercase tracking-wide text-navy">Vision</h4>
                <p className="text-small text-muted">
                  To be a name Enugu residents trust with their biggest property decisions.
                </p>
              </div>
            </div>

            <Button to="/about" variant="outline">
              About Zenith Point
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
