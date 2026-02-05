"use client";

import * as React from "react";
import { Container } from "../container/container";

type ButtonVariant =
  | "p300"
  | "s300"
  | "muted"
  | "transparent"
  | "transparentRed"
  | "sc300"
  | "d300"
  | "w300";

type ButtonProps<T extends React.ElementType = "button"> = {
  as?: T;
  variant?: ButtonVariant;
  shorter?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
} & React.ComponentPropsWithoutRef<T>;

const variantClass: Record<ButtonVariant, string> = {
  p300: "bg-[var(--p300)] text-[var(--inverted)] hover:bg-[var(--btn-p300-hover)]",
  s300: "bg-[var(--s300)] text-[var(--inverted)] hover:bg-[var(--btn-s300-hover)]",
  muted:
    "bg-[var(--muted)] text-[var(--primary)] hover:bg-[var(--btn-muted-hover)]",
  transparentRed:
    "bg-transparent text-[var(--s500)] hover:bg-[var(--btn-transparent-hover)]",
  transparent:
    "bg-transparent text-[var(--primary)] hover:bg-[var(--btn-transparent-hover)]",
  sc300:
    "bg-[var(--sc300)] text-[var(--inverted)] hover:bg-[var(--btn-sc300-hover)]",
  d300: "bg-[var(--d300)] text-[var(--inverted)] hover:bg-[var(--btn-d300-hover)]",
  w300: "bg-[var(--w300)] text-[var(--inverted)] hover:bg-[var(--btn-w300-hover)]",
};

const Button = <T extends React.ElementType = "button">({
  as,
  variant = "p300",
  shorter,
  leftIcon,
  rightIcon,
  className,
  fullWidth,
  ...props
}: ButtonProps<T>) => {
  const Component = as ?? "button";
  const classes = [
    `inline-flex ${fullWidth ? "w-full" : "w-auto"} items-center justify-center gap-2 rounded-lg  ${shorter ? "py-2 px-2" : "py-3 px-4"} cursor-pointer text-sm transition-colors`,
    "disabled:cursor-not-allowed disabled:opacity-60",
    "aria-disabled:cursor-not-allowed aria-disabled:opacity-60 text-action-button",
    variantClass[variant],
    className ?? "",
  ]
    .join(" ")
    .trim();
  return (
    <Component className={classes} {...props}>
      {leftIcon ? (
        <Container className="inline-flex">{leftIcon}</Container>
      ) : null}
      {props.children}
      {rightIcon ? (
        <Container className="inline-flex">{rightIcon}</Container>
      ) : null}
    </Component>
  );
};

export default Button;
export type { ButtonProps, ButtonVariant };
