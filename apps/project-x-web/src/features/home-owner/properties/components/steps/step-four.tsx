import { Container } from "@repo/ui";
import React from "react";
import { NumberWrapper } from "../nuggets/number-wrapper";
import { Input } from "@repo/ui";
import { SingleSelectForm } from "../nuggets/single-select-form";
import { UnitInputDropdown } from "../nuggets/unit-input-dropdown";

export const StepFour = ({ activeSubstep }: { activeSubstep: number }) => {
    const [paymentPlan, setPaymentPlan] = React.useState<"monthly" | "biannually" | "annually">("monthly");
    return (
        <>
            <Container>
                {activeSubstep === 1 && (
                    <>
                        <NumberWrapper serialNo="i" text="What is the rent for this property?">
                            <Container className="flex items-stretch gap-3">
                                <UnitInputDropdown onChange={() => { }} unit="currency" />
                                <Input label="" inputMode="decimal" placeholder="0.00" />
                            </Container>
                        </NumberWrapper>
                        <NumberWrapper serialNo="ii" text="How often is rent paid?">
                            <Container className="grid grid-cols-2 gap-4">
                                <SingleSelectForm
                                    checked={paymentPlan === "monthly"}
                                    onChange={() => setPaymentPlan("monthly")}
                                    text="Monthly"
                                />
                                <SingleSelectForm
                                    checked={paymentPlan === "biannually"}
                                    onChange={() => setPaymentPlan("biannually")}
                                    text="Bianually"
                                />
                                <SingleSelectForm
                                    checked={paymentPlan === "annually"}
                                    onChange={() => setPaymentPlan("annually")}
                                    text="Annually"
                                />
                            </Container>
                        </NumberWrapper>
                    </>
                )}
                {
                    activeSubstep === 2 && (
                        <>
                            <NumberWrapper serialNo="iii" text="Is there an agency fee? If yes, enter the amount">
                                <Container className="flex items-stretch gap-3">
                                    <UnitInputDropdown onChange={() => { }} unit="percent" />
                                    <Input label="" inputMode="decimal" placeholder="0.00" />
                                </Container>
                            </NumberWrapper>
                            <NumberWrapper serialNo="iv" text="Is there a legal agreement fee? If yes, enter the amount">
                                <Container className="flex items-stretch gap-3">
                                    <UnitInputDropdown onChange={() => { }} unit="currency" />
                                    <Input label="" inputMode="decimal" placeholder="0.00" />
                                </Container>
                            </NumberWrapper>
                            <NumberWrapper serialNo="v" text="Is there a caution or damage fee? If yes, enter the amount">
                                <Container className="flex items-stretch gap-3">
                                    <UnitInputDropdown onChange={() => { }} unit="percent" />
                                    <Input label="" inputMode="decimal" placeholder="0.00" />
                                </Container>
                            </NumberWrapper>
                            <NumberWrapper serialNo="vi" text="Is there a service charge? If yes, enter the amount">
                                <Container className="flex items-stretch gap-3">
                                    <UnitInputDropdown onChange={() => { }} unit="percent" />
                                    <Input label="" inputMode="decimal" placeholder="0.00" />
                                </Container>
                            </NumberWrapper>
                        </>
                    )
                }
            </Container>
        </>
    );
};
