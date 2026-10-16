"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Location, PurpleHouseIllus, SearchIcon } from "@repo/icons";
import { Button, Container, Text } from "@repo/ui";
import { AgentCard } from "@/features/home-owner/properties/components/nuggets/agent-card";
import { GuestPropertyDetails } from "../../guest.types";

export const PropertyAgentCard = ({
  property,
  className,
}: {
  property: GuestPropertyDetails;
  className?: string;
}) => (
  <Container className={className}>
    <AgentCard
      user={property.lister}
      verified
      roleLabel={property.lister.role}
    />
  </Container>
);

export const PropertyMapCard = ({
  property,
  className = "",
}: {
  property: GuestPropertyDetails;
  className?: string;
}) => (
  <Container className={`overflow-hidden rounded-xl bg-surface ${className}`}>
    <Container className="relative h-50 w-full bg-muted lg:h-40">
      <Image
        src="/property-map.png"
        alt="Property location map"
        fill
        className="object-cover"
      />
      {/* On mobile the agent card floats over the map; on desktop it sits above it. */}
      <Container className="absolute inset-x-0 top-1/3 shadow-lg lg:hidden">
        <AgentCard
          user={property.lister}
          verified
          roleLabel={property.lister.role}
        />
      </Container>
    </Container>
    <Container className="flex items-center gap-2 px-4 py-3">
      <Container as="span" className="text-s300">
        <Location size={14} />
      </Container>
      <Text variant="body-xs" tone="primary">
        {property.location}
      </Text>
    </Container>
  </Container>
);

export const PropertyCheckoutCard = ({ className = "" }: { className?: string }) => {
  const router = useRouter();

  return (
    <Container
      className={`relative overflow-hidden rounded-xl bg-p300 p-5 ${className}`}
    >
      <Container className="absolute bottom-0 right-0">
        <PurpleHouseIllus />
      </Container>
      <Text
        variant="body-sm"
        tone="inverted"
        className="relative max-w-[70%] !font-bold"
      >
        Check out various properties in this area
      </Text>
      <Container className="relative mt-4">
        <Button
          shorter
          onClick={() => router.push("/available-properties")}
          rightIcon={<SearchIcon size={12} />}
          className="!gap-1 !px-3 !py-1.5 !text-xs !bg-white !text-primary hover:!bg-s50"
        >
          Search
        </Button>
      </Container>
    </Container>
  );
};
