"use client";

import React, { useState } from "react";
import Image from "next/image";

import { Container } from "@repo/ui";
import { Text } from "@repo/ui";
import { UploadImage as UploadIcon } from "@repo/icons";
import { PropertyImage } from "../../types/property.types";

export const PropertyGallery = ({
  images,
}: {
  images?: PropertyImage[] | null;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const gallery = images ?? [];
  const active = gallery[activeIndex];

  if (!gallery.length) {
    return (
      <Container className="flex h-50 w-full flex-col items-center justify-center gap-2 rounded-[10px] border border-dashed border-s75 bg-s50">
        <UploadIcon className="text-s300" />
        <Text variant="body-sm" tone="secondary">
          No photos uploaded yet
        </Text>
      </Container>
    );
  }

  return (
    <Container className="space-y-2.5">
      <Container className="relative h-50 w-full overflow-hidden rounded-[10px]">
        <Image
          src={active.optimizedUrl}
          alt="Property image"
          fill
          priority
          className="object-cover"
        />
      </Container>

      <Container className="flex justify-between cursor-grabbing items-center gap-1.5 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {gallery.map((img, i) => {
          const isActive = activeIndex === i;

          return (
            <Container
              key={img.publicId || i}
              onClick={() => setActiveIndex(i)}
              className={`relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border transition ${
                isActive ? "border-primary" : "border-transparent"
              }`}
            >
              <Image
                src={img.optimizedUrl}
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
