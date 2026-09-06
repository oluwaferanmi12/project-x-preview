"use client";

import React from "react";
import { Container } from "@repo/ui";
import { Text } from "@repo/ui";
import { Accordion, AccordionSection } from "@repo/ui";
import PricingSection from "./pricing-chart";
import { IconText } from "@repo/ui";
import {
  ChevronArrowDown as ChevronDownIcon,
  ChevronRight as ChevronRightIcon,
} from "@repo/icons";
import { DraftProperty } from "../../types/property.types";
import {
  useGetAmenities,
  useGetPropertyTypes,
  useGetWaterSources,
} from "../../hooks/property.hook";
import {
  useGetLGA,
  useGetStates,
} from "@/features/general/hooks/general.hooks";
import {
  formatFurnishingStatus,
  formatPropertyCondition,
} from "../../utils/property.utils";

const EMPTY = "Not provided";

// Section title
const SectionTitle = ({ title }: { title: string }) => (
  <Text variant="body-xs" tone="primary" className="mb-2">
    {title}
  </Text>
);

// Description Section Component
const DescriptionSection = ({
  description,
}: {
  description?: string | null;
}) => (
  <Container>
    <SectionTitle title="Description" />
    <Text tone="secondary" variant="body-sm" className="whitespace-pre-line">
      {description || EMPTY}
    </Text>
  </Container>
);

type LocationItem = {
  label: string;
  value: string | null;
  pill?: boolean;
};

// Location Section Component
const LocationSection = ({ items }: { items: LocationItem[] }) => (
  <Container>
    <SectionTitle title="Location" />

    <Container className="space-y-4">
      {items.map((item) => (
        <Container key={item.label} className="grid grid-cols-2 gap-3 text-sm">
          <Container as="span" className="text-secondary">
            {item.label}
          </Container>

          {item.pill ? (
            <Container
              as="span"
              className={`inline-flex w-fit rounded-lg px-2 py-1 text-xs font-medium ${
                item.value === "Hidden"
                  ? "bg-persian-red-back text-persian-red-fore"
                  : "bg-s75 text-secondary"
              }`}
            >
              {item.value ?? EMPTY}
            </Container>
          ) : (
            <Container as="span" className="text-secondary">
              {item.value || EMPTY}
            </Container>
          )}
        </Container>
      ))}
    </Container>
  </Container>
);

type OverviewItem = {
  label: string;
  value: string;
};

// Property Overview Section Component
const OverviewSection = ({ items }: { items: OverviewItem[] }) => (
  <Container>
    <SectionTitle title="Property Overview" />

    <Container className="space-y-3">
      {items.map((item) => (
        <Container key={item.label} className="grid grid-cols-2 gap-3 text-sm">
          <Container as="span" className="text-secondary text-sm">
            {item.label}
          </Container>
          <Container as="span" className="text-secondary text-sm">
            {item.value}
          </Container>
        </Container>
      ))}
    </Container>
  </Container>
);

type AmenityItem = {
  id: string;
  name: string;
  imageUrl: string;
};

// Amenities Section Component
const AmenitiesSection = ({
  amenities,
  propertyId,
  friendlyId,
}: {
  amenities: AmenityItem[];
  propertyId?: string | null;
  friendlyId?: string | null;
}) => (
  <Container>
    <SectionTitle title="Amenities" />

    {amenities.length ? (
      <Container className="flex flex-wrap gap-2">
        {amenities.map((item) => (
          <IconText
            key={item.id}
            isClickable={false}
            icon={
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.imageUrl}
                alt=""
                className="h-4 w-4 rounded object-cover"
              />
            }
            label={item.name}
          />
        ))}
      </Container>
    ) : (
      <Text tone="secondary" variant="body-sm">
        No amenities selected
      </Text>
    )}

    <Container className="mt-4">
      <SectionTitle title="Property ID" />
      <Text className="text-sm text-secondary">
        {friendlyId || "Not yet saved"}
      </Text>
    </Container>
  </Container>
);

