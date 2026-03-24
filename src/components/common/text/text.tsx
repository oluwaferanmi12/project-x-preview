"use client";

import * as React from "react";

type TextVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "body-lg"
  | "body-md"
  | "body-sm"
  | "body-xs"
  | "action-button"
  | "action-label";

type TextTone =
  | "primary"
  | "secondary"
  | "tertiary"
  | "danger"
  | "success"
  | "warning"
  | "info"
  | "s500"
  | 'p300'

type TextProps<T extends React.ElementType = "p"> = {
  as?: T;
  variant?: TextVariant;
  tone?: TextTone;
} & React.ComponentPropsWithoutRef<T>;

const variantClass: Record<TextVariant, string> = {
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
  h4: "text-h4",
  h5: "text-h5",
  "body-lg": "text-body-lg",
  "body-md": "text-body-md",
  "body-sm": "text-body-sm",
  "body-xs": "text-body-xs",
  "action-button": "text-action-button",
  "action-label": "text-action-label",
};

// update the Text component as time goes on , but this would be the initial configurations

const toneClass: Record<TextTone, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
  danger: "text-d300",
  success: "text-sc300",
  warning: "text-w300",
  info: "text-i300",
  s500: "text-s500",
  p300: "text-p300"
};

export const Text = <T extends React.ElementType = "p">({
  as,
  variant = "body-md",
  tone = "primary",
  className,
  ...props
}: TextProps<T>) => {
  const Component = as ?? "p";
  const classes = [variantClass[variant], toneClass[tone], className ?? ""]
    .join(" ")
    .trim();
  return <Component className={classes} {...props} />;
};


export type { TextProps, TextVariant, TextTone };
