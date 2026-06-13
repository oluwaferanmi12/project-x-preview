"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Text } from "@repo/ui";

export type ProfileDropdownItem = {
  key: string;
  label: string;
  icon?: React.ReactNode;
  danger?: boolean;
  onClick?: () => void;
};

type ProfileDropdownProps = {
  items: ProfileDropdownItem[];
  children: React.ReactNode;
};

export const ProfileDropdown = ({ items, children }: ProfileDropdownProps) => {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  // Close when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Container className="relative" ref={ref}>
      {/* Trigger */}
      <Container
        className="flex gap-1 items-center cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        {children}
      </Container>

      {/* Dropdown panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-52 rounded-xl bg-surface shadow-lg border border-line overflow-hidden z-50"
          >
            {items.map((item, index) => (
              <React.Fragment key={item.key}>
                {index > 0 && <div className="h-px bg-line mx-3" />}
                <button
                  onClick={() => {
                    item.onClick?.();
                    setOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-p50 ${
                    item.danger ? "text-error" : ""
                  }`}
                >
                  {item.icon && (
                    <span className="flex-shrink-0">{item.icon}</span>
                  )}
                  <Text
                    variant="body-sm"
                    tone={item.danger ? "error" : "primary"}
                  >
                    {item.label}
                  </Text>
                </button>
              </React.Fragment>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
};
