import React, { useState } from "react";

import Image from "next/image";
import houseBottom from "@/assets/images/house-bottom.png";
import { steps } from "../data/listing-navigation-data";
import { Container } from "@/components/common/container/container";
import { Text } from "@/components/common/text/text";

export const ListingNavigation = () => {
  const [active, setActive] = useState(1);
  return (
    <Container className="bg-muted nav-listing-background relative  px-13 py-12 rounded-xl overflow-hidden flex flex-col h-full">
      {steps.map((step) => (
        <Container
          key={step.num}
          onClick={() => setActive(step.num)}
          className="flex flex-col  cursor-pointer "
        >
          <Container className={`flex  gap-4`}>
            {" "}
            <Container>
              <Container
                className={` w-10 h-10 rounded-xl flex items-center shrink-0 justify-center p-1.5 ${active === step.num ? "bg-p300" : "bg-p50 border border-p75"} `}
              >
                <Text
                  variant="h5"
                  className={`${active === step.num ? "text-inverted" : "text-p400"} `}
                >
                  {step.num}
                </Text>
              </Container>
              {step.num < steps.length && (
                <Container className="w-10 h-10  flex justify-center">
                  <Container className={`bg-s300  h-full  w-px `}></Container>
                </Container>
              )}
            </Container>
            <Container className={`${active !== step.num && "mt-2"}`}>
              <Text variant="h5" tone="primary">
                {step.title}
              </Text>
              <Text
                variant="body-sm"
                tone="secondary"
                className={` ${active === step.num ? "block" : "hidden"}`}
              >
                {step.subtitle}
              </Text>
            </Container>
          </Container>
        </Container>
      ))}
    </Container>
  );
};
