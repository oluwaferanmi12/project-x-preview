"use client";

import React from "react";
import { Container } from "@repo/ui";
import { Text } from "@repo/ui";
import { steps } from "../data/listing-navigation-data";
import { Check as CheckMark } from "@repo/icons";

export const MobileListingNavigation = ({
  active,
}: {
  active: number;
}) => {
  return (
    <Container className="lg:hidden px-6">
      {/* Top Navigation */}
      <Container
        className="
          flex items-center min-w-full overflow-x-auto px-1
          scrollbar-hide [-ms-overflow-style:none]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "   
      >
        {steps.map((step, index) => {
          const isActive = active === step.num;
          const isCompleted = active > step.num;
          const isLast = index === steps.length - 1;

          return (
            <React.Fragment key={step.num}>
              {/* Step Circle */}
              <Container className="flex items-center">
                <Container
                  className={`
                    relative flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px]
                    text-sm font-semibold transition-all
                    ${
                      isCompleted
                        ? "bg-p300 text-white"
                        : isActive
                        ? "bg-p300 text-white"
                        : "border border-p75 bg-p50 text-p400"
                    }
                  `}
                >
                  {isCompleted ? (
                    <CheckMark className="h-4 w-4 text-white" />
                  ) : (
                    step.num
                  )}
                </Container>

                {/* Connecting Line */}
                {!isLast && (
                  <Container
                    className={`
                      h-[2px] w-10
                      ${
                        active > step.num
                          ? "bg-p300"
                          : "bg-s300"
                      }
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
        <Text
          variant="body-sm"
          className="font-semibold text-primary leading-tight"
        >
          {steps.find((step) => step.num === active)?.title}
        </Text>

        <Text className="mt-1 text-secondary text-sm leading-tight">
          {steps.find((step) => step.num === active)?.subtitle}
        </Text>
      </Container>
    </Container>
  );
};