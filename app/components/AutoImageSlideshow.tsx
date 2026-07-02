"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type SlideImage = {
  src: string;
  alt: string;
};

type AutoImageSlideshowProps = {
  images: SlideImage[];
  priorityImage?: string;
};

export default function AutoImageSlideshow({ images, priorityImage }: AutoImageSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-full overflow-hidden bg-slate-900">
      {images.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          priority={image.src === priorityImage}
          sizes="(min-width: 1024px) 66vw, 100vw"
          className={`object-cover transition-opacity duration-700 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-emerald-950/75 to-transparent" />

      <div className="absolute bottom-5 left-5 flex gap-2" aria-hidden="true">
        {images.map((image, index) => (
          <span
            key={image.src}
            className={`h-1 w-8 rounded-full transition-colors ${
              index === activeIndex ? "bg-[#D4AF37]" : "bg-white/45"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
