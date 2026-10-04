"use client";

import { Button, Container, Text } from "@repo/ui";
import { ArrowRight } from "@repo/icons";
import { useRouter } from "next/navigation";
import { AVAILABLE_PROPERTIES_MOCK } from "../../data/available-properties.mock";
import { SectionTag } from "../section-tag";
import { PropertyListingCard } from "./property-listing-card";

export const AvailableProperties = () => {
  const router = useRouter();
  return (
    <Container className="flex flex-col py-16 md:py-24">
      <SectionTag label="Available Properties" />
      <Container className="mb-12 mt-4 w-full md:w-[45%]">
        <Text variant="h2" tone="primary">
          Explore different options for your dream home.
        </Text>
      </Container>
      <Container className="grid w-full grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {AVAILABLE_PROPERTIES_MOCK.map((property) => (
          <PropertyListingCard key={property.id} property={property} />
        ))}
      </Container>
      <Container className="mt-14 flex justify-center">
        <Button
          onClick={() => router.push("/properties")}
          variant="primary"
          rightIcon={<ArrowRight size={14} />}
        >
          View all properties
        </Button>
      </Container>
    </Container>
  );
};
