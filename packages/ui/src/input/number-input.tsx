"use client";

import * as React from "react";
import { NumericFormat } from "react-number-format";
import { Input } from "./input";
import { InputProps } from "./input.types";

type NumberInputProps = Omit<
  InputProps,
  "value" | "defaultValue" | "onChange" | "type"
> & {
  value?: number | null;
  onValueChange: (value: number | null) => void;
  decimalScale?: number;
  allowNegative?: boolean;
};

/** Text input that formats numbers with thousand separators (1,000,000.50). */
export const NumberInput = ({
  value,
  onValueChange,
  decimalScale = 2,
  allowNegative = false,
  ...props
}: NumberInputProps) => (
  <NumericFormat
    customInput={Input}
    thousandSeparator=","
    decimalSeparator="."
    decimalScale={decimalScale}
    allowNegative={allowNegative}
    inputMode="decimal"
    value={value ?? ""}
    onValueChange={({ floatValue }) => onValueChange(floatValue ?? null)}
    {...props}
  />
);

export type { NumberInputProps };
