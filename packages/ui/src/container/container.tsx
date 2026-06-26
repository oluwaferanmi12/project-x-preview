"use client";

import * as React from "react";

type ContainerProps<T extends keyof React.JSX.IntrinsicElements = "div"> =
  React.ComponentPropsWithoutRef<T> & {
    as?: T;
    ref?: React.Ref<React.ElementRef<T>>;
  };

export const Container = <T extends keyof React.JSX.IntrinsicElements = "div">({
  as,
  className,
  ref,
  ...props
}: ContainerProps<T>) => {
  const Tag = (as ?? "div") as React.ElementType;
  const containerClassName = [(as ?? "div") === "div" ? "leading-none" : "", className ?? ""]
    .join(" ")
    .trim();

  return <Tag ref={ref} className={containerClassName || undefined} {...props} />;
};