export const PropertyAccordion = ({ payload }: { payload?: DraftProperty }) => {
  const { data: propertyTypes } = useGetPropertyTypes();
  const { data: states } = useGetStates();
  const { data: localGovernments } = useGetLGA(payload?.stateId ?? "");
  const { data: waterSources } = useGetWaterSources();
  const { data: amenitiesList } = useGetAmenities();

  const propertyTypeName =
    propertyTypes?.find((item) => item.id === payload?.propertyTypeId)?.name ??
    null;
  const stateName =
    states?.find((item) => item.id === payload?.stateId)?.name ?? null;
  const lgaName =
    localGovernments?.find((item) => item.id === payload?.lgaId)?.name ?? null;
  const waterSourceNames =
    payload?.waterSourceIds
      ?.map((id) => waterSources?.find((item) => item.id === id)?.name)
      .filter((name): name is string => !!name) ?? [];
  const selectedAmenities: AmenityItem[] =
    payload?.amenityIds
      ?.map((id) => amenitiesList?.find((item) => item.id === id))
      .filter((item): item is NonNullable<typeof item> => !!item) ?? [];

  const locationItems: LocationItem[] = [
    { label: "State", value: stateName },
    { label: "Area", value: payload?.neighbourhood ?? null },
    { label: "LGA", value: lgaName },
    { label: "Address", value: payload?.addressLine ?? null },
    {
      label: "Address Status",
      value:
        payload?.shareAddressWithSeekers == null
          ? null
          : payload.shareAddressWithSeekers
            ? "Visible"
            : "Hidden",
      pill: true,
    },
    { label: "Landmark", value: payload?.landmark ?? null },
  ];

  const overviewItems: OverviewItem[] = [
    { label: "Property Type", value: propertyTypeName ?? EMPTY },
    {
      label: "Available Unit",
      value: payload?.unitCount != null ? String(payload.unitCount) : EMPTY,
    },
    {
      label: "Furnishing",
      value: formatFurnishingStatus(payload?.furnishingStatus) ?? EMPTY,
    },
    {
      label: "Condition",
      value: formatPropertyCondition(payload?.propertyCondition) ?? EMPTY,
    },
    {
      label: "Bedrooms",
      value:
        payload?.bedroomCount != null ? String(payload.bedroomCount) : EMPTY,
    },
    {
      label: "Bathrooms",
      value:
        payload?.bathroomCount != null ? String(payload.bathroomCount) : EMPTY,
    },
    {
      label: "Toilets",
      value: payload?.toiletCount != null ? String(payload.toiletCount) : EMPTY,
    },
    {
      label: "Water Source",
      value: waterSourceNames.length ? waterSourceNames.join(", ") : EMPTY,
    },
    {
      label: "Parking Space",
      value:
        payload?.parkingAvailable == null
          ? EMPTY
          : payload.parkingAvailable
            ? "Available"
            : "Not available",
    },
    {
      label: "Fencing & Gated",
      value:
        payload?.fencedOrGated == null
          ? EMPTY
          : payload.fencedOrGated
            ? "Yes"
            : "No",
    },
  ];

  const sections: AccordionSection[] = [
    {
      id: "about",
      title: "About this property",
      content: (
        <Container className="space-y-4">
          <DescriptionSection description={payload?.description} />
          <Container className="border-t border-line" />
          <LocationSection items={locationItems} />
          <Container className="border-t border-line" />
          <OverviewSection items={overviewItems} />
          <Container className="border-t border-line" />
          <AmenitiesSection
            amenities={selectedAmenities}
            propertyId={payload?.id}
            friendlyId={payload?.friendlyId}
          />
        </Container>
      ),
    },
    {
      id: "pricing",
      title: "Pricing",
      content: (
        <PricingSection
          rentAmount={payload?.rentAmount}
          agencyFee={payload?.agencyFee}
          cautionFee={payload?.cautionFee}
          serviceCharge={payload?.serviceCharge}
        />
      ),
    },
  ];

  return (
    <Accordion
      sections={sections}
      openIcon={<ChevronDownIcon className="h-5 w-5 text-secondary" />}
      closedIcon={<ChevronRightIcon className="h-3 w-3 text-secondary" />}
      defaultOpen="about"
    />
  );
};
