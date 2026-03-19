import { ComponentPropsWithoutRef, ReactNode } from "react";

export type InputProps = ComponentPropsWithoutRef<"input"> & {
  label: string;
  error?: ReactNode;
  rightIcon?: ReactNode;
  passwordToggle?: boolean;
  showPasswordIcon?: ReactNode;
  hidePasswordIcon?: ReactNode;
};

export type MultiStepOptionsProps = {
  num: number;
  title: string;
  subtitle: string;
}
