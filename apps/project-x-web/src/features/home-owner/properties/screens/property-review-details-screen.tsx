"use client";

import type { ComponentType } from "react";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckIcon,
  ChevronArrowDown,
  Close,
  DetailsReviewCheckIcon,
  LightClock,
  PropertyFinalisingIcon,
  PropertyInProgressIcon,
  PropertyPendingIcon,
  PropertyRejectedIcon,
  ReviewCheckIcon,
  SmallRoundRejectedIcon,
  SmallGreenCheckIcon,
  type IconProps,
} from "@repo/icons";
import { Button, Container, Text } from "@repo/ui";
import {
  properties,
  type PropertyItem,
  type PropertyReviewStatus,
} from "../data/properties.mock";

type ReviewStepState = "approved" | "pending" | "active" | "rejected";

type ReviewStep = {
  label: string;
  date: string;
  state: ReviewStepState;
};

const reviewStatusTags: Record<
  PropertyReviewStatus,
  { label: string; className: string; Icon: ComponentType<IconProps> }
> = {
  pending: {
    label: "Pending",
    className: "bg-i300",
    Icon: PropertyPendingIcon,
  },
  "in-progress": {
    label: "In-progress",
    className: "bg-w300",
    Icon: PropertyInProgressIcon,
  },
  finalising: {
    label: "Finalising",
    className: "bg-s300",
    Icon: PropertyFinalisingIcon,
  },
  rejected: {
    label: "Rejected",
    className: "bg-d300",
    Icon: PropertyRejectedIcon,
  },
};

const reviewStepsByStatus: Record<PropertyReviewStatus, ReviewStep[]> = {
  pending: [
    { label: "Property Details Check", date: "19:00 • 05/05/26", state: "pending" },
    { label: "Property Information Verification", date: "19:00 • 05/05/26", state: "pending" },
    { label: "Location & Address Validation", date: "19:00 • 05/05/26", state: "pending" },
    { label: "Photos & Media Review", date: "19:00 • 05/05/26", state: "pending" },
    { label: "Final Approval & Publishing", date: "19:00 • 05/05/26", state: "pending" },
  ],
  "in-progress": [
    { label: "Property Details Check", date: "19:00 • 05/05/26", state: "approved" },
    { label: "Property Information Verification", date: "19:00 • 05/05/26", state: "pending" },
    { label: "Location & Address Validation", date: "19:00 • 05/05/26", state: "pending" },
    { label: "Photos & Media Review", date: "19:00 • 05/05/26", state: "pending" },
    { label: "Final Approval & Publishing", date: "19:00 • 05/05/26", state: "pending" },
  ],
  rejected: [
    { label: "Property Details Check", date: "19:00 • 05/05/26", state: "approved" },
    { label: "Property Information Verification", date: "19:00 • 05/05/26", state: "approved" },
    { label: "Location & Address Validation", date: "19:00 • 05/05/26", state: "approved" },
    { label: "Photos & Media Review", date: "19:00 • 05/05/26", state: "rejected" },
    { label: "Final Approval & Publishing", date: "19:00 • 05/05/26", state: "pending" },
  ],
  finalising: [
    { label: "Property Details Check", date: "19:00 • 05/05/26", state: "approved" },
    { label: "Property Information Verification", date: "19:00 • 05/05/26", state: "approved" },
    { label: "Location & Address Validation", date: "19:00 • 05/05/26", state: "approved" },
    { label: "Photos & Media Review", date: "19:00 • 05/05/26", state: "approved" },
    { label: "Final Approval & Publishing", date: "19:00 • 05/05/26", state: "pending" },
  ],
};

