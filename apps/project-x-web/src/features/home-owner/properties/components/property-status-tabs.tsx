"use client";

import { Container, Button, Text } from "@repo/ui";
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
    <Container
      className="
        flex items-center gap-2 overflow-x-auto
        rounded-xl border border-line bg-muted p-1
        sm:overflow-visible
        [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
      "
    >
      {tabs.map((tab) => (
        <Button
          key={tab.value}
          type="button"
          shorter
          className={`
            shrink-0 whitespace-nowrap px-4 py-2
            ${
              active === tab.value
                ? "bg-surface text-primary hover:bg-surface"
                : "bg-transparent font-medium text-secondary hover:bg-surface/50"
            }
          `}
          onClick={() => onChange(tab.value)}
        >
          <Text variant="action-label"> {tab.label}</Text>
        </Button>
      ))}
    </Container>
  );
};