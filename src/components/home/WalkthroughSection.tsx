import { useState } from "react";
import { walkthroughs } from "@/data/walkthroughs";
import type { WalkthroughVideo } from "@/types";
import VideoCard from "./VideoCard";
import VideoModal from "./VideoModal";
import Reveal from "../ui/Reveal";
import Container from "../ui/Container";
import SectionLabel from "../ui/SectionLabel";

export default function WalkthroughSection() {
  const [activeVideo, setActiveVideo] = useState<WalkthroughVideo | null>(null);

  return (
    <section id="walkthroughs" className="bg-navy py-16 text-white md:py-24">
      <Container>
        <Reveal className="max-w-measure-lg">
          <SectionLabel tone="dark">
            See It. Walk It. Know It.
          </SectionLabel>
          <h2 className="mt-2 font-serif text-h2 font-normal text-white sm:text-h2-lg">
            Property walkthroughs.
          </h2>
          <p className="mt-3.5 max-w-measure text-body text-white/70">
            Video is reserved for verified Zenith Point footage — structure is ready to accept it.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {walkthroughs.map((video, i) => (
            <Reveal key={video.id} delay={i * 60}>
              <VideoCard video={video} onPlay={setActiveVideo} />
            </Reveal>
          ))}
        </div>
      </Container>

      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </section>
  );
}
