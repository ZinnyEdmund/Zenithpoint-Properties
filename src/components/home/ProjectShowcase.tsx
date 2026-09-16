import Button from "../ui/Button";
import Badge from "../ui/Badge";
import Reveal from "../ui/Reveal";
import SampleTag from "../ui/SampleTag";
import { featuredProject } from "@/data/projects";
import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";

export default function ProjectShowcase() {
  return (
    <section id="featured-project" className="bg-navy py-16 text-white md:py-24">
      <Container>
        <Reveal className="flex max-w-measure-lg flex-col gap-2">
          <SectionLabel tone="dark">What We're Building</SectionLabel>
          <h2 className="font-serif text-h2 font-normal text-white sm:text-h2-lg">Featured development.</h2>
          <p className="max-w-measure text-body text-white/70">
            A representative look at how a Zenith Point project will be presented.
          </p>
          <div className="mt-1">
            <SampleTag label="Illustrative project — replace with a real Zenith Point development" />
          </div>
        </Reveal>

        <Reveal className="mt-12 grid grid-cols-1 overflow-hidden rounded border border-white/15 md:grid-cols-[1.1fr_1fr]">
          <div className="relative aspect-[16/11] bg-white/5">
            <img
              src={featuredProject.images[0]}
              alt={featuredProject.name}
              className="h-full w-full object-cover"
            />
            <Badge tone="glass-navy" size="md" className="absolute left-4.5 top-4.5">
              {featuredProject.status}
            </Badge>
          </div>

          <div className="flex flex-col justify-center p-8 md:p-9">
            <h3 className="font-serif text-h3 font-normal text-white sm:text-h3-lg">{featuredProject.name}</h3>
            <p className="mb-4.5 mt-1.5 text-small font-semibold text-white/60">{featuredProject.location}</p>
            <p className="mb-6 text-body-sm leading-relaxed text-white/70">{featuredProject.description}</p>

            <dl className="mb-7 grid grid-cols-2 gap-x-5 gap-y-4 border-t border-white/10 pt-5">
              {featuredProject.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-label font-semibold uppercase tracking-wide text-white/50">{fact.label}</dt>
                  <dd className="mt-0.5 text-body-sm font-bold text-white">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <Button to={`/projects/${featuredProject.slug}`} variant="ghost" className="self-start">
              Explore Project
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
