"use client";

import { Container } from "@/components/common/container/container";
import Image, { StaticImageData } from "next/image";
import { IconText } from "../icon-text-group/icon-text";


export type MultiSelectOption = {
    label: string;
    value: string;
    icon?: StaticImageData | string;
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
                    // <Container as="button" key={option.value} onClick={() => toggleOption(option.value)}
                    //     className={`border 
                    //     flex items-center gap-2 px-4 py-2 rounded-lg
                    // ${isSelected ? "bg-p100 text-primary border-primary" : "bg-surface text-primary border-line hover:border-primary"} `
                    //     }>
                    //     {option.icon && <Image src={option.icon} alt={option.label} width={16} height={16} />
                    //     }
                    //     <Container as="span">{option.label}</Container>
                    // </Container>
                    <IconText 
                        key={option.value} 
                        isClickable={true}
                        isActive={isSelected}
                        icon={option.icon} 
                        label={option.label}
                        handleClick={() => toggleOption(option.value)}
                    />

                   
                );
            })}
        </Container>
    );
};