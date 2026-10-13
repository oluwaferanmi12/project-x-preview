import { Button, Container, Text } from "@repo/ui";
import Image from "next/image";
import React from "react";
import { figmaGradient } from "@/features/guest/lib/figma-gradient";

// The design stacks two gradient fills over the photo, each at 50% opacity.
// Handle positions were fitted from the design's pixels (CSS lists the top
// layer first, like Figma's fill panel):
//  - top layer: black, solid for the first 7% of the height, gone by 63%
//  - bottom layer: black solid from 60% down, fading to #666666 at 0% opacity
//    by the top edge
const OVERLAY = [
  figmaGradient({
    angle: 180,
    from: [0, 0, 0],
    to: [0, 0, 0],
    opacity: 0.5,
    start: 7,
    end: 63,
  }),
  figmaGradient({
    angle: 0,
    from: [0, 0, 0],
    to: [102, 102, 102],
    opacity: 0.5,
    start: 40,
    end: 100,
  }),
].join(", ");

export const EverythingYouNeed = () => {
  return (
    <Container className="relative overflow-hidden py-28">
      {/* Background photo via next/image so the 4096px source is resized for
          the viewport. The 32.5% vertical position matches the design's crop. */}
      <Image
        src="/everything-you-need.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "50% 32.5%" }}
      />
      <Container
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: OVERLAY }}
      />
      <Container className="relative flex flex-col items-center text-center">
        <Container className="flex max-w-2xl flex-col items-center gap-4">
          {/* The design's heading is ~52px, slightly above the h1 scale (48px);
              larger only from lg up so it still shrinks on small screens.
              The ! beats the custom .text-h1 rule, which a plain class doesn't. */}
          <Text
            variant="h1"
            tone="inverted"
            className="lg:text-[52px]! lg:leading-[1.125]!"
          >
            Everything you need to find or list a home.
          </Text>
          <Text variant="body-lg" tone="inverted">
            Whether you’re looking for your next home or managing properties,
            our mobile app will make the experience easier, faster, and more
            convenient.
          </Text>
        </Container>
        <Container className="mt-10 flex flex-wrap justify-center gap-6">
          {/* min-w, not w: Button's own w-auto would win over a w-* class. */}
          <Button variant="muted" shorter className="h-10 min-w-46.5">
            Renters
          </Button>
          <Button variant="secondary" shorter className="h-10 min-w-46.5">
            Property Listers
          </Button>
        </Container>
      </Container>
    </Container>
  );
};
