"use client";
import { Container } from "../container/container";
import { Text } from "../text/text";
import { OtpFieldProps } from "./input.types";
import useOtpFieldInput from "../hooks/useOtpFieldInput";

export const OtpField = ({
  length = 6,
  label,
  error,
  name,
  value,
  defaultValue = "",
  disabled = false,
  className,
  inputClassName,
  onChange,
  onComplete,
}: OtpFieldProps) => {
  const { otpValues, handleChange, handleKeyDown, handlePaste, inputRefs } =
    useOtpFieldInput(6, defaultValue, value, onChange, onComplete);

  return (
    <Container className={["w-full", className ?? ""].join(" ").trim()}>
      {label ? (
        <Container className="mb-2">
          <Text as="label" variant="body-sm" tone="primary">
            {label}
          </Text>
        </Container>
      ) : null}
      <Container className="flex items-center gap-3 sm:gap-4">
        {otpValues.map((otpValue, index) => (
          <input
            key={index}
            ref={(element) => {
              inputRefs.current[index] = element;
            }}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            autoComplete={index === 0 ? "one-time-code" : "off"}
            enterKeyHint="done"
            maxLength={length}
            value={otpValue}
            disabled={disabled}
            aria-label={`OTP digit ${index + 1}`}
            className={[
              "w-full rounded-xl border border-line bg-surface text-center align-middle text-2xl font-sans-bold text-primary outline-none transition py-4",
              "focus:border-3 focus:border-p75",
              "disabled:cursor-not-allowed disabled:opacity-60",
              inputClassName ?? "",
            ]
              .join(" ")
              .trim()}
            onChange={(event) => handleChange(index, event.target.value)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            onFocus={(event) => event.target.select()}
            onPaste={(event) => handlePaste(event, index)}
          />
        ))}
      </Container>
      {name ? (
        <input type="hidden" name={name} value={otpValues.join("")} />
      ) : null}
      {error ? (
        <Text variant="body-sm" tone="danger" className="mt-2">
          {error}
        </Text>
      ) : null}
    </Container>
  );
};
