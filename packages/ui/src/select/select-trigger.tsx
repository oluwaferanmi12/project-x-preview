"use client";

import * as React from "react";
import { ChevronArrowDown } from "@repo/icons";
import { Text } from "../text/text";

type SelectTriggerProps = Omit<
  React.ComponentPropsWithRef<"button">,
  "onClick" | "children"
> & {
  /** Text shown in the field: the placeholder, or the current selection. */
  label: string;
  leftIcon?: React.ReactNode;
  /** Controlled open state. Leave undefined to let the component track it. */
  open?: boolean;
  /** Fires on every click with the new open state. Nothing opens by itself. */
  onOpenChange?: (open: boolean) => void;
};

/**
 * Looks like a select but renders no list. Clicking it flips a boolean and
 * reports it through `onOpenChange`, so the parent decides what to show
 * (a modal, a bottom sheet, a popover…).
 */
export const SelectTrigger = ({
  label,
  leftIcon,
  open,
  onOpenChange,
  className,
  type = "button",
  ...props
}: SelectTriggerProps) => {
  const [internalOpen, setInternalOpen] = React.useState(false);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;

  const handleClick = () => {
    const next = !isOpen;
    if (!isControlled) setInternalOpen(next);
    onOpenChange?.(next);
  };

  const classes = [
    "flex w-full items-center gap-3 rounded-2xl border-[0.5px] border-line bg-background px-3 py-2 text-left",
    "cursor-pointer outline-none transition-colors focus-visible:border-p75",
    "disabled:cursor-not-allowed disabled:opacity-60",
    className ?? "",
  ]
    .join(" ")
    .trim();

  return (
    <button
      type={type}
      aria-expanded={isOpen}
      className={classes}
      onClick={handleClick}
      {...props}
    >
      {leftIcon ? <span className="shrink-0">{leftIcon}</span> : null}
      <Text as="span" variant="bodyRegular" tone="primary" className="block min-w-0 flex-1 truncate">
        {label}
      </Text>
      <span
        aria-hidden="true"
        className={`shrink-0 text-secondary transition-transform ${isOpen ? "rotate-180" : ""}`}
      >
        <ChevronArrowDown />
      </span>
    </button>
  );
};

export type { SelectTriggerProps };
