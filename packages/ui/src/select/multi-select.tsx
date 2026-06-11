"use client";

import * as React from "react";
import { Container } from "../container";
import { IconText } from "../icon-text-group";

export type MultiSelectOption = {
  label: string;
  value: string;
  icon?: React.ReactNode;
};

type MultiSelectProps = {
  options: MultiSelectOption[];
  value: string[];
  onChange: (values: string[]) => void;
  className?: string;
};

export const MultiSelect = ({
  options,
  value,
  onChange,
  className = "",
}: MultiSelectProps) => {
  const toggleOption = (selectedValue: string) => {
    if (value.includes(selectedValue)) {
      onChange(value.filter((item) => item !== selectedValue));
    } else {
      onChange([...value, selectedValue]);
    }
  };

  return (
    <Container className={`flex flex-wrap gap-2 ${className}`.trim()}>
      {options.map((option) => {
        const isSelected = value.includes(option.value);

        return (
          <IconText
            key={option.value}
            isClickable
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

export type { MultiSelectProps };