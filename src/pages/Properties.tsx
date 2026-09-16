import { properties } from "@/data/properties";
import PropertyCard from "@/components/home/PropertyCard";
import Reveal from "@/components/ui/Reveal";
import SampleTag from "@/components/ui/SampleTag";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Properties() {
  return (
    <>
      <section className="border-b border-line bg-offwhite pb-14 pt-32 md:pb-16">
        <Container>
          <Reveal className="max-w-measure-lg">
            <SectionLabel>Properties</SectionLabel>
            <h1 className="mt-2 font-serif text-h1 font-normal sm:text-h1-lg">
              Every property, in one place.
            </h1>
            <p className="mt-3.5 max-w-measure text-body text-muted">
              Land, residential, commercial and development opportunities across Enugu.
            </p>
            <div className="mt-3">
              <SampleTag label="Sample listings — replace with verified property data" />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          <p className="mb-8 text-small text-muted">{properties.length} properties</p>
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((property, i) => (
              <Reveal key={property.id} delay={(i % 3) * 60}>
                <PropertyCard property={property} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
