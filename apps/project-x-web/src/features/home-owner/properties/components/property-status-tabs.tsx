"use client";

import * as React from "react";
import { Container, Button, Text } from "@repo/ui";
import type { ListingType } from "../types/property.types";

type PropertyStatusTabsProps = {
  active: ListingType;
  onChange: (status: ListingType) => void;
};

const tabs: { label: string; value: ListingType }[] = [
  { label: "Draft", value: "DRAFT" },
  { label: "Under Review", value: "UNDER_REVIEW" },
  { label: "Published", value: "PUBLISHED" },
  { label: "Archived", value: "ARCHIVED" },
];

export const PropertyStatusTabs = ({
  active,
  onChange,
}: PropertyStatusTabsProps) => {
  const tabRefs = React.useRef<Record<string, HTMLElement | null>>({});
  const [indicator, setIndicator] = React.useState<{
    left: number;
    width: number;
  } | null>(null);

  // Slide the highlight under the active tab and keep that tab in view.
  React.useLayoutEffect(() => {
    const update = () => {
      const el = tabRefs.current[active];
      if (!el) return;
      setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
      el.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [active]);

  return (
    <Container
      className="
        relative flex items-center gap-2 overflow-x-auto
        rounded-xl border border-line bg-muted p-1
        sm:overflow-visible
      "
    >
      {indicator && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-1 top-1 rounded-lg bg-surface transition-[left,width] duration-300 ease-out"
          style={{ left: indicator.left, width: indicator.width }}
        />
      )}
      {tabs.map((tab) => (
        <span
          key={tab.value}
          ref={(el) => {
            tabRefs.current[tab.value] = el;
          }}
          className="relative z-10 shrink-0"
        >
          <Button
            type="button"
            shorter
            className={`
              whitespace-nowrap bg-transparent px-4 py-2
              transition-colors duration-300 hover:bg-transparent
              ${
                active === tab.value
                  ? "text-primary"
                  : "font-medium text-secondary hover:text-primary"
              }
            `}
            onClick={() => onChange(tab.value)}
          >
            <Text variant="action-label"> {tab.label}</Text>
          </Button>
        </span>
      ))}
    </Container>
  );
};
