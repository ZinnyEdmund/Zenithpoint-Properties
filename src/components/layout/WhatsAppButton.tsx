import { useLocation } from "react-router-dom";
import { buildWhatsAppLink } from "@/config/site";
import { getPropertyBySlug } from "@/data/properties";
import { getProjectBySlug } from "@/data/projects";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

// Reads the current route and swaps in a context-aware WhatsApp message —
// property name on a property page, project name on a project page,
// otherwise the general homepage message. Everything routes through the
// single buildWhatsAppLink() helper, so the number itself is still only
// ever configured in one place.
function useContextualMessage(): string | undefined {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);

  if (segments[0] === "properties" && segments[1]) {
    const property = getPropertyBySlug(segments[1]);
    if (property) return `Hello Zenith Point, I'm interested in ${property.name}. I'd like to get more information.`;
  }
  if (segments[0] === "projects" && segments[1]) {
    const project = getProjectBySlug(segments[1]);
    if (project) return `Hello Zenith Point, I'd like to learn more about ${project.name}.`;
  }
  return undefined;
}

export default function WhatsAppButton() {
  const message = useContextualMessage();

  return (
    <div className="fixed bottom-6 right-6 z-[150] sm:bottom-8 sm:right-8">
      <a
        href={buildWhatsAppLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Zenith Point on WhatsApp"
        className="group flex items-center gap-2.5 rounded-full bg-[#20BA5A] p-3.75 text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.35)] transition-[padding] duration-300"
      >
        <WhatsAppIcon className="shrink-0" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold transition-[max-width] duration-300 group-hover:max-w-[200px] group-focus-visible:max-w-[200px]">
          Chat with Zenith Point
        </span>
      </a>
    </div>
  );
}
