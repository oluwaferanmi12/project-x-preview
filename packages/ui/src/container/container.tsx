"use client";

import * as React from "react";

type ContainerProps = React.HTMLAttributes<HTMLElement> & {
  as?: keyof JSX.IntrinsicElements;
};

export const Container = ({ as: Tag = "div", className, ...props }: ContainerProps) => {
  const containerClassName = [Tag === "div" ? "leading-none" : "", className ?? ""]
    .join(" ")
    .trim();

  return <Tag className={containerClassName || undefined} {...props} />;
};
