"use client";

import { useEffect, type ReactNode } from "react";
import { Container } from "@repo/ui";

export const ModalOverlay = ({
  onClose,
  className = "",
  children,
  label,
}: {
  onClose: () => void;
  className?: string;
  children: ReactNode;
  label: string;
}) => {
  useEffect(() => {
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <Container
      role="dialog"
      aria-modal="true"
      aria-label={label}
      className={`fixed inset-0 z-[100] ${className}`}
    >
      {children}
    </Container>
  );
};