export const PropertyReviewDetailsScreen = ({
  propertyId,
}: {
  propertyId: string;
}) => {
  const router = useRouter();
  const [isRejectionModalOpen, setIsRejectionModalOpen] = useState(false);
  const property = properties.find((item) => item.id === propertyId);

  if (!property) {
    return (
      <Container>
        <Text>Property not found.</Text>
      </Container>
    );
  }

  const reviewStatus = property.reviewStatus ?? "pending";
  const statusTag = reviewStatusTags[reviewStatus];
  const StatusIcon = statusTag.Icon;
  const reviewSteps = reviewStepsByStatus[reviewStatus];

  return (
    <Container className="pb-10">
      <button
        type="button"
        onClick={() => router.back()}
        className="mb-5 inline-flex items-center cursor-pointer gap-2 text-sm font-bold text-s500"
      >
        <ArrowLeft size={14} />
        Back
      </button>

      <Container className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_360px]">
        <Container className="rounded-2xl bg-surface px-8 py-7">
          <Container className="mx-auto max-w-155">
            <Container className="mb-3 flex items-center gap-2">
              <ReviewStatusTag tag={statusTag} Icon={StatusIcon} />

              <Text
                tone="primary"
                className="truncate text-lg font-bold leading-tight"
              >
                {property.title}
              </Text>
            </Container>

            <Container className="relative h-56 w-full overflow-hidden rounded-xl bg-muted">
              <Image
                src={property.image || "/draft-image-placeholder.png"}
                alt={property.title}
                fill
                className="object-cover"
              />
            </Container>

            <Container className="mt-3 flex gap-2 overflow-x-auto">
              {Array.from({ length: 8 }).map((_, index) => (
                <Container
                  key={index}
                  className="relative h-12 w-16 shrink-0 overflow-hidden rounded-md bg-muted"
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

            <Container className="mt-6 flex items-center justify-between gap-4">
              <Container className="flex items-end gap-2">
                <Text tone="primary" className="text-2xl font-bold leading-none">
                  N300,000
                </Text>
                <Text variant="body-sm" tone="secondary" className="font-medium">
                  (Annually)
                </Text>
              </Container>

              <Container className="flex items-center gap-1 text-secondary">
                <LightClock size={16} />
                <Text variant="body-xs" tone="secondary">
                  {property.date}
                </Text>
              </Container>
            </Container>

            <Container className="mt-3 flex flex-wrap gap-2">
              <FeaturePill icon="🏠" label={property.meta.type} />
              <FeaturePill icon="🛏️" label={`${property.meta.beds} Beds`} />
              <FeaturePill icon="🛁" label={`${property.meta.baths} Baths`} />
              <FeaturePill icon="🚽" label={`${property.meta.toilets} Toilets`} />
            </Container>

            <Container className="mt-6 rounded-xl border border-line bg-surface">
              <Container className="flex items-center justify-between px-4 py-3">
                <Text tone="primary" className="font-semibold text-base">
                  About this property
                </Text>
                <ChevronArrowDown size={16} className="text-secondary" />
              </Container>
              <hr className="border border-line mx-4" />

              <Container className="space-y-4 px-4 py-4">
                <DescriptionCopy />
              </Container>
            </Container>
          </Container>
        </Container>

        <ReviewProgressPanel
          steps={reviewSteps}
          onViewRejectionDetails={() => setIsRejectionModalOpen(true)}
        />
      </Container>

      <RejectionDetailsModal
        isOpen={isRejectionModalOpen}
        onClose={() => setIsRejectionModalOpen(false)}
      />
    </Container>
  );
};

const ReviewStatusTag = ({
  tag,
  Icon,
}: {
  tag: { label: string; className: string };
  Icon: ComponentType<IconProps>;
}) => (
  <Container
    className={`flex h-6 shrink-0 items-center gap-1 rounded-full px-2 text-inverted ${tag.className}`}
  >
    <Container as="span" className="flex h-3.5 w-3.5 items-center justify-center">
      <Icon size={22} />
    </Container>
    <Text variant="body-xs" tone="inverted" className="font-normal leading-none">
      {tag.label}
    </Text>
  </Container>
);

const ReviewProgressPanel = ({
  steps,
  onViewRejectionDetails,
}: {
  steps: ReviewStep[];
  onViewRejectionDetails: () => void;
}) => {
  const currentPendingIndex = steps.findIndex(
    (step) => step.state === "pending"
  );

  return (
    <Container className="rounded-2xl bg-surface px-6 py-7">
      <Container className="flex flex-col">
        {steps.map((step, index) => (
          <Container key={step.label} className="flex gap-3">
            <Container className="flex flex-col items-center">
              <StepMarker
                state={step.state}
                isCurrentPending={index === currentPendingIndex}
              />
              {index !== steps.length - 1 && (
                <Container
                  className={`my-1 h-12 w-px ${getConnectorClassName(
                    step.state
                  )}`}
                />
              )}
            </Container>

            <Container className="pb-5">
              {step.state !== "pending" && (
                <Text variant="body-xs" tone="secondary">
                  {step.date}
                </Text>
              )}
              <Text variant="body-sm" tone="primary" className="mt-1 font-normal">
                {step.label}
              </Text>
              <StepBadge
                state={step.state}
                isCurrentPending={index === currentPendingIndex}
                onViewRejectionDetails={onViewRejectionDetails}
              />
            </Container>
          </Container>
        ))}
      </Container>
    </Container>
  );
};

const StepMarker = ({
  state,
  isCurrentPending,
}: {
  state: ReviewStepState;
  isCurrentPending: boolean;
}) => {
  if (state === "approved") {
    return (
      <Container className="flex h-9 w-9 items-center justify-center rounded-xl bg-sc300 text-inverted">
        <CheckIcon size={18} />
      </Container>
    );
  }

  if (state === "rejected") {
    return (
      <Container className="flex h-9 w-9 items-center justify-center rounded-xl bg-d300 text-inverted">
        <Close size={16} />
      </Container>
    );
  }

  const Icon = isCurrentPending ? DetailsReviewCheckIcon : ReviewCheckIcon;

  return (
    <Container className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary">
      <Icon size={20} />
    </Container>
  );
};

const getConnectorClassName = (state: ReviewStepState) => {
  if (state === "approved") {
    return "bg-sc300";
  }

  if (state === "rejected") {
    return "bg-d300";
  }

  return "bg-secondary";
};

const StepBadge = ({
  state,
  isCurrentPending,
  onViewRejectionDetails,
}: {
  state: ReviewStepState;
  isCurrentPending: boolean;
  onViewRejectionDetails: () => void;
}) => {
  if (state === "pending" && !isCurrentPending) {
    return null;
  }

  const className =
    state === "approved"
      ? "bg-sc50 text-sc300"
      : state === "rejected"
        ? "bg-d50 text-d300"
        : state === "active"
          ? "bg-w50 text-w300"
          : "bg-tertiary text-secondary";

  const label =
    state === "approved"
      ? "Passed"
      : state === "rejected"
        ? "Failed"
        : state === "active"
          ? "In review"
          : "Pending";

  return (
    <Container className="mt-2 flex items-center gap-3">
      <Container
        className={`flex w-fit items-center gap-1 rounded-full pl-1 pr-2 py-1 ${className}`}
      >
        {state === "approved" && (
          <Container as="span" className="inline-flex">
            <SmallGreenCheckIcon size={20} />
          </Container>
        )}
        {state === "rejected" && (
          <Container as="span" className="inline-flex">
            <SmallRoundRejectedIcon size={18} />
          </Container>
        )}
        {state === "pending" && (
          <Container as="span" className="inline-flex">
            <PropertyPendingIcon size={18} />
          </Container>
        )}
        <Text variant="body-xs" className="font-normal">
          {label}
        </Text>
      </Container>

      {state === "rejected" && (
        <button
          type="button"
          onClick={onViewRejectionDetails}
          className="flex cursor-pointer items-center gap-1 text-s500"
        >
          <Text as="span" variant="body-xs" className="font-normal">
            View Details
          </Text>
          <ArrowRight size={14} />
        </button>
      )}
    </Container>
  );
};

const RejectionDetailsModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Container className="fixed inset-0 z-50 flex items-center justify-center bg-primary/60 px-4">
      <Container
        role="dialog"
        aria-modal="true"
        aria-labelledby="rejection-details-title"
        className="w-full max-w-[340px] overflow-hidden rounded-xl border border-line bg-surface shadow-xl"
      >
        <Container className="relative flex h-28 items-center justify-center overflow-hidden bg-d50">
          <Container className="absolute -left-6 -top-10 h-28 w-28 rounded-full border-4 border-d100" />
          <Container className="absolute left-12 top-7 h-24 w-28 rounded-full border-4 border-d100" />
          <Container className="absolute -right-3 -top-7 h-32 w-36 rounded-full border-4 border-d100" />

          <Container className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-d300 text-inverted">
            <Close size={28} />
          </Container>
        </Container>

        <Container className="px-4 pb-4 pt-5">
          <Text
            id="rejection-details-title"
            variant="body-sm"
            tone="primary"
            className="font-bold"
          >
            Rejection Details
          </Text>

          <Text variant="body-xs" tone="secondary" className="mt-2 leading-5">
            We found some on of the informations listed not to be genuine or
            accurate, name necessary adjustment to continue
          </Text>

          <Container className="mt-4 border-t border-line pt-3">
            <Container className="flex gap-3">
              <Button
                shorter
                type="button"
                variant="muted"
                className="flex-1"
                onClick={onClose}
              >
                Cancel
              </Button>

              <Button
                shorter
                type="button"
                className="flex-[2]"
                rightIcon={<ArrowRight size={14} />}
              >
                View
              </Button>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

const FeaturePill = ({ icon, label }: { icon: string; label: string }) => (
  <Container className="flex items-center gap-1 rounded-xl border border-line bg-surface px-2 py-1">
    <Container as="span" className="text-sm leading-none">
      {icon}
    </Container>
    <Text variant="body-xs" tone="primary">
      {label}
    </Text>
  </Container>
);

const DescriptionCopy = () => (
  <>
    <Container>
      <Text variant="body-xs" tone="primary">
        Description
      </Text>
      <Text variant="body-sm" tone="secondary" className="mt-2 leading-5">
        This well-maintained 3-bedroom apartment is located in a peaceful
        residential area of Ogbogbo, Osun State. The property features spacious
        rooms, tiled floors, and good ventilation throughout the apartment.
      </Text>
    </Container>

    <Text variant="body-sm" tone="secondary" className="leading-5">
      The living room is large and bright, with enough space for a full seating
      arrangement and dining area. The kitchen comes fitted with cabinets and a
      dedicated storage area. Each bedroom has its own bathroom, while the
      extra guest toilet is conveniently located near the living room.
    </Text>

    <Text variant="body-sm" tone="secondary" className="leading-5">
      The compound is gated and fenced, providing added security and privacy for
      residents. The property also has a steady water supply.
    </Text>
  </>
);
