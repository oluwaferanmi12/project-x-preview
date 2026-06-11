"use client";

import clsx from "clsx";

type Option = {
  label: string;
  value: string;
};

type RadioCardGroupProps = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
};

export function RadioCardField({
  options,
  value,
  onChange,
}: RadioCardGroupProps) {
  return (
    <div className="flex flex-col gap-3">
      {options.map((option) => {
        const isSelected = value === option.value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={clsx(
              "flex items-center gap-3 rounded-xl border p-4 text-left transition",
              isSelected
                ? "border-purple-500 bg-purple-50"
                : "border-gray-200 bg-gray-50"
            )}
          >
            {/* Radio circle */}
            <div
              className={clsx(
                "h-5 w-5 rounded-full border flex items-center justify-center",
                isSelected
                  ? "border-purple-500"
                  : "border-gray-300"
              )}
            >
              {isSelected && (
                <div className="h-2.5 w-2.5 rounded-full bg-purple-500" />
              )}
            </div>

            {/* Label */}
            <span className="text-sm font-medium text-gray-700">
              {option.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}