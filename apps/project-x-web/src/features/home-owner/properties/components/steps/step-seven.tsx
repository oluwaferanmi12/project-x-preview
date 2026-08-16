import { Container } from "@repo/ui";
import { Text } from "@repo/ui";
import React from "react";
import { PropertyGallery } from "../nuggets/property-gallery";
import { AgentCard } from "../nuggets/agent-card";
import { PropertyAccordion } from "../nuggets/step-seven-accordian";
import { LightClock } from "@repo/icons";
import SelectIcon1 from "@/assets/images/multi-select-icons/light-bulb.png";
import SelectIcon2 from "@/assets/images/multi-select-icons/police-officer.png";
import SelectIcon3 from "@/assets/images/multi-select-icons/camera-flash.png";
import SelectIcon4 from "@/assets/images/multi-select-icons/construction.png";
import Image from "next/image";
import { IconText } from "@repo/ui";
import { DraftProperty } from "../../types/property.types";
import { useGetPropertyTypes } from "../../hooks/property.hook";
import { formatRentPaymentFrequency } from "../../utils/property.utils";
import { useAuthStore } from "@/store/useAuthStore";


export const StepSeven = ({
  payload,
  handleUpdateDraft,
}: {
  payload?: DraftProperty;
  handleUpdateDraft: (updates: Partial<DraftProperty>) => void;
}) => {
  const { data: propertyTypes } = useGetPropertyTypes();
  const { user } = useAuthStore();

  const propertyTypeName =
    propertyTypes?.find((item) => item.id === payload?.propertyTypeId)
      ?.name ?? "—";

  const iconSize = 16;
  const amenities = [
    { label: propertyTypeName, icon: <Image src={SelectIcon1} alt="" width={iconSize} height={iconSize} /> },
    { label: `${payload?.bedroomCount ?? "—"} Beds`, icon: <Image src={SelectIcon2} alt="" width={iconSize} height={iconSize} /> },
    { label: `${payload?.bathroomCount ?? "—"} Baths`, icon: <Image src={SelectIcon3} alt="" width={iconSize} height={iconSize} /> },
    { label: `${payload?.toiletCount ?? "—"} Toilets`, icon: <Image src={SelectIcon4} alt="" width={iconSize} height={iconSize} /> },
  ];

  const frequencyLabel = formatRentPaymentFrequency(payload?.rentPaymentFrequency);

  return (
    <Container className="space-y-6">
      <PropertyGallery images={payload?.images} />

      <Container className="flex items-center justify-between">
        <Container className="flex items-center gap-1">
          <Text as="h2" className="text-2xl font-bold text-primary">
            {payload?.rentAmount != null
              ? `₦${payload.rentAmount.toLocaleString("en-NG")}`
              : "Not set"}
          </Text>
          {frequencyLabel && (
            <Container as="span" className="text-sm text-secondary">
              ({frequencyLabel})
            </Container>
          )}
        </Container>

        <Container className="flex items-center justify-between text-secondary">
          <Container className="flex items-center gap-1">
            <LightClock className="h-4 w-4" />
            <Container as="span" className="text-xs">Draft</Container>
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

      <AgentCard user={user} verified={user?.isEmailVerified} />

      <PropertyAccordion payload={payload} />
    </Container>
  );
};
