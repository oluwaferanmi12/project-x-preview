"use client";
import { Container } from "@/components/common/container/container";
import { Text } from "@/components/common/text/text";
import HomeIcon from "@/assets/svgs/home-icon.svg";
import HandIcon from "@/assets/svgs/hand-rent-icon.svg";
import RadioIcon from "@/assets/svgs/radio-icon.svg";
import { useState } from "react";
import Button from "@/components/common/button/button";
import ArrowRight from "@/assets/svgs/arrow-right.svg";

function ChooseOption() {
  const [activeState, setActiveState] = useState(0);
  return (
    <>
      <Container>
        <Text className="" variant="h3" tone="primary">
          How can we serve you? 🫡
        </Text>
        <Text variant="body-sm" className="mt-2" tone="secondary">
          Choose how you’ll like to get started.
        </Text>
        <Container className="mt-7 flex items-center gap-6">
          <Container
            as="button"
            className={`p-4 py-6 cursor-pointer w-full ${activeState === 1 ? "bg-s50" : " bg-surface"}  rounded-2xl border border-line`}
            onClick={() => {
              setActiveState(1);
            }}
          >
            <Container className="mb-8">
              <RadioIcon
                className={`${activeState === 1 ? "text-p300" : "text-line"}`}
              />
            </Container>
            <HomeIcon className="text-s300" />
            <Text variant="h5" tone="p300" className="mt-4 text-left">
              I want to list a property
            </Text>
          </Container>
          <Container
            as="button"
            onClick={() => {
              setActiveState(2);
            }}
            className={`p-4 cursor-pointer py-6 w-full ${activeState === 2 ? " bg-s50" : "bg-surface"}  rounded-2xl border border-line`}
          >
            <Container className="mb-8">
              <RadioIcon
                className={`${activeState === 2 ? "text-p300" : "text-line"}`}
              />
            </Container>
            <HandIcon className="text-s300" />
            <Text variant="h5" tone="p300" className="mt-4 text-left">
              I want to rent a property
            </Text>
          </Container>
        </Container>
        <Container className="mt-6">
          <Button rightIcon={<ArrowRight />} fullWidth>
            Continue
          </Button>
        </Container>
      </Container>
    </>
  );
}

export default ChooseOption;
