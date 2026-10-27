"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import { AddIcon, MinusIcon } from "@repo/icons";
import { Button, Container, Text } from "@repo/ui";
import { useGetCoverage } from "../../hooks/guest.hooks";
import { MAP_KEY_TO_ISO } from "../../guest.constants";
import { NIGERIA_STATES, NIGERIA_VIEWBOX } from "../../data/nigeria-states";

const [, , VIEWBOX_WIDTH, VIEWBOX_HEIGHT] =
  NIGERIA_VIEWBOX.split(" ").map(Number);
const MIN_ZOOM = 1;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.5;
// Below this width the labels overlap, so small screens scroll sideways instead.
const MIN_MAP_WIDTH_CLASS = "min-w-[720px] lg:min-w-0";

// The map scales from its centre, so at a given zoom it overhangs the frame by
// (zoom - 1) / 2 of its size on each side. That overhang is how far it can pan.
const getPanLimits = (
  zoom: number,
  size: { width: number; height: number },
) => ({
  x: ((zoom - 1) * size.width) / 2,
  y: ((zoom - 1) * size.height) / 2,
});

export const CoverageMap = () => {
  const { data } = useGetCoverage();
  const frameRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(MIN_ZOOM);
  const [frameSize, setFrameSize] = useState({ width: 0, height: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map id (e.g. "NG-LA") -> number of listings in that state.
  const listingCounts = useMemo(
    () =>
      new Map(
        (data ?? [])
          .filter((state) => MAP_KEY_TO_ISO[state.mapKey])
          .map((state) => [
            MAP_KEY_TO_ISO[state.mapKey],
            state.availableListingCount,
          ]),
      ),
    [data],
  );

  // On small screens, start scrolled to the middle of the map.
  useEffect(() => {
    const scroller = scrollRef.current;
    if (scroller) {
      scroller.scrollLeft = (scroller.scrollWidth - scroller.clientWidth) / 2;
    }
  }, []);

  const limits = getPanLimits(zoom, frameSize);

  const changeZoom = (step: number) => {
    const next = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, zoom + step));
    const frame = frameRef.current;
    const size = frame
      ? { width: frame.offsetWidth, height: frame.offsetHeight }
      : frameSize;
    const nextLimits = getPanLimits(next, size);
    setFrameSize(size);
    setZoom(next);
    // Zooming out shrinks the pan area, so pull the map back inside it.
    animate(x, Math.min(nextLimits.x, Math.max(-nextLimits.x, x.get())));
    animate(y, Math.min(nextLimits.y, Math.max(-nextLimits.y, y.get())));
  };

  return (
    <Container className="relative mt-22 mb-6 w-full lg:w-[60%] mx-auto">
      <Container
        ref={scrollRef}
        className="overflow-x-auto lg:overflow-visible"
      >
        <Container
          ref={frameRef}
          className={`relative overflow-hidden ${MIN_MAP_WIDTH_CLASS}`}
          style={{ aspectRatio: `${VIEWBOX_WIDTH} / ${VIEWBOX_HEIGHT}` }}
        >
          <motion.div
            className={`relative h-full w-full ${zoom > MIN_ZOOM ? "cursor-grab active:cursor-grabbing" : ""}`}
            style={{ x, y }}
            animate={{ scale: zoom }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            drag={zoom > MIN_ZOOM}
            dragConstraints={{
              left: -limits.x,
              right: limits.x,
              top: -limits.y,
              bottom: limits.y,
            }}
            dragElastic={0.1}
          >
            <svg
              viewBox={NIGERIA_VIEWBOX}
              className="h-full w-full"
              role="img"
              aria-label="Map of Nigeria showing the states we cover"
            >
              {NIGERIA_STATES.map((state) => (
                <path
                  key={state.id}
                  d={state.d}
                  // non-scaling-stroke keeps the border at 2 screen pixels at any size or zoom.
                  vectorEffect="non-scaling-stroke"
                  className={`stroke-surface stroke-2 transition-colors ${listingCounts.has(state.id) ? "fill-p50" : "fill-background"}`}
                >
                  <title>{state.name}</title>
                </path>
              ))}
            </svg>

            {NIGERIA_STATES.filter((state) => listingCounts.has(state.id)).map(
              (state) => (
                // A zero-size anchor on the state's centre. Scaling it by 1/zoom
                // keeps the label the same size while the map zooms.
                <Container
                  key={state.id}
                  className="pointer-events-none absolute h-0 w-0"
                  style={{
                    left: `${(state.labelX / VIEWBOX_WIDTH) * 100}%`,
                    top: `${(state.labelY / VIEWBOX_HEIGHT) * 100}%`,
                    transform: `scale(${1 / zoom})`,
                    transformOrigin: "0 0",
                  }}
                >
                  <Container className="absolute bottom-1.5 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <Container className="whitespace-nowrap rounded-md border border-inverted/30 bg-p300 px-2.5 py-1">
                      <Text
                        as="span"
                        variant="body-xs"
                        tone="inverted"
                        className="block text-[10px] uppercase"
                      >
                        {state.name}
                        {/* Counts only fit once zoomed in; at 1x the labels would overlap. */}
                        {zoom > MIN_ZOOM && (
                          <Container as="span" className="ml-1.5 opacity-70">
                            · {listingCounts.get(state.id)}
                          </Container>
                        )}
                      </Text>
                    </Container>
                    <Container className="-mt-1 h-2 w-2 rotate-45 bg-p300" />
                  </Container>
                </Container>
              ),
            )}
          </motion.div>
        </Container>
      </Container>

      {/* Outside the scroll area, so the buttons stay in the corner while the map scrolls. */}
      <Container className="absolute bottom-3 right-3 lg:bottom-0 lg:-right-20 flex flex-col gap-3">
        <Button
          variant="secondary"
          aria-label="Zoom in"
          disabled={zoom >= MAX_ZOOM}
          onClick={() => changeZoom(ZOOM_STEP)}
          rightIcon={<AddIcon />}
        />

        <Button
          variant="secondary"
          aria-label="Zoom out"
          disabled={zoom <= MIN_ZOOM}
          onClick={() => changeZoom(-ZOOM_STEP)}
          rightIcon={<MinusIcon />}
        />
      </Container>
    </Container>
  );
};
