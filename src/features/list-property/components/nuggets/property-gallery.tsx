"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

import largeView from "@/assets/images/gallery/large-view.png";
import img1 from "@/assets/images/gallery/image-inactive.png";
import img2 from "@/assets/images/gallery/image-inactive-1.png";
import img3 from "@/assets/images/gallery/image-inactive-2.png";
import img4 from "@/assets/images/gallery/image-inactive-3.png";
import img5 from "@/assets/images/gallery/image-inactive-4.png";
import img6 from "@/assets/images/gallery/image-inactive-5.png";
import img7 from "@/assets/images/gallery/image-inactive-6.png";
import img8 from "@/assets/images/gallery/image-inactive-7.png";
import img9 from "@/assets/images/gallery/image-inactive-8.png";
import { Container } from "@/components/common/container/container";

const images: StaticImageData[] = [
  largeView,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
];

export const PropertyGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex];

  return (
    <Container className="space-y-2.5">
      <Container className="relative h-50 w-full overflow-hidden rounded-[10px]">
        <Image
          src={active}
          alt="Property image"
          fill
          priority
          className="object-cover"
        />
      </Container>

      <Container className="flex justify-between cursor-grabbing items-center gap-1.5 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {images.slice(0, 9).map((img, i) => {
          const isActive = activeIndex === i;

          return (
            <Container
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border transition ${
                isActive
                  ? "border-primary"
                  : "border-transparent"
              }`}
            >
              <Image
                src={img}
                alt={`Property thumbnail ${i + 1}`}
                fill
                className="object-cover"
              />
            </Container>
          );
        })}
      </Container>
    </Container>
  );
};