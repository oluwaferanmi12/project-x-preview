"use client";

import { AddIcon, CloseIcon } from "@repo/icons";
import { Container, Text } from "@repo/ui";
import React, { useId } from "react";

type FaqBoxProps = {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
};

export const FaqBox = ({ question, answer, open, onToggle }: FaqBoxProps) => {
  const id = useId();
  const triggerId = `${id}-trigger`;
  const panelId = `${id}-panel`;

  return (
    <Container className="w-full border-b-[0.5px] border-line">
      <Container
        as="button"
        type="button"
        id={triggerId}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center justify-between gap-4 py-6 text-left"
      >
        <Text variant="h4" tone="primary">
          {question}
        </Text>
        {open ? (
          <CloseIcon className="shrink-0 text-s300" size={20} />
        ) : (
          <AddIcon className="shrink-0 text-s300" size={20} />
        )}
      </Container>
      {/* Animating grid-template-rows between 0fr and 1fr opens the panel to
          its natural height, so no heights are measured or hard-coded. */}
      <Container
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        aria-hidden={!open}
        className={`grid transition-[grid-template-rows] duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <Container className="overflow-hidden">
          <Text tone="secondary" variant="bodyRegular" className="pt-2 pb-6">
            {answer}
          </Text>
        </Container>
      </Container>
    </Container>
  );
};

export type { FaqBoxProps };
