import { ComponentTypes } from "@/types";

export const Input = ({
  label,
  error,
  ...props
}: ComponentTypes.InputProps) => {
  return (
    <div>
      <label>{label}</label>
      <input {...props} />
      {error && <span>{error}</span>}
    </div>
  );
};
