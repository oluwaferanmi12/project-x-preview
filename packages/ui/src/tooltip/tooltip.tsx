"use client";

import * as React from "react";
import { Container } from "../container/container";
import { Text } from "../text/text";

type TooltipProps = {
  trigger: React.ReactNode;
  content: React.ReactNode;
  title?: React.ReactNode;
  className?: string;
  triggerClassName?: string;
  tooltipClassName?: string;
  contentClassName?: string;
  placement?: "top" | "bottom" | "left" | "right";
  openOnHover?: boolean;
};

const placementClass: Record<NonNullable<TooltipProps["placement"]>, string> = {
  top: "bottom-full left-1/2 mb-3 -translate-x-1/2",
  bottom: "top-full left-1/2 mt-3 -translate-x-1/2",
  left: "right-full top-1/2 mr-3 -translate-y-1/2",
  right: "left-full top-1/2 ml-3 -translate-y-1/2",
};

export const Tooltip = ({
  trigger,
  content,
  title = "tooltip",
  className,
  triggerClassName,
  tooltipClassName,
  contentClassName,
  placement = "top",
  openOnHover = true,
}: TooltipProps) => {
  const triggerClasses = [
    "inline-flex items-center",
    triggerClassName ?? "",
  ]
    .join(" ")
    .trim();

  const tooltipClasses = [
    "absolute z-50 w-[320px] overflow-hidden rounded-[28px] bg-surface shadow-[0_14px_40px_rgba(17,17,17,0.12)] ring-1 ring-black/5",
    placementClass[placement],
    openOnHover
      ? "pointer-events-none opacity-0 transition-all duration-200 ease-out group-hover:opacity-100 group-focus-within:opacity-100"
      : "opacity-100",
    tooltipClassName ?? "",
  ]
    .join(" ")
    .trim();

  const headerClasses = [
    "relative flex h-[103px] items-center justify-center overflow-hidden bg-[#FFF5F5]",
  ]
    .join(" ")
    .trim();

  return (
    <Container className={["group relative inline-flex", className ?? ""].join(" ").trim()}>
      <span className={triggerClasses}>{trigger}</span>
      <Container className={tooltipClasses}>
        <Container className={headerClasses}>
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-90"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(239, 180, 180, 0.55) 0 2px, transparent 2px), radial-gradient(circle at 80% 40%, rgba(239, 180, 180, 0.45) 0 2px, transparent 2px), linear-gradient(135deg, transparent 0 24%, rgba(239, 180, 180, 0.35) 24% 26%, transparent 26% 48%, rgba(239, 180, 180, 0.35) 48% 50%, transparent 50% 72%, rgba(239, 180, 180, 0.35) 72% 74%, transparent 74% 100%)",
              backgroundSize: "100% 100%",
            }}
          />
          <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-p300 text-inverted">
            <Text as="span" variant="action-label" className="text-[18px] leading-none">
              i
            </Text>
          </div>
        </Container>
        <Container className={["px-5 py-6", contentClassName ?? ""].join(" ").trim()}>
          {typeof title === "string" ? (
            <Text as="p" variant="body-sm" className="mb-3 text-secondary">
              {title}
            </Text>
          ) : (
            <div className="mb-3">{title}</div>
          )}
          <div className="space-y-1 text-body-sm text-primary">{content}</div>
        </Container>
      </Container>
    </Container>
  );
};

export type { TooltipProps };
