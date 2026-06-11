"use client";

import * as React from "react";
import { RadioIcon } from "@repo/icons";

type RadioProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: React.ReactNode;
  className?: string;
  iconClassName?: string;
  labelClassName?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  value?: string;
};

export const Radio = ({
  checked,
  onChange,
  label,
  className,
  iconClassName,
  labelClassName,
  disabled,
  id,
  name,
  value,
}: RadioProps) => {
  const generatedId = React.useId();
  const radioId = id ?? generatedId;

  const rootClasses = [
    "inline-flex items-center",
    disabled ? "cursor-not-allowed" : "cursor-pointer",
    className ?? "",
  ]
    .join(" ")
    .trim();

  const iconClasses = [
    "relative block h-5 w-5 shrink-0 leading-none text-line transition-colors",
    checked ? "text-p300" : "text-line",
    disabled ? "opacity-60" : "opacity-100",
    iconClassName ?? "",
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
    <label htmlFor={radioId} className={rootClasses}>
      <input
        id={radioId}
        type="radio"
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
          iconClasses,
          "peer-focus-visible:ring-2 peer-focus-visible:ring-p75 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-surface",
        ]
          .join(" ")
          .trim()}
      >
        <RadioIcon
          aria-hidden="true"
          className={[
            "block h-5 w-5 transition-opacity",
            checked ? "opacity-100" : "opacity-100",
          ]
            .join(" ")
            .trim()}
        />
      </span>
      {label ? <span className={labelClasses}>{label}</span> : null}
    </label>
  );
};

export type { RadioProps };
