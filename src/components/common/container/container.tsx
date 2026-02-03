"use client";

import * as React from "react";

type ContainerProps<T extends React.ElementType = "div"> = {
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

export const Container = <T extends React.ElementType = "div">({
  as,
  ...props
}: ContainerProps<T>) => {
  const Component = as ?? "div";
  return <Component {...props} />;
};
