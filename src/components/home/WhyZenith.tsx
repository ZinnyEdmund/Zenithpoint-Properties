import Reveal from "../ui/Reveal";
import { whyZenith } from "@/data/whyZenith";
import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";

const icons: Record<string, JSX.Element> = {
  "Local Knowledge": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  "Clear Process": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M9 6h11M9 12h11M9 18h11" />
      <path d="M4 6h.01M4 12h.01M4 18h.01" />
    </svg>
  ),
  "Professional Guidance": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5 20c1.2-3.6 4-5.4 7-5.4s5.8 1.8 7 5.4" />
    </svg>
  ),
  "Long-Term Value": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 17l6-6 4 4 7-7" />
      <path d="M15 8h5v5" />
    </svg>
  ),
};

export default function WhyZenith() {
  return (
    <section className="bg-offwhite py-16 md:py-24">
      <Container>
        <Reveal className="max-w-measure-lg">
          <SectionLabel>Why Zenith Point</SectionLabel>
          <h2 className="mt-2 font-serif text-h2 font-normal sm:text-h2-lg">
            Property is a big decision. We understand.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[2px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {whyZenith.map((point, i) => (
            <Reveal key={point.title} delay={i * 60} className="bg-white p-7">
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-navy/[0.06] text-navy">
                {icons[point.title]}
              </span>
              <h3 className="mb-2.5 text-h6 font-bold">{point.title}</h3>
              <p className="text-small leading-relaxed text-muted">{point.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
