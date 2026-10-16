const DARK = [0x12, 0x12, 0x12];

const hexToRgb = (hex: string) => {
  const value = hex.replace("#", "");
  return [0, 2, 4].map((i) => parseInt(value.slice(i, i + 2), 16));
};

/**
 * Reproduces a Figma linear gradient running from `color` at 0% opacity (top)
 * to #121212 at 100% opacity (bottom). Figma interpolates colour and opacity
 * independently (non-premultiplied), whereas CSS premultiplies, so the stops
 * are computed explicitly to keep the same tint across the card.
 */
export const buildCardGradient = (color: string, steps = 10) => {
  const from = hexToRgb(color);
  const stops = Array.from({ length: steps + 1 }, (_, i) => {
    const t = i / steps;
    const [r, g, b] = from.map((c, idx) =>
      Math.round(c + (DARK[idx]! - c) * t),
    );
    return `rgba(${r}, ${g}, ${b}, ${t.toFixed(2)}) ${Math.round(t * 100)}%`;
  });
  return `linear-gradient(to bottom, ${stops.join(", ")})`;
};
