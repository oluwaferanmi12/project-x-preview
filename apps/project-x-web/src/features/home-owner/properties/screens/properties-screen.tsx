"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Container, Text } from "@repo/ui";
import { PropertyStatusTabs } from "../components/property-status-tabs";
import { PropertyListing } from "../components/property-listing";
import type { ListingType } from "../types/property.types";

export const PropertiesScreen = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeStatus: ListingType = useMemo(() => {
    return (searchParams.get("status") as ListingType) || "DRAFT";
  }, [searchParams]);

  const setActiveStatus = (status: ListingType) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("status", status);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Container className="min-h-[90vh] pt-6 pb-10">
      <Container className="mb-6 flex lg:flex-row flex-col lg:items-center justify-between">
        <Text variant="h3" tone="primary" className="lg:mb-0 mb-4">
          Properties
        </Text>

        <PropertyStatusTabs active={activeStatus} onChange={setActiveStatus} />
      </Container>

      <PropertyListing key={activeStatus} status={activeStatus} />
    </Container>
  );
};
