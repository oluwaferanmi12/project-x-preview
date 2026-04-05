"use client";

import { Container } from "@/components/common/container/container";
import Button from "../button/button";


export type MultiSelectOption = {
    label: string;
    value: string;
    icon?: React.ReactNode;
};


interface MultiSelectProps {
    options: MultiSelectOption[];
    value: string[]; // selected values
    onChange: (values: string[]) => void;
    className?: string;
}

export const MultiSelect = ({
    options,
    value,
    onChange,
    className,
}: MultiSelectProps) => {
    const toggleOption = (val: string) => {
        if (value.includes(val)) {
            onChange(value.filter((v) => v !== val));
        } else {
            onChange([...value, val]);
        }
    };

    return (
        <Container className={`flex flex-wrap gap-2 ${className}`}>
            {options.map((option) => {
                const isSelected = value.includes(option.value);

                return (
                    <Button
                        key={option.value}
                        type="button"
                        onClick={() => toggleOption(option.value)}
                        className={`
                            flex items-center gap-2 px-3 py-2 rounded-full text-sm border
                            transition-all duration-200
                            ${isSelected
                                ? "bg-p100 text-primary border-primary"
                                : "bg-surface text-primary border-line hover:border-primary"
                            }
                            `
                        }
                        leftIcon={option.icon}
                    >
                        <span>{option.label}</span>
                    </Button>
                );
            })}
        </Container>
    );
};