"use client";

import { Button, Container, Text } from "@repo/ui";
import { ChevronArrowDown } from "@repo/icons";
import { ReactNode, useEffect, useRef } from "react";

export const FilterDropdown = ({
  icon,
  label,
  isOpen,
  onToggle,
  onClose,
  panelClassName = "w-[300px]",
  children,
}: {
  icon: ReactNode;
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  panelClassName?: string;
  children: ReactNode;
}) => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) onClose();
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <Container ref={rootRef} className="relative flex-1 min-w-0">
      <Button
        variant="muted"
        fullWidth
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onClick={onToggle}
        leftIcon={<Container as="span" className="text-s300">{icon}</Container>}
        rightIcon={
          <Container
            as="span"
            className={`text-secondary transition-transform ${isOpen ? "rotate-180" : ""}`}
          >
            <ChevronArrowDown />
          </Container>
        }
        className="justify-between !gap-2 text-left"
      >
        <Text as="span" variant="body-sm" tone="secondary" className="flex-1 truncate">
          {label}
        </Text>
      </Button>
      {isOpen ? (
        <Container
          role="dialog"
          className={`absolute left-0 top-full z-50 mt-3 max-w-[90vw] rounded-xl border border-line bg-surface p-4 shadow-lg ${panelClassName}`}
        >
          {children}
        </Container>
      ) : null}
    </Container>
  );
};
