"use client";

import React from "react";
import { Container } from "@/components/common/container/container";
import { Text } from "@/components/common/text/text";
import { Accordion, AccordionSection } from "@/components/common/accordion/accordion";
import SelectIcon1 from "@/assets/images/multi-select-icons/light-bulb.png";
import SelectIcon2 from "@/assets/images/multi-select-icons/police-officer.png";
import SelectIcon3 from "@/assets/images/multi-select-icons/camera-flash.png";
import SelectIcon4 from "@/assets/images/multi-select-icons/construction.png";
import SelectIcon5 from "@/assets/images/multi-select-icons/national-park.png";
import SelectIcon6 from "@/assets/images/multi-select-icons/clapper-board.png";
import PricingSection from "./pricing-chart";
import { IconText } from "@/components/common/icon-text-group/icon-text";



const propertyDescription = [
  "This well-maintained 3-bedroom apartment is located in a peaceful residential area of Ojodu, Ogun State. The property features spacious rooms, tiled floors, and good ventilation throughout the apartment.",
  "The living room is large and bright, with enough space for a full seating arrangement and dining area. The kitchen comes fitted with cabinets and a dedicated storage area. Each bedroom has its own bathroom, while the extra guest toilet is conveniently located near the living area.",
  "The compound is gated and fenced, providing added security and privacy for residents. The property also has a steady water supply and a prepaid electricity meter.",
  "This apartment is ideal for families or working professionals looking for comfort, accessibility, and a secure environment.",
];

const locationDetails = [
  { label: "State", value: "Ogun" },
  { label: "Area", value: "Oke-Sale Area" },
  { label: "LGA", value: "Osun" },
  {
    label: "Address",
    value: "15 Admiralty Street, Oke-Sale Area, Ojodu, Ogun State",
  },
  {
    label: "Address Status",
    value: "Hidden",
    pill: true,
  },
  {
    label: "Landmark",
    value: "Close to major road and local market",
  },
];

const propertyOverview = [
  { label: "Property Type", value: "Apartment/Flat" },
  { label: "Available Unit", value: "6/9" },
  { label: "Furnishing", value: "Not furnished" },
  { label: "Condition", value: "Newly Built" },
  { label: "Bedrooms", value: "3" },
  { label: "Bathrooms", value: "3" },
  { label: "Toilets", value: "4" },
  { label: "Water Source", value: "Borehole, Well, Water Board" },
  { label: "Parking Space", value: "Available" },
  { label: "Fencing & Gated", value: "Yes" },
];

const amenities = [
  { label: "24hrs Electricity", icon: SelectIcon1 },
  { label: "Security Guard(s)", icon: SelectIcon2 },
  { label: "CCTV", icon: SelectIcon3 },
  { label: "Regulated Entry", icon: SelectIcon4 },
  { label: "Park Area/Playground", icon: SelectIcon5 },
  { label: "Cinema", icon: SelectIcon6 },
  { label: "Elevator", icon: SelectIcon1 },
  { label: "Swimming Pool", icon: SelectIcon2 },
  { label: "Basketball Court", icon: SelectIcon3 },
  { label: "Football Pitch", icon: SelectIcon4 },
  { label: "Tennis Lawn", icon: SelectIcon5 },
  { label: "Waste Management", icon: SelectIcon6 },
  { label: "Intercom", icon: SelectIcon1 },
  { label: "Internet/WiFi", icon: SelectIcon2 },
  { label: "Facility Manager", icon: SelectIcon3 },
  { label: "Balcony", icon: SelectIcon4 },
];

// Section title
const SectionTitle = ({ title }: { title: string }) => (
  <Text variant="body-xs" tone="primary" className="mb-2">
    {title}
  </Text>
);

// Description Section Component
const DescriptionSection = () => (
  <Container>
    <SectionTitle title="Description" />
    <Container className="space-y-3 font-normal">
      {propertyDescription.map((paragraph, index) => (
        <Text tone="secondary" variant="body-sm" key={index}>{paragraph}</Text>
      ))}
    </Container>
  </Container>
);

// Location Section Component
const LocationSection = () => (
  <Container>
    <SectionTitle title="Location" />

    <Container className="space-y-4">
      {locationDetails.map((item) => (
        <Container
          key={item.label}
          className="grid grid-cols-2 gap-3 text-sm"
        >
          <Container as="span" className="text-secondary">{item.label}</Container>

          {item.pill ? (
            <Container as="span" className="inline-flex w-fit rounded-lg bg-persian-red-back px-2 py-1 text-xs font-medium text-persian-red-fore">
              {item.value}
            </Container>
          ) : (
            <Container as="span" className="text-secondary">{item.value}</Container>
          )}
        </Container>
      ))}
    </Container>
  </Container>
);

// Property Overview Section Component
const OverviewSection = () => (
  <Container>
    <SectionTitle title="Property Overview" />

    <Container className="space-y-3">
      {propertyOverview.map((item) => (
        <Container
          key={item.label}
          className="grid grid-cols-2 gap-3 text-sm"
        >
          <Container as="span" className="text-secondary text-sm">{item.label}</Container>
          <Container as="span" className="text-secondary text-sm">{item.value}</Container>
        </Container>
      ))}
    </Container>
  </Container>
);

// Amenities Section Component
const AmenitiesSection = () => (
  <Container>
    <SectionTitle title="Amenities" />

    <Container className="flex flex-wrap gap-2">
      {amenities.map(({ label, icon }) => (
        <IconText
          key={label}
          isClickable={false}
          icon={icon}
          label={label}
        />
      ))}
    </Container>

    <Container className="mt-4">
      <SectionTitle title="Property ID" />
      <Text className="text-sm text-secondary">PTL-1234</Text>
    </Container>

  </Container>
);



export const PropertyAccordion = () => {
  const sections: AccordionSection[] = [
    {
      id: "about",
      title: "About this property",
      content: (
        <Container className="space-y-4">
          <DescriptionSection />
          <Container className="border-t border-line" />
          <LocationSection />
          <Container className="border-t border-line" />
          <OverviewSection />
          <Container className="border-t border-line" />
          <AmenitiesSection />
        </Container>
      ),
    },
    {
      id: "pricing",
      title: "Pricing",
      content: <PricingSection />,
    },
  ];

  return <Accordion sections={sections} defaultOpen="about" />;
};