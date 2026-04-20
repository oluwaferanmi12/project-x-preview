"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/common/container/container";
import { Text } from "@/components/common/text/text";
import { steps } from "../data/listing-navigation-data";
import CheckMark from "@/assets/svgs/check.svg";



const layoutTransition = {
  duration: 0.35,
  ease: [0.22, 1, 0.36, 1] as const,
};

export const ListingNavigation = ({ active }: { active: number }) => {
  return (
    <Container className="bg-muted  relative flex h-full flex-col overflow-hidden rounded-xl px-13 py-12">
      <Container
        as="div"
        className="pointer-events-none nav-listing-background absolute h-50 inset-x-0 bottom-0  overflow-hidden "
      >
        {/* <ListingBackground className="block w-[140%] max-w-none -translate-x-[14%] text-s300" /> */}
      </Container>

      {steps.map((step) => (
        <Container
          as={motion.button}
          layout
          key={step.num}
          type="button"
          // onClick={() => setActive(step.num)}
          className="flex cursor-pointer gap-4 bg-transparent text-left"
          transition={{ layout: layoutTransition }}
        >
          <Container
            as={motion.div}
            layout
            className="flex w-10 shrink-0 flex-col items-center"
            transition={{ layout: layoutTransition }}
          >
            <Container
              as={motion.div}
              layout
              className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl p-1.5 ${
                active > step.num ? "bg-p300" :
                active === step.num 
                  ? "border border-p300 bg-p300"
                  : "border border-p75 bg-p50"
              } `}
              transition={{ layout: layoutTransition }}
            >
              {/* {active === step.num ? (
                <Container
                  as={motion.div}
                  layoutId="listing-navigation-active-step"
                  className="absolute inset-0 rounded-xl bg-p300"
                  transition={{ type: "spring", stiffness: 360, damping: 30 }}
                />
              ) : null} */}
              <Container className="relative z-10">
                <Text
                  variant="h5"
                  className={
                    active === step.num ? "text-inverted" : "text-p400"
                  }
                >
                  {active > step.num ? <CheckMark className="text-inverted" /> : step.num}
                </Text>
              </Container>
            </Container>
            {step.num < steps.length ? (
              <Container
                as={motion.div}
                layout
                className="flex min-h-10 flex-1 justify-center py-1"
                transition={{ layout: layoutTransition }}
              >
                <Container className="h-full w-px bg-s300" />
              </Container>
            ) : null}
          </Container>

          <Container
            as={motion.div}
            layout
            className={`min-w-0 flex-1 ${active !== step.num ? "pt-2" : ""}`}
            transition={{ layout: layoutTransition }}
          >
            <Container
              as={motion.div}
              layout="position"
              transition={layoutTransition}
            >
              <Text variant="h5" tone="primary">
                {step.title}
              </Text>
            </Container>
            <AnimatePresence initial={false}>
              {active === step.num ? (
                <Container
                  as={motion.div}
                  key={`subtitle-${step.num}`}
                  layout
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <Text variant="body-sm" tone="secondary" className="mt-1">
                    {step.subtitle}
                  </Text>
                </Container>
              ) : null}
            </AnimatePresence>
          </Container>
        </Container>
      ))}
    </Container>
  );
};
