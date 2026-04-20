import { Container } from "@/components/common/container/container";
import { Text } from "@/components/common/text/text";
import React from "react";
import { PropertyGallery } from "../nuggets/property-gallery";
import { AgentCard } from "../nuggets/agent-card";
import { PropertyAccordion } from "../nuggets/step-seven-accordian";
import LightClock from "@/assets/svgs/light-clock.svg";
import SelectIcon1 from "@/assets/images/multi-select-icons/light-bulb.png";
import SelectIcon2 from "@/assets/images/multi-select-icons/police-officer.png";
import SelectIcon3 from "@/assets/images/multi-select-icons/camera-flash.png";
import SelectIcon4 from "@/assets/images/multi-select-icons/construction.png";
import Image from "next/image";

const amenities = [
  { label: "3 Apartment", icon: SelectIcon1 },
  { label: "3 Beds", icon: SelectIcon2 },
  { label: "3 Baths", icon: SelectIcon3 },
  { label: "3 Toilets", icon: SelectIcon4 },
];


export const StepSeven = () => {
  return (
    <Container className="space-y-6">
      <PropertyGallery />

      <Container className="flex items-center justify-between">
        <Container className="flex items-center gap-1">
          <Text as="h2" className="text-2xl font-bold text-primary">
            ₦300,000
          </Text>
          <Container as="span" className="text-sm text-secondary">(Annually)</Container>
        </Container>

        <Container className="flex items-center justify-between text-secondary">
          <Container className="flex items-center gap-1">
            <LightClock className="h-4 w-4" />
            <Container as="span" className="text-xs">9 Apr, 2020</Container>
          </Container>
        </Container>
      </Container>

      <Container className="flex flex-wrap gap-2">
        {amenities.map(({ label, icon }) => (
          <Container
            key={label}
            className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface px-2 py-1"
          >
            <Image
              src={icon}
              alt={label}
              width={12}
              height={12}
              className="h-4 w-4"
            />
            <Container as="span" className="text-xs text-primary">{label}</Container>
          </Container>
        ))}
      </Container>

      <AgentCard />

      <PropertyAccordion />
    </Container>
  );
};