"use client";

import * as React from "react";
import { Container } from "../container/container";
// import LoaderIcon from "@/assets/svgs/spin-icon.svg";
import { SpinIcon } from "@repo/icons";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "muted"
  | "transparent"
  | "success"
  | "danger"
  | "warning"
  | "disabled"
  | "disabledTransparent"
  | "surface";

type ButtonProps<T extends React.ElementType = "button"> = {
  as?: T;
  variant?: ButtonVariant;
  shorter?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
} & React.ComponentPropsWithoutRef<T>;

const variantClass: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--p300)] text-[var(--inverted)] hover:bg-[var(--btn-p300-hover)]",
  secondary:
    "bg-[var(--s300)] text-[var(--inverted)] hover:bg-[var(--btn-s300-hover)]",
  muted:
    "bg-[var(--muted)] text-[var(--primary)] hover:bg-[var(--btn-muted-hover)]",
  transparent:
    "bg-transparent text-[var(--s500)] hover:bg-[var(--btn-transparent-hover)]",
  disabled: "text-secondary bg-p50",
  disabledTransparent: "bg-transparent text-secondary",
  success:
    "bg-[var(--sc300)] text-[var(--inverted)] hover:bg-[var(--btn-sc300-hover)]",
  danger:
    "bg-[var(--d300)] text-[var(--inverted)] hover:bg-[var(--btn-d300-hover)]",
  warning:
    "bg-[var(--w300)] text-[var(--inverted)] hover:bg-[var(--btn-w300-hover)]",
  surface:
    "bg-[var(--surface)] text-[var(--primary)] hover:bg-[var(--btn-transparent-hover)]",
};

const Button = <T extends React.ElementType = "button">({
  as,
  variant = "primary",
  shorter,
  leftIcon,
  rightIcon,
  className,
  fullWidth,
  loading,
  ...props
}: ButtonProps<T>) => {
  const Component = as ?? "button";
  const classes = [
    `inline-flex ${fullWidth ? "w-full" : "w-auto"} items-center justify-center gap-2 rounded-lg  ${shorter ? "py-2 px-2" : "py-3 px-4"} cursor-pointer text-sm transition-colors`,
    "disabled:cursor-not-allowed ",
    "aria-disabled:cursor-not-allowed text-action-button",
    variantClass[variant],
    className ?? "",
  ]
    .join(" ")
    .trim();
  return (
    <Component
      disabled={
        loading || variant === "disabled" || variant === "disabledTransparent"
      }
      className={classes}
      {...props}
    >
      {leftIcon && !loading ? (
        <Container className="inline-flex">{leftIcon}</Container>
      ) : null}
      {props.children}
      {rightIcon && !loading ? (
        <Container className="inline-flex">{rightIcon}</Container>
      ) : null}
      {loading && (
        <Container className="inline-flex animate-spin [animation-duration:1.5s]">
          <SpinIcon aria-hidden="true" />
        </Container>
      )}
    </Component>
  );
};

export default Button;
export type { ButtonProps, ButtonVariant };
