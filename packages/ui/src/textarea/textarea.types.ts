import { ComponentPropsWithoutRef, ReactNode } from "react";

export type TextareaProps = ComponentPropsWithoutRef<"textarea"> & {
  label: string;
  error?: ReactNode;
};
