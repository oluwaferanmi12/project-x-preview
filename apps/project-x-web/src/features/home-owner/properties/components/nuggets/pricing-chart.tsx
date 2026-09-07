"use client";

import React from "react";
import { Container } from "@repo/ui";
import { Text } from "@repo/ui";
import DonutChart from "./donut-chart";

type PricingItem = {
    label: string;
    amount: number;
    color: string;
};

const formatCurrency = (value: number) => `₦${value.toLocaleString("en-NG")}`;

const LegendItem = ({
    color,
    label,
    amount,
}: {
    color: string;
    label: string;
    amount: number;
}) => {
    return (
        <Container className="flex items-center gap-2">
            <span
                className="h-3 w-3 rounded-sm shrink-0"
                style={{ backgroundColor: color }}
            />
            <Text className="text-sm leading-5 font-normal text-primary">
                {label}:&nbsp;{formatCurrency(amount)}
            </Text>
        </Container>
    );
};

const PricingSection = ({
    rentAmount,
    agencyFee,
    cautionFee,
    serviceCharge,
}: {
    rentAmount?: number | null;
    agencyFee?: number | null;
    cautionFee?: number | null;
    serviceCharge?: number | null;
}) => {
    const pricingItems: PricingItem[] = [
        { label: "Rent", amount: rentAmount ?? 0, color: "#af52de" },
        { label: "Agency", amount: agencyFee ?? 0, color: "#ff2d55" },
        { label: "Caution", amount: cautionFee ?? 0, color: "#007AFF" },
        { label: "Service Charge", amount: serviceCharge ?? 0, color: "#595f85" },
    ];

    const total = pricingItems.reduce((sum, item) => sum + item.amount, 0);

    return (
        <Container className="flex flex-col items-center">
            <Container className="relative flex h-47.5 w-full items-center justify-center">
                <DonutChart
                    values={pricingItems.map((item) => item.amount)}
                    colors={pricingItems.map((item) => item.color)}
                    labels={pricingItems.map((item) => item.label)}
                />
            </Container>
            <Container className="mt-5">
                <Text tone="secondary" variant="body-xs" className="text-center">Total Amount</Text>
                <Text variant="h3" className="text-primary ">
                    {total ? formatCurrency(total) : "Not set"}
                </Text>
            </Container>

            <Container className="mt-2 w-full border-t border-line" />

            <Container className="mt-4 flex w-full flex-col items-center gap-3">
                {pricingItems.map((item) => (
                    <LegendItem
                        key={item.label}
                        color={item.color}
                        label={item.label}
                        amount={item.amount}
                    />
                ))}
            </Container>
        </Container>
    );
};

export default PricingSection;
