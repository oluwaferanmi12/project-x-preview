import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = { title: "Properties" };

export default function PropertiesLayout({ children }: { children: ReactNode }) {
  return children;
}
