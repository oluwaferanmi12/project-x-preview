"use client";

import * as React from "react";
import { Container } from "../container/container";
import SwitchControlActive from "@/assets/svgs/switch-control-active.svg";
import SwitchControlInactive from "@/assets/svgs/switch-control-inactive.svg";

type SwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: React.ReactNode;
  className?: string;
  trackClassName?: string;
  thumbClassName?: string;
  labelClassName?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  value?: string;
};

export const Switch = ({
  checked,
  onChange,
  label,
  className,
  trackClassName,
  thumbClassName,
  labelClassName,
  disabled,
  id,
  name,
  value,
}: SwitchProps) => {
  const generatedId = React.useId();
  const switchId = id ?? generatedId;

  const rootClasses = [
    "inline-flex items-center gap-3",
    disabled ? "cursor-not-allowed" : "cursor-pointer",
    className ?? "",
  ]
    .join(" ")
    .trim();

  const trackClasses = [
    "relative block h-5 w-[38px] shrink-0 rounded-full p-[2px] transition-colors",
    checked ? "bg-p300" : "bg-muted",
    disabled ? "opacity-60" : "opacity-100",
    trackClassName ?? "",
  ]
    .join(" ")
    .trim();

  const thumbClasses = [
    "relative flex h-4 w-4 shrink-0 items-center justify-center overflow-hidden rounded-full transition-transform duration-200 ease-in-out will-change-transform",
    checked ? "translate-x-[18px] bg-inverted" : "translate-x-0 bg-tertiary",
    thumbClassName ?? "",
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
    <Container as="label" htmlFor={switchId} className={rootClasses}>
      <input
        id={switchId}
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
          trackClasses,
          "peer-focus-visible:ring-2 peer-focus-visible:ring-p75 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-surface",
        ]
          .join(" ")
          .trim()}
      >
        <span className={thumbClasses}>
          <SwitchControlInactive
            aria-hidden="true"
            className={[
              "absolute  text-inverted transition-opacity",
              checked ? "opacity-0" : "opacity-100",
            ]
              .join(" ")
              .trim()}
          />
          <SwitchControlActive
            aria-hidden="true"
            className={[
              "absolute text-p300 transition-opacity",
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

export type { SwitchProps };
