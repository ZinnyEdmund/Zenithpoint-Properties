import { FormEvent, useState } from "react";
import { siteConfig, buildWhatsAppLink } from "@/config/site";
import { services } from "@/data/services";
import Reveal from "@/components/ui/Reveal";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  // No backend is wired up yet — this demonstrates the interaction and
  // validation. Replace handleSubmit with a real submission (email, CRM,
  // or serverless function) once one is available.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="pb-20 pt-32 md:pb-28">
      <Container>
        <Reveal className="mb-14 max-w-measure-lg">
          <SectionLabel>Contact</SectionLabel>
          <h1 className="mt-2 font-serif text-h1 font-normal sm:text-h1-lg">Let's talk property.</h1>
          <p className="mt-3.5 max-w-measure text-body text-muted">
            Send an enquiry below, or reach us directly on WhatsApp, phone or email.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-14 md:grid-cols-[1fr_360px]">
          <Reveal>
            {submitted ? (
              <div className="rounded border border-line bg-offwhite p-8">
                <h2 className="mb-2 text-h5 font-bold">Thank you — your enquiry has been noted.</h2>
                <p className="text-small text-muted">
                  This is a demo form with no backend connected yet, so nothing was actually sent. Once a real
                  submission handler is wired up, this confirmation reflects a genuine enquiry.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field id="name" label="Full Name" type="text" required />
                  <Field id="phone" label="Phone Number" type="tel" required />
                </div>
                <Field id="email" label="Email Address" type="email" required />

                <div>
                  <label htmlFor="service" className="mb-2 block text-label font-bold uppercase tracking-wide text-muted">
                    Service / Property of Interest
                  </label>
                  <select id="service" className="w-full rounded-sm border border-line px-3.5 py-3 text-small text-ink">
                    <option value="">Select an option</option>
                    {services.map((s) => (
                      <option key={s.id}>{s.name}</option>
                    ))}
                    <option>A specific property listing</option>
                    <option>General enquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-label font-bold uppercase tracking-wide text-muted">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full resize-none rounded-sm border border-line px-3.5 py-3 text-small text-ink"
                    placeholder="Tell us what you're looking for…"
                  />
                </div>

                <Button type="submit" className="mt-2 w-fit">
                  Send Enquiry
                </Button>
              </form>
            )}
          </Reveal>

          <Reveal delay={100} className="flex flex-col gap-5">
            <InfoRow label="Phone" value={siteConfig.contact.phone} href={`tel:${siteConfig.contact.phone}`} />
            <InfoRow label="Email" value={siteConfig.contact.email} href={`mailto:${siteConfig.contact.email}`} />
            <InfoRow
              label="WhatsApp"
              value="Chat with us directly"
              href={buildWhatsAppLink()}
              external
            />
            <InfoRow label="Office" value={siteConfig.contact.address} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Field({ id, label, type, required }: { id: string; label: string; type: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-label font-bold uppercase tracking-wide text-muted">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        className="w-full rounded-sm border border-line px-3.5 py-3 text-small text-ink"
      />
    </div>
  );
}

function InfoRow({ label, value, href, external }: { label: string; value: string; href?: string; external?: boolean }) {
  const content = (
    <div className="rounded border border-line p-5">
      <div className="text-label font-semibold uppercase tracking-wide text-muted">{label}</div>
      <div className="mt-1 text-body-sm font-bold">{value}</div>
    </div>
  );
  if (!href) return content;
  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="hover:opacity-80">
      {content}
    </a>
  );
}
