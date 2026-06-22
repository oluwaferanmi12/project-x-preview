"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button, Container, Text } from "@repo/ui";
import { properties } from "../data/properties.mock";

export const PublishedPropertyDetailsScreen = ({
  propertyId,
}: {
  propertyId: string;
}) => {
  const router = useRouter();

  const property = properties.find((item) => item.id === propertyId);

  if (!property) {
    return (
      <Container>
        <Text>Property not found.</Text>
      </Container>
    );
  }

  return (
    <Container>
      <button
        type="button"
        onClick={() => router.back()}
        className="mb-4 text-sm font-medium text-d300"
      >
        ← Back
      </button>

      <Container className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
        <Container className="rounded-2xl bg-surface p-4">
          <Container className="mb-4 flex items-center justify-between">
            <Container>
              <Text variant="h4" tone="primary">
                {property.title}
              </Text>

              <Text variant="body-sm" tone="secondary">
                Published on {property.date}
              </Text>
            </Container>

            <Container className="rounded-full bg-sc300 px-3 py-1">
              <Text variant="body-xs" tone="inverted">
                Published
              </Text>
            </Container>
          </Container>

          <Container className="relative h-72 w-full overflow-hidden rounded-2xl bg-muted">
            <Image
              src={property.image || "/draft-image-placeholder.png"}
              alt={property.title}
              fill
              className="object-cover"
            />
          </Container>

          <Container className="mt-4 flex gap-2 overflow-x-auto">
            {Array.from({ length: 6 }).map((_, index) => (
              <Container
                key={index}
                className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg bg-muted"
              >
                <Image
                  src={property.image || "/draft-image-placeholder.png"}
                  alt={`${property.title} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </Container>
            ))}
          </Container>

          <Container className="mt-6">
            <Text variant="h4" tone="primary">
              ₦300,000
            </Text>

            <Container className="mt-2 flex flex-wrap gap-4">
              <Text variant="body-xs" tone="secondary">
                {property.meta.type}
              </Text>
              <Text variant="body-xs" tone="secondary">
                {property.meta.beds} Beds
              </Text>
              <Text variant="body-xs" tone="secondary">
                {property.meta.baths} Baths
              </Text>
              <Text variant="body-xs" tone="secondary">
                {property.meta.toilets} Toilets
              </Text>
            </Container>
          </Container>

          <Container className="mt-6 border-t border-line pt-4">
            <Text variant="h5" tone="primary">
              Description
            </Text>

            <Text variant="body-sm" tone="secondary" className="mt-3 leading-6">
              This well-maintained apartment is located in a peaceful
              residential area. The property features spacious rooms, tiled
              floors, good ventilation, steady water supply, and a secure
              environment.
            </Text>
            
            
          </Container>
        </Container>

        <Container className="h-fit rounded-2xl bg-surface p-5">
          <Text variant="h5" tone="primary">
            Property actions
          </Text>

          <Container className="mt-5 flex flex-col gap-3">
            <Button
              fullWidth
              onClick={() =>
                router.push(`/list-property?propertyId=${property.id}&mode=edit`)
              }
            >
              Edit property
            </Button>

            <Button fullWidth variant="muted">
              View engagements
            </Button>

            <Button fullWidth variant="danger">
              Archive property
            </Button>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};