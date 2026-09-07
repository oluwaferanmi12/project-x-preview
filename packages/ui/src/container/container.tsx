"use client";

import * as React from "react";

type ContainerProps<T extends React.ElementType = "div"> =
  React.ComponentPropsWithoutRef<T> & {
    as?: T;
    ref?: T extends keyof React.JSX.IntrinsicElements
      ? React.Ref<React.ElementRef<T>>
      : React.Ref<unknown>;
  };

export const Container = <T extends React.ElementType = "div">({
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
