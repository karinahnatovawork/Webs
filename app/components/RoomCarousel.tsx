"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = Array.from({ length: 4 }, () => "/images/Ciudad-artes-exterior.jpg");

export default function RoomCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  function showPreviousSlide() {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  }

  function showNextSlide() {
    setActiveSlide((current) => (current + 1) % slides.length);
  }

  return (
    <div
      aria-label="Galerie des chambres"
      aria-roledescription="carrousel"
      className="relative bg-linen p-2 md:p-4"
      role="region"
    >
      <div className="relative aspect-[3/2] overflow-hidden bg-cream">
        <div
          className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              aria-hidden={activeSlide !== index}
              className="relative h-full min-w-full"
            >
              <Image
                src={slide}
                alt="La Ciudad de las Artes y las Ciencias"
                fill
                priority={index === 0}
                sizes="(min-width: 1600px) 1536px, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <span aria-live="polite" className="sr-only">
          Image {activeSlide + 1} sur {slides.length}
        </span>
      </div>

      <button
        type="button"
        aria-label="Image précédente"
        onClick={showPreviousSlide}
        className="absolute left-2 top-1/2 grid size-5 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-sand text-cream transition-colors hover:bg-wood focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wood"
      >
        <ChevronLeft aria-hidden="true" size={14} strokeWidth={1.5} />
      </button>
      <button
        type="button"
        aria-label="Image suivante"
        onClick={showNextSlide}
        className="absolute right-2 top-1/2 grid size-5 translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-sand text-cream transition-colors hover:bg-wood focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wood"
      >
        <ChevronRight aria-hidden="true" size={14} strokeWidth={1.5} />
      </button>
    </div>
  );
}