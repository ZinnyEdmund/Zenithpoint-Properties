import { projects } from "@/data/projects";
import ProjectCard from "@/components/project/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import SampleTag from "@/components/ui/SampleTag";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Projects() {
  return (
    <>
      <section className="border-b border-line bg-offwhite pb-14 pt-32 md:pb-16">
        <Container>
          <Reveal className="max-w-measure-lg">
            <SectionLabel>Projects</SectionLabel>
            <h1 className="mt-2 font-serif text-h1 font-normal sm:text-h1-lg">What we're building.</h1>
            <p className="mt-3.5 max-w-measure text-body text-muted">
              Zenith Point developments, from planning through to delivery.
            </p>
            <div className="mt-3">
              <SampleTag label="Illustrative projects — replace with real Zenith Point developments" />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.id} delay={i * 80}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
