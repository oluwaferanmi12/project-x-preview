import ListPropertyScreen from "@/features/home-owner/properties/screens/list-property.screen";
import { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "List a Property" };

const ListProperty = () => {
  return (
    <Suspense fallback={null}>
      <ListPropertyScreen />
    </Suspense>
  );
};

export default ListProperty;
