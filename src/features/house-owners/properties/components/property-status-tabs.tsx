"use client";

import { Container, Button } from "@repo/ui";

type PropertyStatusTabsProps = {
  active: string;
  onChange: (status: string) => void;
};

const tabs = [
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
    <Container className="flex items-center gap-2 rounded-xl bg-muted p-1">
      {tabs.map((tab) => (
        <Button
          key={tab.value}
          shorter
          variant={active === tab.value ? "primary" : "transparent"}
          onClick={() => onChange(tab.value)}
        >
          {tab.label}
        </Button>
      ))}
    </Container>
  );
};