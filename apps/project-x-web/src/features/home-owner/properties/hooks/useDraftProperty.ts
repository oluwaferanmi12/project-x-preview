import React from "react";
import { useGetListings } from "./property.hook";
import { useRouter } from "next/navigation";

export const useDraftProperty = () => {
  const router = useRouter();

  const { data: properties } = useGetListings("DRAFT");
  const continueDraft = (id: string) => {
    router.push(`/properties/list-property?propertyId=${id}`);
  };
  return {
    properties,
    continueDraft,
  };
};
