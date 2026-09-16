import { Link } from "react-router-dom";
import type { Project } from "@/types";
import Badge from "../ui/Badge";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-30px_rgba(11,31,94,0.35)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Badge className="absolute left-3.5 top-3.5 z-10">{project.status}</Badge>
        <img
          src={project.images[0]}
          alt={project.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
        />
      </div>
      <div className="p-5">
        <h3 className="mb-1 text-h6 font-bold">{project.name}</h3>
        <p className="mb-3.5 text-caption text-muted">{project.location}</p>
        <p className="text-small leading-relaxed text-muted line-clamp-2">{project.description}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-caption font-bold text-zenith group-hover:text-secondary">
          Explore Project →
        </span>
      </div>
    </Link>
  );
}
