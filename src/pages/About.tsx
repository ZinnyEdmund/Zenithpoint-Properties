import Reveal from "@/components/ui/Reveal";
import SampleTag from "@/components/ui/SampleTag";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const values = [
  { title: "Honesty About Documentation", description: "We won't sell you a property with paperwork we can't stand behind." },
  { title: "Straight Answers", description: "If something isn't ready or isn't verified, we say so rather than talk around it." },
  { title: "Long-Term Thinking", description: "We consider what a property becomes, not just what it sells for today." },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[52vh] items-end overflow-hidden bg-navy pt-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
            alt="Zenith Point team placeholder"
            className="h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/30 to-navy/95" />
        </div>
        <div className="relative z-10 w-full pb-12">
          <Container>
            <span className="text-caption font-bold uppercase tracking-[0.12em] text-white/70">About Zenith Point</span>
            <h1 className="mt-2 max-w-[720px] font-serif text-hero-h1 font-normal leading-tight text-white sm:text-hero-h1-lg">
              Property people, based in Enugu.
            </h1>
          </Container>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="mb-4">
            <SampleTag label="Sample copy — replace with Zenith Point's real story" />
          </div>
          <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
            <Reveal>
              <h2 className="mb-4 font-serif text-h3 font-normal">Our Story</h2>
              <p className="mb-4 max-w-[480px] text-body-sm leading-relaxed text-muted">
                Zenith Point Properties Ltd works across land, residential, commercial and managed property in
                Enugu — helping clients move from a first site visit through documentation to a finished, livable
                property.
              </p>
              <p className="max-w-[480px] text-body-sm leading-relaxed text-muted">
                The company's approach is built around clarity: showing clients exactly what they're buying, what
                paperwork backs it, and what happens next at every stage.
              </p>
            </Reveal>
            <Reveal delay={100} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded border border-line p-6">
                <h3 className="mb-2 text-caption font-bold uppercase tracking-wide text-navy">Mission</h3>
                <p className="text-small text-muted">
                  To make property ownership in Enugu straightforward, well-documented and worth the investment.
                </p>
              </div>
              <div className="rounded border border-line p-6">
                <h3 className="mb-2 text-caption font-bold uppercase tracking-wide text-navy">Vision</h3>
                <p className="text-small text-muted">
                  To be a name Enugu residents and diaspora buyers trust with their biggest property decisions.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="border-y border-line bg-offwhite py-16 md:py-20">
        <Container>
          <Reveal className="mb-10 max-w-[560px]">
            <SectionLabel>Values</SectionLabel>
            <h2 className="mt-2 font-serif text-h3 font-normal sm:text-h3-lg">How we work.</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 70} className="rounded bg-white p-6">
                <h3 className="mb-2 text-h6 font-bold">{v.title}</h3>
                <p className="text-small leading-relaxed text-muted">{v.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* People */}
      <section className="py-16 md:py-20">
        <Container>
          <Reveal className="mb-10 max-w-[560px]">
            <SectionLabel>People</SectionLabel>
            <h2 className="mt-2 font-serif text-h3 font-normal sm:text-h3-lg">The team.</h2>
            <div className="mt-3">
              <SampleTag label="Placeholder — replace with real team photography and names" />
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[1, 2, 3, 4].map((n) => (
              <Reveal key={n} delay={n * 60}>
                <div className="aspect-[3/4] overflow-hidden rounded bg-offwhite" />
                <p className="mt-3 text-small font-bold">[Name Placeholder]</p>
                <p className="text-caption text-muted">[Role Placeholder]</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-line bg-offwhite py-16 md:py-20">
        <Container className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="max-w-[480px] font-serif text-h3 font-normal sm:text-h3-lg">
              Have a property question for us?
            </h2>
          </div>
          <Button to="/contact">Contact Zenith Point</Button>
        </Container>
      </section>
    </>
  );
}
