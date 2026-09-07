import type { ComponentType } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  LightClock,
  PropertyFinalisingIcon,
  PropertyInProgressIcon,
  PropertyPendingIcon,
  PropertyRejectedIcon,
  type IconProps,
} from "@repo/icons";
import { Button, Container, Text } from "@repo/ui";
import { type PropertyItem, type PropertyReviewStatus } from "../types/property.types";
import { FeaturePill } from "./nuggets/feature-pill";

const underReviewCardTags: Record<
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
    className: "bg-sc300",
    Icon: PropertyFinalisingIcon,
  },
  rejected: {
    label: "Rejected",
    className: "bg-d300",
    Icon: PropertyRejectedIcon,
  },
};

export const PropertyCard = ({ property }: { property: PropertyItem }) => {
  const router = useRouter();
  const isDraft = property.status === "DRAFT";
  const ctaLabel = isDraft ? "Continue" : "View";
  const underReviewTag =
    property.status === "UNDER_REVIEW" && property.reviewStatus
      ? underReviewCardTags[property.reviewStatus]
      : null;
  const UnderReviewTagIcon = underReviewTag?.Icon;

  const continueDraft = () => {
    router.push(`/properties/list-property?propertyId=${property.id}&from=draft`);
  };

  const viewProperty = () => {
    router.push(`/properties/${property.id}?status=${property.status}`);
  };

  return (
    <Container className="overflow-hidden rounded-3xl border border-line bg-surface">
      <Container className="relative h-32 w-full overflow-hidden bg-muted">
        <Image
          src={property.image || "/draft-image-placeholder.png"}
          alt={property.title}
          fill
          className="object-cover"
        />

        {underReviewTag && (
          <Container
            as="div"
            className={`absolute right-2 top-2 flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-inverted ${underReviewTag.className}`}
          >
            {UnderReviewTagIcon && (
              <Container
                as="span"
                className="flex shrink-0 items-center justify-center"
              >
                <UnderReviewTagIcon size={20} />
              </Container>
            )}
            <Text
              variant="body-xs"
              tone="inverted"
              className="font-normal leading-none flex items-center"
            >
              {underReviewTag.label}
            </Text>
          </Container>
        )}
      </Container>

      <Container className="px-3.5 pt-3 pb-1">
        <Text
          tone="primary"
          variant="h4"
          className="truncate font-bold leading-tight"
        >
          {property.title}
        </Text>

        <Container className="mt-3 flex flex-wrap gap-2">
          <FeaturePill icon="🏠" label={property.meta.type} />
          <FeaturePill icon="🛏️" label={`${property.meta.beds} Beds`} />
          <FeaturePill icon="🛁" label={`${property.meta.baths} Baths`} />
          <FeaturePill icon="🚽" label={`${property.meta.toilets} Toilets`} />
        </Container>
        <hr className="border-line mt-2" />

        <Container className="w-full mt-2 flex items-center justify-between">
          <Container className="flex items-center gap-1 text-secondary">
            <LightClock size={16} />
            <Text variant="body-xs" tone="secondary">
              {property.date}
            </Text>
          </Container>

          <Button
            shorter
            rightIcon={<ArrowRight size={14} />}
            as="button"
            variant="transparent"
            className="px-0 text-sm font-bold text-s500 hover:bg-transparent"
            onClick={isDraft ? continueDraft : viewProperty}
          >
            {ctaLabel}
          </Button>
        </Container>
      </Container>
    </Container>
  );
};
