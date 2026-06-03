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

const pricingItems: PricingItem[] = [
    { label: "Rent", amount: 300000, color: "#af52de" },
    { label: "Agency", amount: 30000, color: "#ff2d55" },
    { label: "Caution", amount: 30000, color: "#007AFF" },
    { label: "Service Charge", amount: 50000, color: "#595f85" },
];

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

const PricingSection = () => {
    return (
        <Container className="flex flex-col items-center">
            <Container className="relative flex h-47.5 w-full items-center justify-center">
                <DonutChart />
            </Container>
            <Container className="mt-5">
                <Text tone="secondary" variant="body-xs" className="text-center">Total Amount</Text>
                <Text variant="h3" className="text-primary ">{formatCurrency(410000)}</Text>
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