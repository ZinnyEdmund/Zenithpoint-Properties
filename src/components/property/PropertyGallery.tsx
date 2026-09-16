import { useState } from "react";

export default function PropertyGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="aspect-[16/10] overflow-hidden rounded bg-offwhite">
        <img
          src={images[active]}
          alt={`${name} — image ${active + 1}`}
          className="h-full w-full object-cover"
        />
      </div>

      {images.length > 1 && (
        <>
          {/* Desktop: thumbnail row */}
          <div className="mt-3 hidden gap-3 sm:grid" style={{ gridTemplateColumns: `repeat(${images.length}, 1fr)` }}>
            {images.map((img, i) => (
              <button
                key={img}
                onClick={() => setActive(i)}
                aria-label={`Show image ${i + 1}`}
                aria-current={i === active}
                className={`aspect-[4/3] overflow-hidden rounded-sm border-2 transition-colors ${
                  i === active ? "border-zenith" : "border-transparent hover:border-line"
                }`}
              >
                <img src={img} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>

          {/* Mobile: swipeable strip */}
          <div className="mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1 sm:hidden">
            {images.map((img, i) => (
              <button
                key={img}
                onClick={() => setActive(i)}
                aria-label={`Show image ${i + 1}`}
                className={`aspect-[4/3] w-24 flex-shrink-0 snap-start overflow-hidden rounded-sm border-2 ${
                  i === active ? "border-zenith" : "border-transparent"
                }`}
              >
                <img src={img} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
