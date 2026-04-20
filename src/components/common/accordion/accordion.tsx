"use client";

import React, { useState, ReactNode } from "react";
import { Container } from "../container/container";
import ChevronDownIcon from "@/assets/svgs/chevron-arrow-down.svg";
import ChevronRightIcon from "@/assets/svgs/chevron-right.svg";

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
};

export const Accordion = ({
  sections,
  defaultOpen = null,
  className = "space-y-3",
  sectionClassName = "overflow-hidden rounded-xl border border-line bg-surface",
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
              className="flex w-full items-center justify-between px-4  text-left cursor-pointer py-3"
            >
              <Container as="span" className="text-base font-semibold text-primary">
                {section.title}
              </Container>

              {isOpen ? (
                <ChevronDownIcon className="h-5 w-5 text-secondary" />
              ) : (
                <ChevronRightIcon className="h-3 w-3 text-secondary" />
              )}
            </Container>

            {isOpen && (
              <Container className="border-muted px-4 pb-3">
                <Container className="border-t border-line pb-4" />
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
