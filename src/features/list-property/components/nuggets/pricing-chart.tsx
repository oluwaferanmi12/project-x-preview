"use client";

import React from "react";
import { Container } from "@/components/common/container/container";
import { Text } from "@/components/common/text/text";
import DonutChart from "./donut-chart";

type PricingItem = {
    label: string;
    amount: number;
    color: string;
};

const pricingItems: PricingItem[] = [
    { label: "Rent", amount: 300000, color: "#A855F7" },
    { label: "Agency", amount: 30000, color: "#F43F5E" },
    { label: "Caution", amount: 30000, color: "#0B84FE" },
    { label: "Service Charge", amount: 50000, color: "#667085" },
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