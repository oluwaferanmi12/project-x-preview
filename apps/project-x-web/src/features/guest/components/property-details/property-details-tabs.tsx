"use client";

import { Button, Container, Text } from "@repo/ui";
import { PropertyDetailsTab } from "../../guest.types";

const TABS: { label: string; value: PropertyDetailsTab }[] = [
  { label: "Property Details", value: "details" },
  { label: "Reviews", value: "reviews" },
];

export const PropertyDetailsTabs = ({
  active,
  onChange,
}: {
  active: PropertyDetailsTab;
  onChange: (tab: PropertyDetailsTab) => void;
}) => (
  <Container className="flex items-center border-b border-line" role="tablist">
    {TABS.map((tab) => (
      <Button
        key={tab.value}
        variant="transparent"
        role="tab"
        aria-selected={active === tab.value}
        onClick={() => onChange(tab.value)}
        className={`!rounded-none border-b-2 !px-4 ${
          active === tab.value
            ? "border-primary !text-primary"
            : "border-transparent !text-secondary"
        }`}
      >
        <Text as="span" variant="action-label">
          {tab.label}
        </Text>
      </Button>
    ))}
  </Container>
);
