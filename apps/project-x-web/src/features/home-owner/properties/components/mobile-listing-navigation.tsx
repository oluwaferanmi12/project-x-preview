"use client";

import React from "react";
import { Container } from "@repo/ui";
import { Text } from "@repo/ui";
import { steps } from "../data/listing-navigation-data";
import { Check as CheckMark } from "@repo/icons";

export const MobileListingNavigation = ({
  active,
  dropOffStep,
  onStepClick,
}: {
  active: number;
  dropOffStep?: number;
  onStepClick?: (step: number) => void;
}) => {
  return (
    <Container className="lg:hidden pb-3 border-b mb-10 border-line">
      {/* Top Navigation */}
      <Container
        className="
          flex items-center min-w-full overflow-x-auto px-1
          scrollbar-hide [-ms-overflow-style:none]
          scrollbar-none
          [&::-webkit-scrollbar]:hidden
        "
      >
        {steps.map((step, index) => {
          const isActive = active === step.num;
          const isCompleted = active > step.num;
          const isLast = index === steps.length - 1;
          const isDropOff =
            dropOffStep === step.num && !isActive && !isCompleted;

          return (
            <React.Fragment key={step.num}>
              {/* Step Circle */}
              <Container className="flex items-center w-full">
                <Container
                  as="button"
                  type="button"
                  onClick={() => onStepClick?.(step.num)}
                  className={`
                    relative flex h-[29px] w-full min-w-[29px] max-w-[29px]  items-center justify-center rounded-[10px]
                    text-sm font-semibold transition-all cursor-pointer
                    ${
                      isCompleted
                        ? "bg-p300 text-white"
                        : isActive
                          ? "bg-p300 text-white"
                          : isDropOff
                            ? "border border-warning bg-warning-subtle text-p400"
                            : "border border-p75 bg-p50 text-p400"
                    }
                  `}
                >
                  {isCompleted ? (
                    <CheckMark className="h-4 w-4 text-white" />
                  ) : (
                    <Text variant="h5">{step.num}</Text>
                  )}
                </Container>

                {/* Connecting Line */}
                {!isLast && (
                  <Container
                    className={`
                      h-0.5 w-full min-w-full
                      ${active > step.num ? "bg-p300" : "bg-s300"}
                    `}
                  />
                )}
              </Container>
            </React.Fragment>
          );
        })}
      </Container>

      {/* Title + Subtitle */}
      <Container className="mt-6 px-1">
        <Text variant="h5" className="font-semibold text-primary leading-tight">
          {steps.find((step) => step.num === active)?.title}
        </Text>

        <Text
          variant="body-sm"
          className="mt-1 text-secondary text-sm leading-tight"
        >
          {steps.find((step) => step.num === active)?.subtitle}
        </Text>
      </Container>
    </Container>
  );
};
