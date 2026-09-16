import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Reveal from "../ui/Reveal";
import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";
import Button from "../ui/Button";

const types = ["All", "Land", "Residential", "Commercial", "Development"];

export default function PropertySearch() {
  const [activeType, setActiveType] = useState("All");
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate("/properties");
  }

  return (
    <section className="bg-offwhite py-16 md:py-[72px]" id="discovery">
      <Container>
        <Reveal className="mb-7">
          <SectionLabel>Property Discovery</SectionLabel>
          <h2 className="mt-2 font-serif text-h2 font-normal sm:text-h2-lg">Find your next property.</h2>
          <p className="mt-1.5 text-body-sm text-muted">
            Search across land, residential, commercial and development opportunities.
          </p>
        </Reveal>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-3.5 rounded border border-line bg-white p-5 shadow-[0_20px_40px_-28px_rgba(11,31,94,0.2)] md:grid-cols-[1.2fr_1fr_1fr_1fr_auto] md:items-end md:gap-3.5 md:p-6"
        >
          <Field id="loc" label="Location">
            <option value="">Any location in Enugu</option>
            <option>GRA, Enugu</option>
            <option>Independence Layout</option>
            <option>Trans-Ekulu</option>
            <option>New Haven</option>
          </Field>
          <Field id="type" label="Property Type">
            <option value="">All types</option>
            <option>Land</option>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Development</option>
          </Field>
          <Field id="price" label="Price Range">
            <option value="">Any price</option>
            <option>Under ₦20m</option>
            <option>₦20m – ₦50m</option>
            <option>₦50m and above</option>
          </Field>
          <Field id="avail" label="Availability">
            <option value="">Any status</option>
            <option>Available</option>
            <option>Under Development</option>
            <option>Sold</option>
          </Field>

          <Button type="submit" className="w-full justify-center md:w-auto">
            Search Properties
          </Button>
        </form>

        <div className="mt-4.5 flex flex-wrap gap-2.5" role="group" aria-label="Quick property type filters">
          {types.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setActiveType(t)}
              aria-pressed={activeType === t}
              className={`rounded-full border px-4.5 py-2 text-caption font-semibold transition-colors ${
                activeType === t
                  ? "border-navy bg-navy text-white"
                  : "border-line bg-white text-muted hover:border-navy hover:text-navy"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-label font-bold uppercase tracking-wide text-muted">
        {label}
      </label>
      <select id={id} className="w-full rounded-sm border border-line px-3.5 py-3 text-small text-ink">
        {children}
      </select>
    </div>
  );
}
