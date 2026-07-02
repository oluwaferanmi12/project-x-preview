"use client";

import Image, { type StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { ReactNode } from "react";
import MapImage from "@/assets/images/map.png";
import ShareBackgroundImage from "@/assets/images/gradient-bg-with-small-people.png";
import {
  ArrowLeft,
  ArrowRight,
  ChevronArrowDown,
  LightClock,
  PlusIcon,
  RedStarIcon,
  MessagesIcon,
  BookeepIcon,

} from "@repo/icons";
import { Button, Container, Switch, Text } from "@repo/ui";
import { properties } from "../data/properties.mock";
import largeView from "@/assets/images/gallery/large-view.png";
import img1 from "@/assets/images/gallery/image-inactive.png";
import img2 from "@/assets/images/gallery/image-inactive-1.png";
import img3 from "@/assets/images/gallery/image-inactive-2.png";
import img4 from "@/assets/images/gallery/image-inactive-3.png";
import img5 from "@/assets/images/gallery/image-inactive-4.png";
import img6 from "@/assets/images/gallery/image-inactive-5.png";
import img7 from "@/assets/images/gallery/image-inactive-6.png";
import img8 from "@/assets/images/gallery/image-inactive-7.png";
import img9 from "@/assets/images/gallery/image-inactive-8.png";

const galleryImages: StaticImageData[] = [
  largeView,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
];

const chartData = [
  { month: "Jan", value: 25 },
  { month: "Feb", value: 128 },
  { month: "Mar", value: 50 },
  { month: "Apr", value: 250 },
  { month: "May", value: 90 },
  { month: "Jun", value: 10 },
];

const chartYAxisLabels = [250, 150, 100, 50, 0];
const chartMaxValue = 250;

export const PublishedPropertyDetailsScreen = ({
  propertyId,
}: {
  propertyId: string;
}) => {
  const router = useRouter();
  const [addressVisible, setAddressVisible] = useState(false);
  const [available, setAvailable] = useState(false);
  const property = properties.find((item) => item.id === propertyId);

  if (!property) {
    return (
      <Container>
        <Text>Property not found.</Text>
      </Container>
    );
  }

  return (
    <Container className="pb-10">
      <button
        type="button"
        onClick={() => router.back()}
        className="mb-5 inline-flex cursor-pointer items-center gap-2 text-sm font-bold text-s500"
      >
        <ArrowLeft size={14} />
        Back
      </button>

      <Container className="grid grid-cols-1 items-stretch gap-6 xl:grid-cols-[1fr_360px]">
        <Container className="rounded-2xl bg-surface px-8 py-7">
          <Container className="mx-auto max-w-155">
            <Text
              tone="primary"
              className="mb-4 truncate text-lg font-bold leading-tight"
            >
              {property.title}
            </Text>

            <Container className="relative h-56 w-full overflow-hidden rounded-xl bg-muted">
              <Image
                src={largeView}
                alt={property.title}
                fill
                className="object-cover"
              />
            </Container>

            <Container className="mt-3 flex gap-2 overflow-x-auto">
              {galleryImages.slice(1).map((image, index) => (
                <Container
                  key={image}
                  className="relative h-12 w-16 shrink-0 overflow-hidden rounded-md bg-muted"
                >
                  <Image
                    src={image}
                    alt={`${property.title} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  {index === galleryImages.length - 2 && (
                    <Container className="absolute inset-0 flex items-center justify-center bg-primary/40 text-inverted">
                      <PlusIcon size={16} />
                    </Container>
                  )}
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

            <PropertyActionCard
              title="Archive this property"
              description="Hide this property from public view"
              actionLabel="Archive"
              actionVariant="warning"
            />

            <Container className="mt-5 rounded-xl border border-line bg-surface px-4 py-3">
              <Container className="flex items-center justify-between gap-4">
                <Container>
                  <Text variant="body-sm" tone="primary" className="font-normal">
                    Property Availability
                  </Text>
                  <Text variant="body-xs" tone="secondary" className="mt-1">
                    Let house seeker know if property is still up for rent
                  </Text>
                </Container>
                <Switch checked={available} onChange={setAvailable} />
              </Container>
            </Container>

            <Container className="mt-5 rounded-xl border border-line bg-surface">
              <Container className="flex items-center justify-between px-4 py-3">
                <Text tone="primary" className="font-semibold text-base">
                  About this property
                </Text>
                <ChevronArrowDown size={16} className="text-secondary" />
              </Container>
              <hr className="mx-4 border border-line" />

              <Container className="space-y-4 px-4 py-4">
                <DescriptionCopy />
              </Container>
            </Container>
          </Container>
        </Container>

        <Container className="flex h-full flex-col gap-5">
          <MapVisibilityCard
            checked={addressVisible}
            onChange={setAddressVisible}
          />
          <ShareCard />
          <EngagementSummary />
          <ViewsChart />
        </Container>
      </Container>
    </Container>
  );
};

const PropertyActionCard = ({
  title,
  description,
  actionLabel,
  actionVariant,
}: {
  title: string;
  description: string;
  actionLabel: string;
  actionVariant: "warning" | "primary";
}) => (
  <Container className="mt-5 rounded-xl border border-w75 bg-w50 px-4 py-3">
    <Container className="flex items-center justify-between gap-4">
      <Container>
        <Text variant="body-sm" tone="primary" className="font-normal">
          {title}
        </Text>
        <Text variant="body-xs" tone="secondary" className="mt-1">
          {description}
        </Text>
      </Container>

      <Button
        shorter
        type="button"
        variant={actionVariant}
        rightIcon={<ArrowRight size={14} />}
      >
        {actionLabel}
      </Button>
    </Container>
  </Container>
);

const MapVisibilityCard = ({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
}) => (
  <Container className="overflow-hidden rounded-xl bg-surface">
    <Container className="relative h-36 overflow-hidden bg-i50">
      <Image
        src={MapImage}
        alt="Property location map"
        fill
        className="object-cover"
      />
    </Container>

    <Container className="flex items-center justify-between px-4 py-3">
      <Container>
        <Text variant="body-sm" tone="primary" className="font-bold">
          Address Visibility
        </Text>
        <Text variant="body-xs" tone="secondary" className="mt-1">
          Switch property address on/off
        </Text>
      </Container>
      <Switch checked={checked} onChange={onChange} />
    </Container>
  </Container>
);

const ShareCard = () => (
  <Container className="overflow-hidden rounded-xl bg-surface">
    <Container className="relative flex items-center justify-between overflow-hidden px-4 py-4 text-inverted">
      <Image
        src={ShareBackgroundImage}
        alt=""
        fill
        className="object-cover"
      />
      <Container className="absolute inset-0 bg-primary/10" />

      <Text
        variant="body-sm"
        tone="inverted"
        className="relative z-10 font-bold"
      >
        Share this property
      </Text>
      <Button
        shorter
        type="button"
        className="relative z-10 px-3"
        rightIcon={<ArrowRight size={14} />}
      >
        Share
      </Button>
    </Container>
  </Container>
);

const EngagementSummary = () => (
  <Container className="rounded-xl bg-surface px-4">
    <MetricRow icon={<RedStarIcon size={18} />} label="4.3/5.0 (1,000)" />
    <MetricRow icon={<MessagesIcon size={18} />} label="20 Messages" />
    <MetricRow
      icon={<BookeepIcon size={18} />}
      label="500 Saves"
      showArrow={false}
    />
  </Container>
);

const MetricRow = ({
  icon,
  label,
  showArrow = true,
}: {
  icon: ReactNode;
  label: string;
  showArrow?: boolean;
}) => (
  <Container className="flex items-center justify-between border-b border-line py-4 last:border-b-0">
    <Container className="flex items-center gap-3 text-s500">
      {icon}
      <Text variant="body-sm" tone="primary">
        {label}
      </Text>
    </Container>
    {showArrow && <ArrowRight size={14} className="text-s500" />}
  </Container>
);

const ViewsChart = () => (
  <Container className="flex flex-1 flex-col rounded-xl bg-surface p-4">
    <Container className="flex items-start justify-between">
      <Container>
        <Text variant="body-sm" tone="primary">
          Your property views
        </Text>
        <Text variant="body-xs" tone="secondary" className="mt-1">
          Track the visibility your property gets
        </Text>
      </Container>
      <button
        type="button"
        className="flex items-center gap-2 rounded-lg border border-line px-3 py-2 text-xs text-primary"
      >
        2026
        <ChevronArrowDown size={14} />
      </button>
    </Container>

    <Container className="mt-6 grid min-h-40 flex-1 grid-cols-[38px_1fr] gap-3">
      <Container className="flex h-full flex-col justify-between pb-6">
        {chartYAxisLabels.map((label) => (
          <Text key={label} variant="body-xs" tone="secondary">
            {label}
          </Text>
        ))}
      </Container>

      <Container className="relative h-full border-l border-b border-line">
        {chartYAxisLabels.slice(0, -1).map((label) => (
          <Container
            key={label}
            className="absolute left-0 w-full border-t border-line/60"
            style={{ bottom: `${(label / chartMaxValue) * 100}%` }}
          />
        ))}

        <Container className="absolute inset-x-3 bottom-0 flex h-full items-end gap-4">
          {chartData.map((item) => (
            <Container
              key={item.month}
              className="flex h-full flex-1 flex-col items-center justify-end gap-2"
            >
              <Container
                className="w-full max-w-7 rounded-t bg-s300"
                style={{ height: `${(item.value / chartMaxValue) * 100}%` }}
              />
              <Text variant="body-xs" tone="secondary">
                {item.month}
              </Text>
            </Container>
          ))}
        </Container>
      </Container>
    </Container>
  </Container>
);

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
        rooms, tiled floors, good ventilation throughout the apartment.
      </Text>
    </Container>
  </>
);
