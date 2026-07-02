"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Container, Text } from "@repo/ui";
import { PropertyStatusTabs } from "@/features/home-owner/properties/components/property-status-tabs";
import { PropertiesScreen } from "@/features/home-owner/properties/screens/properties-screen";
import type { PropertyStatus } from "@/features/home-owner/properties/data/properties.mock";

const propertyStatuses: PropertyStatus[] = [
  "draft",
  "under-review",
  "published",
  "archived",
];

export default function PropertiesPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeStatus = useMemo(() => {
    const status = searchParams.get("status");

    return propertyStatuses.includes(status as PropertyStatus)
      ? (status as PropertyStatus)
      : "draft";
  }, [searchParams]);

  const setActiveStatus = (status: PropertyStatus) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("status", status);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Container className="min-h-[90vh] pb-10">
      <Container className="mb-6 flex lg:flex-row flex-col lg:items-center justify-between">
        <Text variant="h3" tone="primary" className="lg:mb-0 mb-4">
          Properties
        </Text>

        <PropertyStatusTabs active={activeStatus} onChange={setActiveStatus} />
      </Container>

      <PropertiesScreen key={activeStatus} status={activeStatus} />
    </Container>
  );
}
