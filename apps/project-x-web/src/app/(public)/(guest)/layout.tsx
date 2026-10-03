import type { ReactNode } from "react";
import { ForceLightTheme } from "@/context/ForceLightTheme";

// Landing page and guest views are always light, even if the visitor's
// saved or OS preference is dark.
export default function GuestLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <ForceLightTheme />
      {children}
    </>
  );
}
