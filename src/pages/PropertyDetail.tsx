import { Link, Navigate, useParams } from "react-router-dom";
import { getPropertyBySlug, getSimilarProperties } from "@/data/properties";
import { buildWhatsAppLink } from "@/config/site";
import PropertyGallery from "@/components/property/PropertyGallery";
import PropertyCard from "@/components/home/PropertyCard";
import Reveal from "@/components/ui/Reveal";
import SampleTag from "@/components/ui/SampleTag";
import Container from "@/components/ui/Container";
import { statusTextClasses } from "@/lib/statusColors";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export default function PropertyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const property = slug ? getPropertyBySlug(slug) : undefined;

  if (!property) return <Navigate to="/properties" replace />;

  const similar = getSimilarProperties(property);
  const quickFacts = [
    { label: "Property Type", value: property.type },
    { label: "Size", value: property.size ?? "—" },
    ...(property.bedrooms ? [{ label: "Bedrooms", value: String(property.bedrooms) }] : []),
    ...(property.bathrooms ? [{ label: "Bathrooms", value: String(property.bathrooms) }] : []),
    { label: "Location", value: property.location },
    { label: "Status", value: property.status },
  ];

  return (
    <>
      <section className="border-b border-line pb-12 pt-28 md:pb-16 md:pt-32">
        <Container>
          <Link to="/properties" className="mb-6 inline-flex items-center gap-1.5 text-caption font-semibold text-muted hover:text-zenith">
            ← All Properties
          </Link>
          <div className="mb-1">
            <SampleTag label="Sample listing — replace with verified property data" />
          </div>

          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-label font-bold uppercase tracking-wide text-navy">{property.type}</span>
              <h1 className="mt-1.5 font-serif text-h1 font-normal sm:text-h1-lg">{property.name}</h1>
              <p className="mt-1.5 text-body-sm text-muted">{property.location}</p>
            </div>
            <div className="text-left md:text-right">
              <div className="text-h4 font-bold">{property.price}</div>
              <div className={`text-caption font-bold ${statusTextClasses[property.status]}`}>{property.status}</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="py-10 md:py-12">
        <Container>
          <Reveal>
            <PropertyGallery images={property.images} name={property.name} />
          </Reveal>
        </Container>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto grid max-w-wrap grid-cols-1 gap-14 px-6 md:grid-cols-[1fr_360px] md:px-10 lg:px-14">
          {/* Main column */}
          <div>
            {/* Quick facts */}
            <Reveal className="mb-12 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-line py-7 sm:grid-cols-3">
              {quickFacts.map((f) => (
                <div key={f.label}>
                  <div className="text-label font-semibold uppercase tracking-wide text-muted">{f.label}</div>
                  <div className="mt-1 text-body-sm font-bold">{f.value}</div>
                </div>
              ))}
            </Reveal>

            {/* Overview */}
            <Reveal className="mb-12">
              <h2 className="mb-3 font-serif text-h4 font-normal">Overview</h2>
              <p className="max-w-measure-lg text-body-sm leading-relaxed text-muted">{property.description}</p>
            </Reveal>

            {/* Why this property */}
            {property.features && property.features.length > 0 && (
              <Reveal className="mb-12">
                <h2 className="mb-4 font-serif text-h4 font-normal">Why This Property</h2>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {property.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-small text-ink">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zenith" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            {/* Documentation */}
            {property.documentation && property.documentation.length > 0 && (
              <Reveal className="mb-12">
                <h2 className="mb-4 font-serif text-h4 font-normal">Documentation</h2>
                <ul className="flex flex-wrap gap-2.5">
                  {property.documentation.map((doc) => (
                    <li
                      key={doc}
                      className="rounded-full border border-line bg-offwhite px-4 py-2 text-caption font-semibold text-ink"
                    >
                      {doc}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            {/* Location */}
            <Reveal>
              <h2 className="mb-4 font-serif text-h4 font-normal">Location</h2>
              <div className="flex aspect-[16/8] items-center justify-center rounded border border-line bg-offwhite">
                <p className="max-w-[280px] text-center text-caption text-muted">
                  Map placeholder — {property.location}. Connect a maps integration once coordinates are confirmed.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Enquiry sidebar */}
          <Reveal delay={100}>
            <div className="sticky top-28 rounded border border-line bg-offwhite p-7">
              <h3 className="mb-2 text-h6 font-bold">Interested in this property?</h3>
              <p className="mb-5 text-small text-muted">
                Send an enquiry and the Zenith Point team will get back to you with more details.
              </p>
              <Button
                href={buildWhatsAppLink(
                  `Hello Zenith Point, I'm interested in ${property.name}. I'd like to get more information.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-3 w-full justify-center"
              >
                Enquire on WhatsApp
              </Button>
              <Button to="/contact" variant="outline" className="w-full justify-center">
                Send an Enquiry Form
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Similar properties */}
      {similar.length > 0 && (
        <section className="border-t border-line bg-offwhite py-16 md:py-20">
          <Container>
            <Reveal className="mb-10">
              <SectionLabel>Similar Properties</SectionLabel>
              <h2 className="mt-2 font-serif text-h3 font-normal sm:text-h3-lg">You might also like.</h2>
            </Reveal>
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {similar.map((p, i) => (
                <Reveal key={p.id} delay={i * 60}>
                  <PropertyCard property={p} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
