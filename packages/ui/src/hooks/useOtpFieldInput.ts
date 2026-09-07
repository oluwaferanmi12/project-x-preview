import React from "react";

const sanitizeOtpValue = (value: string, length: number) =>
  value.replace(/\D/g, "").slice(0, length);

const toOtpArray = (value: string, length: number) => {
  const sanitizedValue = sanitizeOtpValue(value, length);
  return Array.from({ length }, (_, index) => sanitizedValue[index] ?? "");
};

const useOtpFieldInput = (
  length: number,
  defaultValue: string,
  value?: string,
  onChange?: (val: string) => void,
  onComplete?: (val: string) => void,
) => {
  const isControlled = value !== undefined;
  const [otpValues, setOtpValues] = React.useState(() =>
    toOtpArray(isControlled ? value : defaultValue, length),
  );
  const inputRefs = React.useRef<Array<HTMLInputElement | null>>([]);

  React.useEffect(() => {
    if (!isControlled) {
      return;
    }
    setOtpValues(toOtpArray(value, length));
  }, [isControlled, length, value]);

  const focusInput = (index: number) => {
    inputRefs.current[index]?.focus();
    inputRefs.current[index]?.select();
  };

  const updateOtp = (nextValues: string[]) => {
    const normalizedValues = nextValues.slice(0, length);

    while (normalizedValues.length < length) {
      normalizedValues.push("");
    }

    if (!isControlled) {
      setOtpValues(normalizedValues);
    }

    const joinedValue = normalizedValues.join("");
    onChange?.(joinedValue);

    if (joinedValue.length === length && !normalizedValues.includes("")) {
      onComplete?.(joinedValue);
    }
  };

  const fillFrom = (startIndex: number, incomingValue: string) => {
    const sanitizedValue = sanitizeOtpValue(incomingValue, length);

    if (!sanitizedValue) {
      return;
    }

    const nextValues = [...otpValues];

    for (let index = 0; index < sanitizedValue.length; index += 1) {
      const targetIndex = startIndex + index;

      if (targetIndex >= length) {
        break;
      }

      nextValues[targetIndex] = sanitizedValue[index];
    }

    updateOtp(nextValues);

    const nextFocusIndex = Math.min(
      startIndex + sanitizedValue.length,
      length - 1,
    );

    focusInput(nextFocusIndex);
  };

  const handleChange = (index: number, nextValue: string) => {
    const sanitizedValue = sanitizeOtpValue(nextValue, length);

    if (!sanitizedValue) {
      const nextValues = [...otpValues];
      nextValues[index] = "";
      updateOtp(nextValues);
      return;
    }

    if (sanitizedValue.length > 1) {
      fillFrom(index, sanitizedValue);
      return;
    }

    const nextValues = [...otpValues];
    nextValues[index] = sanitizedValue;
    updateOtp(nextValues);

    if (index < length - 1) {
      focusInput(index + 1);
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    switch (event.key) {
      case "Backspace": {
        event.preventDefault();

        if (otpValues[index]) {
          const nextValues = [...otpValues];
          nextValues[index] = "";
          updateOtp(nextValues);
          return;
        }

        if (index > 0) {
          const nextValues = [...otpValues];
          nextValues[index - 1] = "";
          updateOtp(nextValues);
          focusInput(index - 1);
        }
        return;
      }
      case "ArrowLeft":
        event.preventDefault();
        if (index > 0) {
          focusInput(index - 1);
        }
        return;
      case "ArrowRight":
        event.preventDefault();
        if (index < length - 1) {
          focusInput(index + 1);
        }
        return;
      default:
        return;
    }
  };

  const handlePaste = (
    event: React.ClipboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    event.preventDefault();
    fillFrom(index, event.clipboardData.getData("text"));
  };

  return { handlePaste, handleKeyDown, otpValues, inputRefs, handleChange };
};

export default useOtpFieldInput;
