import { useState } from "react";
import Reveal from "../ui/Reveal";
import SampleTag from "../ui/SampleTag";
import { testimonials } from "@/data/testimonials";
import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  if (testimonials.length === 0) return null;
  const current = testimonials[index];

  function go(dir: 1 | -1) {
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);
  }

  return (
    <section className="bg-offwhite py-16 md:py-24">
      <Container>
        <Reveal className="mx-auto flex max-w-measure-lg flex-col items-center gap-2 text-center">
          <SectionLabel>What Clients Say</SectionLabel>
          <h2 className="font-serif text-h2 font-normal sm:text-h2-lg">Told by the people we've worked with.</h2>
          <div className="mt-1">
            <SampleTag label="Sample testimonials — replace with real client feedback" />
          </div>
        </Reveal>

        <Reveal delay={100} className="relative mx-auto mt-12 max-w-[720px]">
          <div className="rounded border border-line bg-white p-8 text-center md:p-12">
            <svg width="28" height="22" viewBox="0 0 28 22" fill="none" className="mx-auto mb-6 text-navy/25">
              <path
                d="M0 22V13.2C0 5.9 4.5 1 11.5 0l1.2 3.6C8.4 4.9 6.3 7.5 6.1 11H12v11H0zM15.5 22V13.2C15.5 5.9 20 1 27 0l1.2 3.6c-4.3 1.3-6.4 3.9-6.6 7.4h5.9v11h-12z"
                fill="currentColor"
              />
            </svg>
            <p className="mx-auto max-w-measure font-serif text-[20px] font-normal leading-relaxed text-ink sm:text-h4">
              "{current.quote}"
            </p>
            <div className="mt-7">
              <p className="text-body-sm font-bold">{current.name}</p>
              {current.role && <p className="text-caption text-muted">{current.role}</p>}
              {current.propertyReference && (
                <p className="mt-1 text-label font-semibold text-navy">{current.propertyReference}</p>
              )}
            </div>
          </div>

          {testimonials.length > 1 && (
            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-zenith hover:text-zenith"
              >
                ←
              </button>
              <div className="flex gap-1.5" role="tablist" aria-label="Testimonial selector">
                {testimonials.map((t, i) => (
                  <button
                    key={t.id}
                    onClick={() => setIndex(i)}
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Show testimonial ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === index ? "w-6 bg-navy" : "w-1.5 bg-line"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-zenith hover:text-zenith"
              >
                →
              </button>
            </div>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
