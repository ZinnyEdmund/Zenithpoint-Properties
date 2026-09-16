import { Link, Navigate, useParams } from "react-router-dom";
import { getProjectBySlug, projects } from "@/data/projects";
import { buildWhatsAppLink } from "@/config/site";
import ProjectCard from "@/components/project/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import SampleTag from "@/components/ui/SampleTag";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) return <Navigate to="/projects" replace />;

  const related = projects.filter((p) => p.id !== project.id);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[56vh] items-end overflow-hidden bg-navy pt-32">
        <div className="absolute inset-0 z-0">
          <img src={project.images[0]} alt={project.name} className="h-full w-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/30 to-navy/95" />
        </div>
        <div className="relative z-10 w-full pb-12">
          <Container>
            <Link to="/projects" className="mb-5 inline-flex items-center gap-1.5 text-caption font-semibold text-white/70 hover:text-white">
              ← All Projects
            </Link>
            <Badge tone="glass-light" size="md" className="mb-3 inline-block">
              {project.status}
            </Badge>
            <h1 className="max-w-[720px] font-serif text-hero-h1 font-normal leading-tight text-white sm:text-hero-h1-lg">
              {project.name}
            </h1>
            <p className="mt-2 text-body-sm font-semibold text-white/70">{project.location}</p>
          </Container>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          <div className="mb-10">
            <SampleTag label="Illustrative project — replace with real Zenith Point development data" />
          </div>

          <div className="grid grid-cols-1 gap-14 md:grid-cols-[1fr_320px]">
            <div>
              {/* Vision / overview */}
              <Reveal className="mb-12">
                <h2 className="mb-3 font-serif text-h4 font-normal">Development Vision</h2>
                <p className="max-w-measure-lg text-body-sm leading-relaxed text-muted">{project.description}</p>
              </Reveal>

              {/* Gallery */}
              <Reveal className="mb-12">
                <h2 className="mb-4 font-serif text-h4 font-normal">Gallery</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {project.images.map((img, i) => (
                    <div key={img} className={`overflow-hidden rounded ${i === 0 ? "sm:col-span-2 aspect-[16/9]" : "aspect-[4/3]"}`}>
                      <img src={img} alt={`${project.name} ${i + 1}`} className="h-full w-full object-cover" />
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Development progress */}
              <Reveal className="mb-12">
                <h2 className="mb-4 font-serif text-h4 font-normal">Development Progress</h2>
                <p className="text-small text-muted">
                  {project.status === "Under Development"
                    ? "Site infrastructure is underway. Progress updates and site photography will be added here as work continues."
                    : "This project is currently in planning and approvals. Progress updates will be published once site work begins."}
                </p>
              </Reveal>

              {/* Location */}
              <Reveal>
                <h2 className="mb-4 font-serif text-h4 font-normal">Location</h2>
                <div className="flex aspect-[16/8] items-center justify-center rounded border border-line bg-offwhite">
                  <p className="max-w-[280px] text-center text-caption text-muted">
                    Map placeholder — {project.location}. Connect a maps integration once coordinates are confirmed.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Sidebar: key facts + enquiry */}
            <div className="flex flex-col gap-6">
              <Reveal className="rounded border border-line p-6">
                <h3 className="mb-4 text-caption font-bold uppercase tracking-wide text-muted">Key Facts</h3>
                <dl className="flex flex-col gap-4">
                  {project.facts.map((fact) => (
                    <div key={fact.label} className="flex items-baseline justify-between gap-3 border-b border-line pb-3 last:border-0 last:pb-0">
                      <dt className="text-caption text-muted">{fact.label}</dt>
                      <dd className="text-right text-small font-bold">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>

              <Reveal delay={80} className="rounded border border-line bg-offwhite p-6">
                <h3 className="mb-2 text-h6 font-bold">Interested in this project?</h3>
                <p className="mb-5 text-caption text-muted">
                  Speak with the team about available units and phased pricing.
                </p>
                <Button
                  href={buildWhatsAppLink(`Hello Zenith Point, I'd like to learn more about ${project.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full justify-center"
                >
                  Enquire on WhatsApp
                </Button>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="border-t border-line bg-offwhite py-16 md:py-20">
          <Container>
            <Reveal className="mb-10">
              <SectionLabel>Related Projects</SectionLabel>
              <h2 className="mt-2 font-serif text-h3 font-normal sm:text-h3-lg">More from Zenith Point.</h2>
            </Reveal>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {related.map((p, i) => (
                <Reveal key={p.id} delay={i * 80}>
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
