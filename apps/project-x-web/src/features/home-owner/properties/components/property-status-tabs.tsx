"use client";

import { Container, Button } from "@repo/ui";
import type { PropertyStatus } from "../data/properties.mock";

type PropertyStatusTabsProps = {
  active: PropertyStatus;
  onChange: (status: PropertyStatus) => void;
};

const tabs: { label: string; value: PropertyStatus }[] = [
  { label: "Draft", value: "draft" },
  { label: "Under Review", value: "under-review" },
  { label: "Published", value: "published" },
  { label: "Archived", value: "archived" },
];

export const PropertyStatusTabs = ({
  active,
  onChange,
}: PropertyStatusTabsProps) => {
  return (
    <Container className="flex items-center gap-2 rounded-xl border border-line bg-muted p-1">
      {tabs.map((tab) => (
        <Button
          key={tab.value}
          shorter
          className={`px-4 py-2 ${active === tab.value ? "bg-surface text-primary hover:bg-surface" : "bg-transparent font-medium text-secondary hover:bg-surface/50"}`}
          onClick={() => onChange(tab.value)}
        > 
          {tab.label}
        </Button>
      ))}
    </Container>
  );
};
