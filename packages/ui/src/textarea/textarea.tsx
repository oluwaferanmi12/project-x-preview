"use client";

import * as React from "react";
import { Text } from "../text/text";
import { Container } from "../container/container";
import { TextareaProps } from "./textarea.types";

export const Textarea = ({
  label,
  error,
  className,
  endAdornment,
  ...props
}: TextareaProps) => {
  const textareaClasses = [
    "min-h-[120px] w-full resize-none rounded-xl",
    "border border-line bg-surface p-3",
    "font-sans text-sm text-primary",
    "outline-none placeholder:text-secondary",
    "focus:border-2 focus:border-p75",
    endAdornment ? "pb-14" : "",
    className ?? "",
  ]
    .join(" ")
    .trim();

  return (
    <Container className="mb-4 w-full">
      {label && (
        <Container className="mb-2">
          <Text as="label" variant="body-sm" tone="primary">
            {label}
          </Text>
        </Container>
      )}

      <Container className="relative">
        <textarea className={textareaClasses} {...props} />

        {endAdornment && (
          <Container className="absolute bottom-3 right-3 flex items-center gap-2">
            {endAdornment}
          </Container>
        )}
      </Container>

      {error && (
        <Text variant="body-sm" tone="danger" className="mt-1">
          {error}
        </Text>
      )}
    </Container>
  );
};