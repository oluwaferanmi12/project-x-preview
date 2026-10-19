import type { ReactNode } from "react";
import { Container, Text } from "@repo/ui";
import PricingSection from "@/features/home-owner/properties/components/nuggets/pricing-chart";
import { FeaturePill } from "@/features/home-owner/properties/components/nuggets/feature-pill";
import { GuestPropertyDetails } from "../../guest.types";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <Container className="flex flex-col gap-3 border-b border-line pb-6 last:border-b-0 last:pb-0">
    <Text variant="body-sm" tone="primary" className="!font-bold">
      {title}
    </Text>
    {children}
  </Container>
);

const InfoRows = ({ rows }: { rows: { label: string; value: string }[] }) => (
  <Container className="flex flex-col gap-2">
    {rows.map((row) => (
      <Container
        key={row.label}
        className="grid grid-cols-[120px_1fr] gap-4 md:grid-cols-[160px_1fr]"
      >
        <Text variant="body-xs" tone="secondary">
          {row.label}:
        </Text>
        <Text variant="body-xs" tone="primary">
          {row.value}
        </Text>
      </Container>
    ))}
  </Container>
);

export const PropertyDetailsTab = ({
  property,
}: {
  property: GuestPropertyDetails;
}) => (
  <Container className="flex flex-col gap-4">
    <Container className="flex flex-col gap-6 rounded-xl border border-line bg-surface p-4 md:p-6">
      <Section title="Description">
        <Container className="flex flex-col gap-4">
          {property.description.map((paragraph, index) => (
            <Text key={index} variant="body-xs" tone="secondary">
              {paragraph}
            </Text>
          ))}
        </Container>
      </Section>
      <Section title="Location">
        <InfoRows rows={property.locationInfo} />
      </Section>
      <Section title="Property Overview">
        <InfoRows rows={property.overview} />
      </Section>
      <Section title="Amenities">
        <Container className="flex flex-wrap gap-2">
          {property.amenities.map((amenity) => (
            <FeaturePill
              key={amenity.label}
              icon={amenity.icon}
              label={amenity.label}
            />
          ))}
        </Container>
      </Section>
      <Section title="Property ID">
        <Text variant="body-xs" tone="secondary">
          {property.propertyCode}
        </Text>
      </Section>
    </Container>

    <Container className="rounded-xl border border-line bg-surface p-4 md:p-6">
      <Text
        variant="body-sm"
        tone="primary"
        className="mb-6 border-b border-line pb-3 !font-bold"
      >
        Pricing
      </Text>
      <PricingSection
        horizontal
        rentAmount={property.pricing.rent}
        agencyFee={property.pricing.agency}
        cautionFee={property.pricing.caution}
        serviceCharge={property.pricing.serviceCharge}
      />
    </Container>
  </Container>
);
