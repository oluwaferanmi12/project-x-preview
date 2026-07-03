"use client";

import { useMemo, useState } from "react";
import type { ComponentType } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  PlusIcon,
  ArrowRight,
  LightClock,
  PropertyFinalisingIcon,
  PropertyInProgressIcon,
  PropertyPendingIcon,
  PropertyRejectedIcon,
  type IconProps,
} from "@repo/icons";
import { Button, Container, Pagination, Text } from "@repo/ui";
import {
  properties,
  type PropertyItem,
  type PropertyReviewStatus,
  type PropertyStatus,
} from "../data/properties.mock";

type PropertiesScreenProps = {
  status: PropertyStatus;
};

const statusLabel: Record<PropertyStatus, string> = {
  draft: "Draft",
  "under-review": "Under Review",
  published: "Published",
  archived: "Archived",
};

const ITEMS_PER_PAGE = 12;

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

export const PropertiesScreen = ({ status }: PropertiesScreenProps) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProperties = useMemo(
    () => properties.filter((property) => property.status === status),
    [status]
  );

  const totalPages = Math.ceil(filteredProperties.length / ITEMS_PER_PAGE);

  const paginatedProperties = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = currentPage * ITEMS_PER_PAGE;

    return filteredProperties.slice(startIndex, endIndex);
  }, [currentPage, filteredProperties]);

  const addProperty = () => {
    router.push("/properties/list-property");
  };

  return (
    <Container>
      <Container
        className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between overflow-hidden rounded-2xl bg-s50 bg-cover bg-center px-6 py-5"
        style={{
          backgroundImage:
            "linear-gradient(90deg, color-mix(in srgb, var(--s400) 92%, transparent), color-mix(in srgb, var(--s500) 82%, transparent)), url('/property-background-bg.jpg')",
        }}
      >
        <Container className="space-y-1">
          <Text variant="h5" tone="inverted" >
            Add your properties
          </Text>

          <Text variant="body-sm" tone="inverted">
            List your properties and get real life actions and trackable
            engagements
          </Text>
        </Container>
        <Container>
          <Button className="text-sm mt-2 md:mt-0" shorter  leftIcon={<PlusIcon size={14} />} onClick={addProperty}>
            Add property
          </Button>
        </Container>
        

        
      </Container>

      {paginatedProperties.length > 0 ? (
        <Container className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {paginatedProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </Container>
      ) : (
        <Container className="rounded-2xl border border-line bg-surface p-6">
          <Text variant="body-sm" tone="secondary">
            No {statusLabel[status].toLowerCase()} properties yet.
          </Text>
        </Container>
      )}

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </Container>
  );
};

const PropertyCard = ({ property }: { property: PropertyItem }) => {
  const router = useRouter();
  const isDraft = property.status === "draft";
  const ctaLabel = isDraft ? "Continue" : "View";
  const underReviewTag =
    property.status === "under-review" && property.reviewStatus
      ? underReviewCardTags[property.reviewStatus]
      : null;
  const UnderReviewTagIcon = underReviewTag?.Icon;

  const continueDraft = () => {
    router.push(
      `/properties/list-property?step=${property.step ?? 1}&substep=${
        property.substep ?? 1
      }&from=draft`
    );
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
          className="truncate text-lg font-bold leading-tight"
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
