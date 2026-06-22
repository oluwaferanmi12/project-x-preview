"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Container, Text, Button } from "@repo/ui";
import { properties } from "../data/properties.mock";

const reviewSteps = [
  { label: "Images & Videos", status: "approved" },
  { label: "Property Information & Description", status: "approved" },
  { label: "Location & Address Verification", status: "approved" },
  { label: "Amenities", status: "approved" },
  { label: "Market Pricing", status: "rejected" },
  { label: "Final Approval & Publishing", status: "pending" },
];

type ReviewStatus = "approved" | "pending" | "rejected";

const StatusDot = ({ status }: { status: ReviewStatus }) => {
  const className =
    status === "approved"
      ? "bg-sc300"
      : status === "rejected"
        ? "bg-d300"
        : "bg-muted";

  return <Container className={`h-4 w-4 rounded-full ${className}`} />;
};

export const PropertyReviewDetailsScreen = ({
  propertyId,
}: {
  propertyId: string;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const status = searchParams.get("status");

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
          <Container className="mb-4 flex items-center gap-2">
            <Container className="rounded-full bg-w50 px-3 py-1">
              <Text variant="body-xs" className="text-w300">
                {status === "under-review" ? "Under Review" : status}
              </Text>
            </Container>

            <Text variant="h5" tone="primary">
              {property.title}
            </Text>
          </Container>

          <Container className="relative h-64 w-full overflow-hidden rounded-2xl bg-muted">
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
              About this property
            </Text>

            <Text variant="body-sm" tone="secondary" className="mt-3 leading-6">
              This well-maintained apartment is located in a peaceful residential
              area. The property features spacious rooms, tiled floors, good
              ventilation, steady water supply, and a secure environment.
            </Text>
          </Container>
        </Container>

        <Container className="rounded-2xl bg-surface p-5">
          <Text variant="h5" tone="primary">
            Property review
          </Text>

          <Container className="mt-5 flex flex-col gap-5">
            {reviewSteps.map((step, index) => (
              <Container key={step.label} className="flex gap-3">
                <Container className="flex flex-col items-center">
                  <StatusDot status={step.status as ReviewStatus} />

                  {index !== reviewSteps.length - 1 && (
                    <Container className="mt-1 h-8 w-px bg-line" />
                  )}
                </Container>

                <Container>
                  <Text variant="body-sm" tone="primary">
                    {step.label}
                  </Text>

                  <Text variant="body-xs" tone="secondary">
                    {step.status === "approved" && "Approved"}
                    {step.status === "pending" && "Pending review"}
                    {step.status === "rejected" && "Needs correction"}
                  </Text>
                </Container>
              </Container>
            ))}
          </Container>

       
        </Container>
      </Container>
    </Container>
  );
};