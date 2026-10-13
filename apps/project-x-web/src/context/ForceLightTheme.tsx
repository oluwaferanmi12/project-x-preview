"use client";

import { useLayoutEffect } from "react";
import { useTheme } from "@/context/ThemeContext";

// Runs while the HTML is parsed, before the page content below it is painted.
// The root layout's script has already added "dark" from the saved preference;
// this removes it so a full page load never flashes dark on a forced-light page.
const STRIP_DARK_BEFORE_PAINT = `document.documentElement.classList.remove('dark')`;

/**
 * Keeps everything rendered below it in light mode, whatever the user's saved
 * or OS preference is, and disables the theme toggle while mounted.
 * The saved preference is untouched and returns once this unmounts.
 */
export function ForceLightTheme() {
  const { setForcedLight } = useTheme();

  // Covers client-side navigation, where the inline script does not run.
  // A layout effect, not useEffect: state set here re-renders before the
  // browser paints, so the page never shows a frame in the wrong theme.
  useLayoutEffect(() => {
    setForcedLight(true);
    return () => setForcedLight(false);
  }, [setForcedLight]);

  return <script dangerouslySetInnerHTML={{ __html: STRIP_DARK_BEFORE_PAINT }} />;
}
