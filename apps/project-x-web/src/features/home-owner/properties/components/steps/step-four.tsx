import { Container } from "@repo/ui";
import React from "react";
import { NumberWrapper } from "../nuggets/number-wrapper";
import { Input } from "@repo/ui";
import { SingleSelectForm } from "../nuggets/single-select-form";
import { UnitInputDropdown } from "../nuggets/unit-input-dropdown";
import { DraftProperty } from "../../types/property.types";

export const StepFour = ({
  activeSubstep,
  payload,
  handleUpdateDraft,
}: {
  activeSubstep: number;
  payload?: DraftProperty;
  handleUpdateDraft: (updates: Partial<DraftProperty>) => void;
}) => {
  const [paymentPlan, setPaymentPlan] = React.useState<
    "monthly" | "biannually" | "annually"
  >("monthly");
  return (
    <>
      <Container>
        {activeSubstep === 1 && (
          <>
            <NumberWrapper
              serialNo="i"
              text="What is the rent for this property?"
            >
              <Container className="flex items-stretch gap-3">
                <UnitInputDropdown onChange={() => {}} unit="currency" />
                <Input
                  label=""
                  value={payload?.rentAmount ?? ""}
                  inputMode="decimal"
                  onChange={({ target }) => {
                    handleUpdateDraft({ rentAmount: +target.value });
                  }}
                  placeholder="0.00"
                />
              </Container>
            </NumberWrapper>
            <NumberWrapper serialNo="ii" text="How often is rent paid?">
              <Container className="grid grid-cols-2 gap-4">
                <SingleSelectForm
                  checked={payload?.rentPaymentFrequency === "MONTHLY"}
                  onChange={() => {
                    handleUpdateDraft({ rentPaymentFrequency: "MONTHLY" });
                  }}
                  text="Monthly"
                />
                <SingleSelectForm
                  checked={payload?.rentPaymentFrequency === "BIANNUAL"}
                  onChange={() => {
                    handleUpdateDraft({ rentPaymentFrequency: "BIANNUAL" });
                  }}
                  text="Bianually"
                />
                <SingleSelectForm
                  checked={payload?.rentPaymentFrequency === "ANNUALLY"}
                  onChange={() => {
                    handleUpdateDraft({ rentPaymentFrequency: "ANNUALLY" });
                  }}
                  text="Annually"
                />
              </Container>
            </NumberWrapper>
          </>
        )}
        {activeSubstep === 2 && (
          <>
            <NumberWrapper
              serialNo="iii"
              text="Is there an agency fee? If yes, enter the amount"
            >
              <Container className="flex items-stretch gap-3">
                <UnitInputDropdown onChange={() => {}} unit="percent" />
                <Input
                  value={payload?.agencyFee ?? ""}
                  onChange={({ target }) => {
                    handleUpdateDraft({ agencyFee: +target.value });
                  }}
                  label=""
                  inputMode="decimal"
                  placeholder="0.00"
                />
              </Container>
            </NumberWrapper>
            <NumberWrapper
              serialNo="iv"
              text="Is there a legal agreement fee? If yes, enter the amount"
            >
              <Container className="flex items-stretch gap-3">
                <UnitInputDropdown onChange={() => {}} unit="currency" />
                <Input
                  label=""
                  inputMode="decimal"
                  placeholder="0.00"
                  value={payload?.legalAgreementFee ?? ""}
                  onChange={({ target }) => {
                    handleUpdateDraft({ legalAgreementFee: +target.value });
                  }}
                />
              </Container>
            </NumberWrapper>
            <NumberWrapper
              serialNo="v"
              text="Is there a caution or damage fee? If yes, enter the amount"
            >
              <Container className="flex items-stretch gap-3">
                <UnitInputDropdown onChange={() => {}} unit="percent" />
                <Input
                  label=""
                  inputMode="decimal"
                  placeholder="0.00"
                  value={payload?.cautionFee ?? ""}
                  onChange={({ target }) => {
                    handleUpdateDraft({ cautionFee: +target.value });
                  }}
                />
              </Container>
            </NumberWrapper>
            <NumberWrapper
              serialNo="vi"
              text="Is there a service charge? If yes, enter the amount"
            >
              <Container className="flex items-stretch gap-3">
                <UnitInputDropdown onChange={() => {}} unit="percent" />
                <Input
                  value={payload?.serviceCharge ?? ""}
                  onChange={({ target }) => {
                    handleUpdateDraft({ serviceCharge: +target.value });
                  }}
                  label=""
                  inputMode="decimal"
                  placeholder="0.00"
                />
              </Container>
            </NumberWrapper>
          </>
        )}
      </Container>
    </>
  );
};
