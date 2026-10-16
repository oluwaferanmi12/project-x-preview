"use client";

import React, { useState, ReactNode } from "react";
// import ChevronDownIcon from "@/assets/svgs/chevron-arrow-down.svg";
// import ChevronRightIcon from "@/assets/svgs/chevron-right.svg";
import { Container } from "../container";

export type AccordionSection = {
  id: string;
  title: string;
  content: ReactNode;
};

type AccordionProps = {
  sections: AccordionSection[];
  defaultOpen?: string | null;
  className?: string;
  sectionClassName?: string;
  openIcon?: ReactNode;
  closedIcon?: ReactNode;
  headerClassName?: string;
  titleClassName?: string;
  contentClassName?: string;
  showContentDivider?: boolean;
};

export const Accordion = ({
  sections,
  defaultOpen = null,
  className = "space-y-3",
  sectionClassName = "overflow-hidden rounded-xl border border-line bg-surface",
  openIcon,
  closedIcon,
  headerClassName = "px-4 py-3",
  titleClassName = "text-base font-semibold text-primary",
  contentClassName = "border-muted px-4 pb-3",
  showContentDivider = true,
}: AccordionProps) => {
  const [open, setOpen] = useState<string | null>(defaultOpen);

  const renderSection = (sectionId: string) => open === sectionId;

  return (
    <Container className={className}>
      {sections.map((section) => {
        const isOpen = renderSection(section.id);

        return (
          <Container key={section.id} className={sectionClassName}>
            <Container
              as="button"
              onClick={() => setOpen(isOpen ? null : section.id)}
              className={`flex w-full items-center justify-between text-left cursor-pointer ${headerClassName}`}
            >
              <Container as="span" className={titleClassName}>
                {section.title}
              </Container>

              {isOpen ? openIcon : closedIcon}
            </Container>

            {isOpen && (
              <Container className={contentClassName}>
                {showContentDivider && (
                  <Container className="border-t border-line pb-4" />
                )}
                {section.content}
              </Container>
            )}
          </Container>
        );
      })}
    </Container>
  );
};

export type { AccordionProps };
