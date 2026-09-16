import { Link } from "react-router-dom";
import type { Property } from "@/types";
import { statusBadgeClasses } from "@/lib/statusColors";
import Badge from "../ui/Badge";

export default function PropertyCard({ property }: { property: Property }) {
  const meta = [property.size, property.bedrooms ? `${property.bedrooms} Beds` : null].filter(Boolean);

  return (
    <article className="group overflow-hidden rounded border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-30px_rgba(11,31,94,0.35)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="absolute left-3.5 top-3.5 z-10 flex gap-2">
          {property.featured && <Badge tone="zenith">Featured</Badge>}
          <Badge tone="custom" className={statusBadgeClasses[property.status]}>
            {property.status}
          </Badge>
        </div>
        <img
          src={property.images[0]}
          alt={property.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
        />
      </div>

      <div className="p-4.5">
        <span className="text-label font-bold uppercase tracking-wide text-navy">{property.type}</span>
        <h3 className="mb-1 mt-2 text-h6 font-bold leading-snug">{property.name}</h3>
        <p className="mb-2.5 text-caption text-muted">{property.location}</p>

        {meta.length > 0 && (
          <div className="mb-3.5 flex flex-wrap gap-x-3 gap-y-1 text-label font-medium text-muted">
            {meta.map((m) => (
              <span key={m} className="flex items-center gap-1.5 before:h-1 before:w-1 before:rounded-full before:bg-line first:before:hidden">
                {m}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between border-t border-line pt-3.5">
          <span className="text-body-sm font-bold">{property.price}</span>
          <Link to={`/properties/${property.slug}`} className="text-caption font-bold text-zenith hover:text-secondary">
            View Property →
          </Link>
        </div>
      </div>
    </article>
  );
}
