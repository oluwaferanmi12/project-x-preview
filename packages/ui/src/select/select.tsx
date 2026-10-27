"use client";

import * as React from "react";
import { ChevronArrowDown, SpinIcon } from "@repo/icons";
import { Container } from "../container/container";
import { Text } from "../text/text";
import { SelectProps, SelectVariant } from "./select.types";

const variantClass: Record<SelectVariant, string> = {
  surface: "bg-surface text-primary border border-line",
  secondary: "bg-[var(--s50)] text-[var(--s300)]",
};

const normalize = (text: string) =>
  text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim();

export const Select = ({
  label,
  hideLabel = false,
  error,
  options = [],
  placeholder,
  className,
  noBottomMargin,
  variant = "surface",
  value,
  defaultValue,
  onChange,
  name,
  disabled: disabledProp,
  loading = false,
  loadingText = "Loading...",
  searchable = false,
  searchPlaceholder = "Search...",
  id,
  "aria-label": ariaLabel,
}: SelectProps) => {
  const disabled = disabledProp || loading;
  const generatedId = React.useId();
  const triggerId = id ?? generatedId;
  const rootRef = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = React.useState(false);
  const [internalValue, setInternalValue] = React.useState(
    String(defaultValue ?? ""),
  );

  const isControlled = value !== undefined;
  const currentValue = isControlled ? String(value) : internalValue;
  const selected = options.find((option) => option.value === currentValue);
  // An option with an empty value acts as the placeholder (e.g. "Choose a state").
  const isPlaceholder = !selected || selected.value === "";
  const displayLabel = loading
    ? loadingText
    : isPlaceholder
    ? (selected?.label ?? placeholder ?? "")
    : selected.label;

  const [query, setQuery] = React.useState("");
  const deferredQuery = React.useDeferredValue(query);

  // Normalise labels once per options change, not on every keystroke.
  const indexed = React.useMemo(
    () =>
      searchable
        ? options.map((option) => ({
            option,
            key: normalize(option.label),
          }))
        : [],
    [options, searchable],
  );

  const visibleOptions = React.useMemo(() => {
    const q = normalize(deferredQuery);
    if (!searchable || !q) return options;
    const prefix: typeof options = [];
    const contains: typeof options = [];
    for (const { option, key } of indexed) {
      // The empty-value placeholder option isn't a real result.
      if (option.value === "") continue;
      if (key.startsWith(q)) prefix.push(option);
      else if (key.includes(q)) contains.push(option);
    }
    return prefix.concat(contains);
  }, [options, indexed, deferredQuery, searchable]);

  React.useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const handleSelect = (next: string) => {
    setOpen(false);
    if (next === currentValue) return;
    if (!isControlled) setInternalValue(next);
    // Keep the native <select> onChange contract so existing callers still work.
    onChange?.({
      target: { value: next, name },
      currentTarget: { value: next, name },
    } as unknown as React.ChangeEvent<HTMLSelectElement>);
  };

  const triggerClasses = [
    "flex w-full items-center justify-between gap-2 rounded-2xl p-3 text-left font-sans text-sm outline-none transition-colors",
    "focus-visible:border-2 focus-visible:border-p75",
    disabled
      ? `cursor-not-allowed ${loading ? "" : "opacity-60"}`
      : "cursor-pointer",
    variantClass[variant],
    className ?? "",
  ]
    .join(" ")
    .trim();

  const iconTone = variant === "secondary" ? "text-s300" : "text-secondary";

  return (
    <Container className={`w-full ${!noBottomMargin ? "mb-4" : ""}`}>
      <Container className={hideLabel ? "sr-only" : "mb-2"}>
        <Text as="label" variant="body-sm" tone="primary" htmlFor={triggerId}>
          {label}
        </Text>
      </Container>
      <Container ref={rootRef} className="relative">
        {name ? <input type="hidden" name={name} value={currentValue} /> : null}
        <button
          id={triggerId}
          type="button"
          role="combobox"
          aria-label={ariaLabel}
          aria-haspopup="listbox"
          aria-expanded={open}
          disabled={disabled}
          onClick={() => setOpen((prev) => !prev)}
          className={triggerClasses}
        >
          <span
            className={`truncate ${(isPlaceholder || loading) && variant === "surface" ? "text-secondary" : ""}`}
          >
            {displayLabel}
          </span>
          {loading ? (
            <span
              aria-hidden="true"
              className={`inline-flex shrink-0 animate-spin [animation-duration:1.5s] ${iconTone}`}
            >
              <SpinIcon size={16} />
            </span>
          ) : (
            <span
              aria-hidden="true"
              className={`shrink-0 transition-transform ${iconTone} ${open ? "rotate-180" : ""}`}
            >
              <ChevronArrowDown />
            </span>
          )}
        </button>
        {open ? (
          <div className="absolute left-0 top-full z-50 mt-2 min-w-full rounded-2xl border border-line bg-surface p-1 shadow-lg">
          {searchable ? (
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  const first = visibleOptions.find((o) => !o.disabled);
                  if (first && query) handleSelect(first.value);
                }
              }}
              placeholder={searchPlaceholder}
              aria-label={searchPlaceholder}
              className="mb-1 w-full rounded-lg border border-line bg-surface px-3 py-2 font-sans text-sm text-primary outline-none focus:border-p75"
            />
          ) : null}
          <ul
            role="listbox"
            className="scrollbar-hide max-h-60 overflow-y-auto"
          >
            {searchable && visibleOptions.length === 0 ? (
              <li className="px-3 py-2 font-sans text-sm text-secondary">
                No results found
              </li>
            ) : null}
            {visibleOptions.map((option) => {
              const isSelected = option.value === currentValue;
              return (
                <li
                  key={option.value}
                  role="option"
                  aria-selected={isSelected}
                  aria-disabled={option.disabled}
                  onClick={() => !option.disabled && handleSelect(option.value)}
                  className={[
                    "cursor-pointer whitespace-nowrap rounded-lg px-3 py-2 font-sans text-sm transition-colors",
                    isSelected
                      ? "bg-muted text-primary"
                      : "text-primary hover:bg-muted",
                    option.disabled ? "cursor-not-allowed opacity-50" : "",
                  ]
                    .join(" ")
                    .trim()}
                >
                  {option.label}
                </li>
              );
            })}
          </ul>
          </div>
        ) : null}
      </Container>
      {error && (
        <Text variant="body-sm" tone="danger">
          {error}
        </Text>
      )}
    </Container>
  );
};
