"use client";

import * as React from "react";
import { CheckIcon } from "@repo/icons";
import { Container } from "../container/container";

type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: React.ReactNode;
  className?: string;
  boxClassName?: string;
  labelClassName?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  value?: string;
};

export const Checkbox = ({
  checked,
  onChange,
  label,
  className,
  boxClassName,
  labelClassName,
  disabled,
  id,
  name,
  value,
}: CheckboxProps) => {
  const generatedId = React.useId();
  const checkboxId = id ?? generatedId;

  const rootClasses = [
    "inline-flex items-center",
    disabled ? "cursor-not-allowed" : "cursor-pointer",
    className ?? "",
  ]
    .join(" ")
    .trim();

  const boxClasses = [
    "relative block h-5 w-5 shrink-0 box-border overflow-hidden rounded-sm border border-line leading-none transition-colors",
    checked ? "bg-p300 text-inverted" : "bg-transparent",
    disabled ? "opacity-60" : "opacity-100",
    boxClassName ?? "",
  ]
    .join(" ")
    .trim();

  const labelClasses = [
    "text-body-sm text-primary",
    disabled ? "opacity-60" : "",
    labelClassName ?? "",
  ]
    .join(" ")
    .trim();

  return (
    <Container as="label" htmlFor={checkboxId} className={rootClasses}>
      <input
        id={checkboxId}
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        disabled={disabled}
        name={name}
        value={value}
        className="peer sr-only"
      />
      <span
        aria-hidden="true"
        className={[
          boxClasses,
          "peer-focus-visible:ring-2 peer-focus-visible:ring-p75 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-surface",
        ]
          .join(" ")
          .trim()}
      >
        <span className="absolute inset-0 grid place-items-center leading-none">
          <CheckIcon
            aria-hidden="true"
            className={[
              "block h-3 w-3 shrink-0 text-inverted transition-opacity",
              checked ? "opacity-100" : "opacity-0",
            ]
              .join(" ")
              .trim()}
          />
        </span>
      </span>
      {label ? <span className={labelClasses}>{label}</span> : null}
    </Container>
  );
};

export type { CheckboxProps };
