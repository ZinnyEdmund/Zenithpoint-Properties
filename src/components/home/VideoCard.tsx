import type { WalkthroughVideo } from "@/types";

interface VideoCardProps {
  video: WalkthroughVideo;
  onPlay: (video: WalkthroughVideo) => void;
}

export default function VideoCard({ video, onPlay }: VideoCardProps) {
  return (
    <button
      onClick={() => onPlay(video)}
      className="group relative aspect-[3/4] overflow-hidden rounded border border-white/15 bg-white/[0.03] text-left"
    >
      <img src={video.thumbnail} alt="" className="h-full w-full object-cover opacity-50" />
      <span className="absolute left-3.5 top-3.5 text-micro font-bold uppercase tracking-wide text-white/70">
        {video.category}
      </span>
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white/95 transition-transform duration-200 group-hover:scale-110">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#0B1F5E" className="ml-0.5">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
      <span className="absolute bottom-3.5 left-3.5 right-3.5 text-small font-bold text-white">
        {video.title}
      </span>
    </button>
  );
}
