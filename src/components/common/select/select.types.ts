import { ComponentPropsWithoutRef, ReactNode } from "react";

export type SelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type SelectVariant = "surface" | "secondary";


export type SelectProps = ComponentPropsWithoutRef<"select"> & {
  label: string;
  error?: ReactNode;
  options?: SelectOption[];
  placeholder?: string;
  noBottomMargin ?: boolean;
  variant?: SelectVariant;
};
