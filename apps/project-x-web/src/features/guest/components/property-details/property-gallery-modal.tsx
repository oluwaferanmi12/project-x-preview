"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ChevronRight,
  CloseIcon,
  IconImage,
  VideoPlayIcon,
} from "@repo/icons";
import { Button, Container, Text } from "@repo/ui";
import { GalleryMedia } from "../../guest.types";
import { ModalOverlay } from "./modal-overlay";

const ChromeButton = ({
  label,
  onClick,
  children,
  className = "",
}: {
  label: string;
  onClick: () => void;
  children: ReactNode;
  className?: string;
}) => (
  <Button
    shorter
    aria-label={label}
    onClick={onClick}
    className={`!h-9 !w-9 !rounded-lg !bg-background-dark !p-0 !text-inverted hover:!bg-[#3a3a3a] ${className}`}
  >
    {children}
  </Button>
);

const CountPill = ({ children }: { children: ReactNode }) => (
  <Container className="flex h-9 items-center gap-2 rounded-lg bg-background-dark px-3 text-inverted">
    <IconImage size={16} />
    <Text as="span" variant="action-label" tone="inverted">
      {children}
    </Text>
  </Container>
);

const VideoBadge = () => (
  <Container className="absolute inset-0 flex items-center justify-center text-inverted">
    <VideoPlayIcon size={48} />
  </Container>
);

export const PropertyGalleryModal = ({
  items,
  alt,
  initialIndex = null,
  onClose,
}: {
  items: GalleryMedia[];
  alt: string;
  initialIndex?: number | null;
  onClose: () => void;
}) => {
  const [index, setIndex] = useState<number | null>(initialIndex);
  const total = items.length;

  const step = useCallback(
    (delta: number) =>
      setIndex((current) =>
        current === null ? current : (current + delta + total) % total,
      ),
    [total],
  );

  useEffect(() => {
    if (index === null) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [index, step]);

  const current = index === null ? null : items[index];

  return (
    <ModalOverlay
      onClose={onClose}
      label="Property gallery"
      className="flex flex-col overflow-auto bg-black"
    >
      <Container className="flex shrink-0 items-center justify-between p-3">
        {current ? (
          <ChromeButton label="Back to gallery" onClick={() => setIndex(null)}>
            <ArrowLeft size={18} />
          </ChromeButton>
        ) : (
          <ChromeButton label="Close gallery" onClick={onClose}>
            <CloseIcon size={18} />
          </ChromeButton>
        )}
        <CountPill>
          {current ? `${(index ?? 0) + 1}/${total}` : `${total} Media`}
        </CountPill>
      </Container>

      {current ? (
        <Container className="relative min-h-0 flex-1">
          {current.type === "video" && typeof current.src === "string" ? (
            <video
              src={current.src}
              controls
              className="h-full w-full object-contain"
            />
          ) : (
            <Image
              src={current.src}
              alt={`${alt} ${(index ?? 0) + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
            />
          )}
          <ChromeButton
            label="Previous"
            onClick={() => step(-1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 rotate-180"
          >
            <ChevronRight size={18} />
          </ChromeButton>
          <ChromeButton
            label="Next"
            onClick={() => step(1)}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            <ChevronRight size={18} />
          </ChromeButton>
        </Container>
      ) : (
        <Container className="grid grid-cols-1 gap-2 px-3 pb-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, itemIndex) => (
            <Button
              key={item.id}
              variant="transparent"
              aria-label={`Open media ${itemIndex + 1}`}
              onClick={() => setIndex(itemIndex)}
              className="relative aspect-[1.75] !w-full overflow-hidden !rounded-xl !p-0"
            >
              {item.type === "image" || typeof item.src !== "string" ? (
                <Image
                  src={item.src}
                  alt={`${alt} ${itemIndex + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
              ) : (
                <Container className="absolute inset-0 bg-background-dark" />
              )}
              {item.type === "video" && <VideoBadge />}
            </Button>
          ))}
        </Container>
      )}
    </ModalOverlay>
  );
};
