"use client";

import * as React from "react";
import { Container } from "../container";
import { IconText } from "../icon-text-group";

export type MultiSelectOption = {
  label: string;
  value: string;
  icon?: string;
};

type MultiSelectProps = {
  options: MultiSelectOption[];
  value: string[];
  onChange: (values: string[]) => void;
  className?: string;
};

const isImageSource = (icon: string) => /^(https?:)?\/\//.test(icon) || icon.startsWith("/");

const OptionIcon = ({ icon, label }: { icon?: string; label: string }) => {
  const [failed, setFailed] = React.useState(false);
  if (!icon) return null;

  if (isImageSource(icon)) {
    if (failed) return null;
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={icon}
        alt={label}
        width={16}
        height={16}
        loading="lazy"
        onError={() => setFailed(true)}
        className="h-4 w-4 shrink-0 rounded-sm object-cover"
      />
    );
  }

  // Short strings are treated as emoji; anything longer is not a usable icon.
  return icon.length <= 4 ? <span aria-hidden="true">{icon}</span> : null;
};

export const MultiSelect = ({
  options,
  value,
  onChange,
  className = "",
}: MultiSelectProps) => {
  const toggleOption = (selectedValue: string) => {
    if (value.includes(selectedValue)) {
      onChange(value.filter((item) => item !== selectedValue));
    } else {
      onChange([...value, selectedValue]);
    }
  };

  return (
    <Container className={`flex flex-wrap gap-2 ${className}`.trim()}>
      {options.map((option) => {
        const isSelected = value.includes(option.value);

        return (
          <IconText
            key={option.value}
            isClickable
            isActive={isSelected}
            icon={<OptionIcon icon={option.icon} label={option.label} />}
            label={option.label}
            handleClick={() => toggleOption(option.value)}
          />
        );
      })}
    </Container>
  );
};

export type { MultiSelectProps };
