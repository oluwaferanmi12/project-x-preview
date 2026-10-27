"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "../container";

type PopoverProps = {
  open: boolean;
  /** Fires with the next open state: on trigger click, outside click and Escape. */
  onOpenChange: (open: boolean) => void;
  /** The element the panel sits under, e.g. a SelectTrigger. */
  trigger: ReactNode;
  children: ReactNode;
  /** Line the panel up with the trigger's left ("start") or right ("end") edge. */
  align?: "start" | "end";
  /** Animation duration in seconds */
  duration?: number;
  closeOnOutsideClick?: boolean;
  closeOnEscape?: boolean;
  className?: string;
  panelClassName?: string;
};

/**
 * Anchors a panel directly under its trigger. It only handles placement,
 * opening/closing and the enter/exit animation; the panel's look comes from
 * the children.
 */
export const Popover = ({
  open,
  onOpenChange,
  trigger,
  children,
  align = "start",
  duration = 0.2,
  closeOnOutsideClick = true,
  closeOnEscape = true,
  className = "",
  panelClassName = "",
}: PopoverProps) => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (closeOnOutsideClick && !rootRef.current?.contains(event.target as Node)) {
        onOpenChange(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (closeOnEscape && event.key === "Escape") onOpenChange(false);
    };
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, closeOnOutsideClick, closeOnEscape, onOpenChange]);

  return (
    <Container ref={rootRef} className={`relative w-full ${className}`.trim()}>
      <Container onClick={() => onOpenChange(!open)}>{trigger}</Container>

      <AnimatePresence>
        {open && (
          <motion.div
            key="popover-panel"
            role="dialog"
            className={`absolute top-full  w-full z-50 mt-3 ${align === "end" ? "right-0" : "left-0"} ${panelClassName}`.trim()}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
};

export type { PopoverProps };
