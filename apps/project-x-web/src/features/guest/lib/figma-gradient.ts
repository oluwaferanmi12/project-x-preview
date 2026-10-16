export type Rgb = [number, number, number];

type FigmaGradientOptions = {
  /** CSS angle: 0 runs bottom to top, 180 runs top to bottom. */
  angle: number;
  /** Colour at the opaque end. */
  from: Rgb;
  /** Colour at the transparent end. */
  to: Rgb;
  /** Opacity at the opaque end (the other end is always fully transparent). */
  opacity?: number;
  /** Where the fade starts and ends along the gradient line, in percent.
   *  Before `start` the opaque colour holds; after `end` it is transparent. */
  start?: number;
  end?: number;
};

// A Figma gradient from one colour to another at 0% opacity. Figma blends
// colour and opacity separately, so the end colour shows as a tint through the
// fade; CSS blends them premultiplied, so a plain two-stop gradient goes
// straight to the start colour and looks darker and flatter. Spelling out the
// in-between stops reproduces Figma's result.
export const figmaGradient = ({
  angle,
  from,
  to,
  opacity = 1,
  start = 0,
  end = 100,
}: FigmaGradientOptions) => {
  const stops = Array.from({ length: 11 }, (_, i) => {
    const t = i / 10;
    const [r, g, b] = from.map((value, c) =>
      Math.round(value + (to[c] - value) * t),
    );
    const alpha = Number((opacity * (1 - t)).toFixed(3));
    const position = Number((start + (end - start) * t).toFixed(2));
    return `rgba(${r}, ${g}, ${b}, ${alpha}) ${position}%`;
  });
  return `linear-gradient(${angle}deg, ${stops.join(", ")})`;
};
