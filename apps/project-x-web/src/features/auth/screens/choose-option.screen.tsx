"use client";

import { useState } from "react";
import { ArrowRight, HandRentIcon as HandIcon, HomeIcon, RadioIcon } from "@repo/icons";
import { Button } from "@repo/ui";
import { Container } from "@repo/ui";
import { Text } from "@repo/ui";
import { useRouter } from "next/navigation";

export function ChooseOptionScreen() {
  const [activeState, setActiveState] = useState(0);
  const router = useRouter();

  return (
    <Container>
      <Text variant="h3" tone="primary">
        How can we serve you? 🫡
      </Text>
      <Text variant="body-sm" className="mt-2" tone="secondary">
        Choose how you’ll like to get started.
      </Text>
      <Container className="mt-7 flex items-center gap-6">
        <Container
          as="button"
          className={`p-4 py-6 cursor-pointer w-full ${activeState === 1 ? "bg-s50" : "bg-surface"} rounded-2xl border border-line`}
          onClick={() => setActiveState(1)}
        >
          <Container className="mb-8">
            <RadioIcon
              className={activeState === 1 ? "text-p300" : "text-line"}
            />
          </Container>
          <HomeIcon className="text-s300" />
          <Text variant="h5" className="mt-4 text-left text-choose-option-text">
            I want to list a property
          </Text>
        </Container>
        <Container
          as="button"
          onClick={() => setActiveState(2)}
          className={`p-4 py-6 cursor-pointer w-full ${activeState === 2 ? "bg-s50" : "bg-surface"} rounded-2xl border border-line`}
        >
          <Container className="mb-8">
            <RadioIcon
              className={activeState === 2 ? "text-p300" : "text-line"}
            />
          </Container>
          <HandIcon className="text-s300" />
          <Text variant="h5" className="mt-4 text-left text-choose-option-text">
            I want to rent a property
          </Text>
        </Container>
      </Container>
      <Container className="mt-6">
        <Button
          onClick={() => router.push("/properties/list-property")}
          rightIcon={<ArrowRight />}
          fullWidth
        >
          Continue
        </Button>
      </Container>
    </Container>
  );
}
