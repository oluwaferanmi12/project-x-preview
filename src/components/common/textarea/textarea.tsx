"use client";

import * as React from "react";
import { Text } from "../text/text";
import { Container } from "../container/container";
import { TextareaProps } from "./textarea.types";

export const Textarea = ({
  label,
  error,
  className,
  ...props
}: TextareaProps) => {
  const textareaClasses = [
    "bg-surface outline-none focus:border-p75 focus:border-2 text-primary text-sm p-3 placeholder:text-secondary border border-line rounded-xl font-sans w-full resize-none min-h-[120px]",
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
      <Container>
        <textarea className={textareaClasses} {...props} />
      </Container>
      {error && (
        <Text variant="body-sm" tone="danger">
          {error}
        </Text>
      )}
    </Container>
  );
};
