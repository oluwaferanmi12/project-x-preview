import  { ComponentPropsWithoutRef } from "react";

export type InputProps = ComponentPropsWithoutRef<"input"> & {
  label: string;
  error: string;
};
