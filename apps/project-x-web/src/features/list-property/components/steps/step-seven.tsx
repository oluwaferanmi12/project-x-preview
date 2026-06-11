import { Container } from "@repo/ui";
import { Text } from "@repo/ui";
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
import { IconText } from "@repo/ui";


export const StepSeven = () => {

  const iconSize = 16;
  const amenities = [
    { label: "3 Apartment", icon: <Image src={SelectIcon1} alt="" width={iconSize} height={iconSize} /> },
    { label: "3 Beds", icon: <Image src={SelectIcon2} alt="" width={iconSize} height={iconSize} /> },
    { label: "3 Baths", icon: <Image src={SelectIcon3} alt="" width={iconSize} height={iconSize} /> },
    { label: "3 Toilets", icon: <Image src={SelectIcon4} alt="" width={iconSize} height={iconSize} /> },
  ];


  
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
          <IconText
            key={label}
            isClickable={false}
            icon={icon}
            label={label}
          />
        ))}
      </Container>

      <AgentCard />

      <PropertyAccordion />
    </Container>
  );
};