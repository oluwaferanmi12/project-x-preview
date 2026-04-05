import { ComponentPropsWithoutRef, ReactNode } from "react";

export type SelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type SelectProps = ComponentPropsWithoutRef<"select"> & {
  label: string;
  error?: ReactNode;
  options?: SelectOption[];
  placeholder?: string;
  noBottomMargin ?: boolean
};
