"use client";

import * as React from "react";
import ChevronDownIcon from "@/assets/svgs/chevron-arrow-down.svg";
import { Container } from "../container/container";
import { Text } from "../text/text";
import { SelectProps } from "./select.types";

export const Select = ({
  label,
  error,
  options,
  placeholder,
  className,
  children,
  noBottomMargin,
  ...props
}: SelectProps) => {
  const selectClasses = [
    "bg-surface outline-none focus:border-p75 focus:border-2 text-primary text-sm p-3 placeholder:text-secondary border border-line rounded-xl font-sans w-full appearance-none pr-10",
    className ?? "",
  ]
    .join(" ")
    .trim();

  return (
    <Container className={`w-full ${!noBottomMargin && "mb-4"}`}>
      <Container className="mb-2">
        <Text as="label" variant="body-sm" tone="primary">
          {label}
        </Text>
      </Container>
      <Container className="relative">
        <select className={selectClasses} {...props}>
          {placeholder ? (
            <option value="" disabled>
              {placeholder}
            </option>
          ) : null}
          {options?.length ? (
            options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))
          ) : (
            children
          )}
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-secondary">
          <ChevronDownIcon aria-hidden="true" />
        </span>
      </Container>
      {error && (
        <Text variant="body-sm" tone="danger">
          {error}
        </Text>
      )}
    </Container>
  );
};
