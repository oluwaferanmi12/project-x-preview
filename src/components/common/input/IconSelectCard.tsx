"use client";

import { ReactNode } from "react";
import clsx from "clsx";

type IconSelectCardProps = {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
  icon?: ReactNode;
};

export function IconSelectCard({
  label,
  checked,
  onChange,
  icon,
}: IconSelectCardProps) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={clsx(
        "w-full flex items-center justify-between rounded-xl border p-4 transition",
        checked
          ? "border-purple-500 bg-purple-50"
          : "border-gray-200 bg-gray-50"
      )}
    >
      <div className="flex items-center gap-3">
        {icon && <span className="text-purple-500">{icon}</span>}
        <span className="text-sm font-medium text-gray-700">{label}</span>
      </div>

      <div
        className={clsx(
          "h-5 w-5 rounded border flex items-center justify-center",
          checked
            ? "bg-purple-500 border-purple-500"
            : "border-gray-300 bg-white"
        )}
      >
        {checked && (
          <div className="h-2 w-2 rounded-sm bg-white" />
        )}
      </div>
    </button>
  );
}