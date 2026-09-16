import { properties } from "@/data/properties";
import PropertyCard from "./PropertyCard";
import Reveal from "../ui/Reveal";
import SampleTag from "../ui/SampleTag";
import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";
import Button from "../ui/Button";

export default function PropertyGrid() {
  const featured = properties.slice(0, 4);

  return (
    <section id="properties" className="py-16 md:py-24">
      <Container>
        <Reveal className="flex max-w-measure-lg flex-col gap-2">
          <SectionLabel>Featured Properties</SectionLabel>
          <h2 className="font-serif text-h2 font-normal sm:text-h2-lg">Properties worth looking at.</h2>
          <p className="max-w-measure text-body text-muted">
            A sample of the property card layout, populated with representative Enugu listings.
          </p>
          <div className="mt-1">
            <SampleTag label="Sample listings — replace with verified property data" />
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((property, i) => (
            <Reveal key={property.id} delay={i * 60}>
              <PropertyCard property={property} />
            </Reveal>
          ))}
        </div>

        <div className="mt-11 text-center">
          <Button to="/properties" variant="outline">
            View All Properties
          </Button>
        </div>
      </Container>
    </section>
  );
}
