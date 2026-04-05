import { Container } from "@/components/common/container/container";
import React from "react";
import { NumberWrapper } from "../nuggets/number-wrapper";
import { Select } from "@/components/common/select/select";
import { Input } from "@/components/common/input/input";

export const StepThree = ({ activeSubstep }: { activeSubstep: number }) => {
  return (
    <>
      <Container>
        <NumberWrapper serialNo="i" text="Where is the property located ?">
          <Select
            label=""
            options={[{ label: "Select state", value: "" }]}
            noBottomMargin
          />
          <Select
            label=""
            options={[{ label: "Local government area", value: "" }]}
            noBottomMargin
          />
          <Select
            label=""
            options={[{ label: "Area/Neighborhood", value: "" }]}
            noBottomMargin
          />
        </NumberWrapper>
        <NumberWrapper serialNo="ii" text="Provide Property address">
          <Input label="" placeholder="Enter address" />
        </NumberWrapper>
      </Container>
    </>
  );
};
