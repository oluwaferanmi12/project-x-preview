"use client";

import * as React from "react";

type ContainerProps<T extends React.ElementType = "div"> = {
  as?: T;
} & React.ComponentPropsWithRef<T>;

export const Container = <T extends React.ElementType = "div">({
  as,
  className,
  ...props
}: ContainerProps<T>) => {
  const Component = as ?? "div";
  const containerClassName = [
    Component === "div" ? "leading-none" : "",
    className ?? "",
  ]
    .join(" ")
    .trim();

  return <Component className={containerClassName || undefined} {...props} />;
};
