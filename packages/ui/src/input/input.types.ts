import { ComponentPropsWithoutRef, ReactNode } from "react";

export type InputProps = ComponentPropsWithoutRef<"input"> & {
  label: string;
  error?: ReactNode;
  rightIcon?: ReactNode;
};

export type OtpFieldProps = {
  length?: number;
  label?: string;
  error?: ReactNode;
  name?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  className?: string;
  inputClassName?: string;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
};
