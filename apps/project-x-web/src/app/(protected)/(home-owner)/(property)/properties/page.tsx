"use client";

import { Suspense } from "react";
import { PropertiesScreen } from "@/features/home-owner/properties/screens/properties-screen";

export default function PropertiesPage() {
  return (
    <Suspense fallback={null}>
      <PropertiesScreen />
    </Suspense>
  );
}
