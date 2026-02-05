"use client";
import { ComponentTypes } from "@/types";
import * as React from "react";
import { Text } from "../text/text";
import { Container } from "../container/container";

export const Input = ({
  label,
  error,
  rightIcon,
  passwordToggle,
  showPasswordIcon,
  hidePasswordIcon,
  className,
  ...props
}: ComponentTypes.InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const isPasswordField = Boolean(passwordToggle || props.type === "password");
  const inputType = isPasswordField
    ? isPasswordVisible
      ? "text"
      : "password"
    : props.type;
  const inputClasses = [
    "bg-surface outline-none focus:border-p75 focus:border-2 text-primary text-sm p-3 placeholder:text-secondary border border-line rounded-xl font-sans w-full",
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
        <input className={inputClasses} {...props} type={inputType} />
        {isPasswordField ? (
          <button
            type="button"
            onClick={() => setIsPasswordVisible((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary"
            aria-label={isPasswordVisible ? "Hide password" : "Show password"}
          >
            {isPasswordVisible
              ? (hidePasswordIcon ?? "Hide")
              : (showPasswordIcon ?? "Show")}
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
