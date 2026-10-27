"use client";

import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, type TargetAndTransition } from "framer-motion";

export type ModalAnimation =
  | "fade"
  | "scale"
  | "slide-up"
  | "slide-down"
  | "slide-left"
  | "slide-right";

// Hidden state for each animation; the visible state is always the resting position
const hiddenStates: Record<ModalAnimation, TargetAndTransition> = {
  fade: { opacity: 0 },
  scale: { opacity: 0, scale: 0.95 },
  "slide-up": { opacity: 0, y: 40 },
  "slide-down": { opacity: 0, y: -40 },
  "slide-left": { opacity: 0, x: 40 },
  "slide-right": { opacity: 0, x: -40 },
};

const visibleState: TargetAndTransition = { opacity: 1, scale: 1, x: 0, y: 0 };

type ModalProps = {
  isOpen: boolean;
  children: ReactNode;
  onClose?: () => void;
  /** How the content comes onto the screen */
  enterAnimation?: ModalAnimation;
  /** How the content leaves the screen */
  exitAnimation?: ModalAnimation;
  /** Animation duration in seconds */
  duration?: number;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
  /** Called once the exit animation has finished */
  onExitComplete?: () => void;
  className?: string;
  overlayClassName?: string;
};

export const Modal = ({
  isOpen,
  children,
  onClose,
  enterAnimation = "scale",
  exitAnimation = enterAnimation,
  duration = 0.25,
  closeOnBackdropClick = true,
  closeOnEscape = true,
  onExitComplete,
  className = "",
  overlayClassName = "bg-primary/60",
}: ModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (closeOnEscape && event.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeOnEscape, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence onExitComplete={onExitComplete}>
      {isOpen && (
        <motion.div
          key="modal-overlay"
          className={`fixed inset-0 z-50 flex items-center justify-center px-4 ${overlayClassName}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration, ease: "easeOut" }}
          onClick={(event) => {
            if (closeOnBackdropClick && event.target === event.currentTarget) onClose?.();
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            className={className}
            initial={hiddenStates[enterAnimation]}
            animate={visibleState}
            exit={hiddenStates[exitAnimation]}
            transition={{ duration, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};
