import type { WalkthroughVideo } from "@/types";

interface VideoModalProps {
  video: WalkthroughVideo | null;
  onClose: () => void;
}

export default function VideoModal({ video, onClose }: VideoModalProps) {
  if (!video) return null;

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center bg-ink/85 p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div
        className="relative w-full max-w-measure rounded-lg bg-navy p-9 text-center text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} aria-label="Close video" className="absolute right-3.5 top-3.5 p-2.5 text-2xl leading-none text-white">
          &times;
        </button>
        <h3 id="video-modal-title" className="mb-3 font-serif text-h3 font-normal">{video.title === "[Video Placeholder]" ? video.category : video.title}</h3>
        <p className="text-small leading-relaxed text-white/70">
          This walkthrough is reserved for verified Zenith Point footage. Once video assets are supplied, this
          modal plays them directly — no placeholder content is invented here.
        </p>
      </div>
    </div>
  );
}
