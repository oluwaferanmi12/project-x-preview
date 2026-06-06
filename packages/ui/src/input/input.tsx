"use client";
import * as React from "react";
import { Text } from "../text/text";
import { Container } from "../container/container";
import { InputProps } from "./input.types";
import {
  EyeOpened,
  EyeClosed,
} from "@repo/icons";



export const Input = ({
  label,
  error,
  rightIcon,
  className,
  ...props
}: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const isPasswordField = props.type === "password";
  const hasError = Boolean(error);
  const inputType = isPasswordField
    ? isPasswordVisible
      ? "text"
      : "password"
    : props.type;
  const inputClasses = [
    "bg-surface outline-none focus:border-p75 focus:border-2 text-primary text-sm p-3 border border-line rounded-xl font-sans w-full",
    hasError ? "placeholder:text-d300" : "placeholder:text-secondary",
    rightIcon || isPasswordField ? "pr-10" : "",
    className ?? "",
  ]
    .join(" ")
    .trim();

  return (
    <Container className="w-full mb-4">
      <Container className="mb-2">
        <Text as="label" variant="body-sm" tone="primary">
          {label}
        </Text>
      </Container>
      <Container className="relative">
        <input
          aria-invalid={hasError || undefined}
          className={inputClasses}
          {...props}
          type={inputType}
        />
        {isPasswordField ? (
          <button
            type="button"
            onClick={() => setIsPasswordVisible((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary"
            aria-label={isPasswordVisible ? "Hide password" : "Show password"}
          >
            {isPasswordVisible ? <EyeClosed /> : <EyeOpened />}
          </button>
        ) : rightIcon ? (
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-secondary">
            {rightIcon}
          </span>
        ) : null}
      </Container>
      {error && (
        <Text variant="body-sm" tone="danger">
          {error}
        </Text>
      )}
    </Container>
  );
};
