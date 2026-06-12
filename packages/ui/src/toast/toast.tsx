"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, WhiteInfo, Close } from "@repo/icons";
import { Container } from "../container/container";
import { Text } from "../text/text";
import { useToast, type Toast, type ToastVariant } from "./toast.context";

// Inline icons for variants not yet in @repo/icons
const DangerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 17 17"
    {...props}
  >
    <path
      fill="currentColor"
      d="M8.5 1a7.5 7.5 0 1 0 0 15A7.5 7.5 0 0 0 8.5 1m0 11.25a.937.937 0 1 1 0-1.875.937.937 0 0 1 0 1.875m.625-3.75a.625.625 0 0 1-1.25 0V5.5a.625.625 0 0 1 1.25 0z"
    />
  </svg>
);

const WarningIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 17 17"
    {...props}
  >
    <path
      fill="currentColor"
      d="M15.93 13.375 9.555 2.25a1.25 1.25 0 0 0-2.11 0L1.07 13.375A1.25 1.25 0 0 0 2.125 15.25h12.75a1.25 1.25 0 0 0 1.055-1.875M8.5 13.125a.937.937 0 1 1 0-1.875.937.937 0 0 1 0 1.875m.625-3.75a.625.625 0 0 1-1.25 0V7a.625.625 0 0 1 1.25 0z"
    />
  </svg>
);

const variantConfig: Record<ToastVariant, { bg: string; icon: React.ReactNode }> = {
  success: {
    bg: "bg-sc400",
    icon: <Check className="w-4 h-4 shrink-0 text-inverted" />,
  },
  warning: {
    bg: "bg-w400",
    icon: <WarningIcon className="w-4 h-4 shrink-0 text-inverted" />,
  },
  error: {
    bg: "bg-d400",
    icon: <DangerIcon className="w-4 h-4 shrink-0 text-inverted" />,
  },
  info: {
    bg: "bg-i400",
    icon: <WhiteInfo className="w-4 h-4 shrink-0 text-inverted" />,
  },
};

function ToastItem({ toast }: { toast: Toast }) {
  const { dismiss } = useToast();
  const { bg, icon } = variantConfig[toast.variant];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -12, scale: 0.95 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`flex gap-2 w-89.5 min-h-14.75 rounded-xl p-2 ${bg}`}
    >
      <Container as="div" className="shrink-0">
        {icon}
      </Container>

      <Container as="div" className="flex-1 min-w-0">
        <Text variant="h5" tone="inverted">
          {toast.title}
        </Text>
        <Text variant="body-sm" tone="inverted">
          {toast.description}
        </Text>
      </Container>

      <Container className="w-px self-stretch bg-white/30 mx-1 shrink-0" />

      <Container
        as="button"
        onClick={() => dismiss(toast.id)}
        className="shrink-0 text-inverted/80 hover:text-inverted transition-colors cursor-pointer"
        aria-label="Dismiss"
      >
        <Close className="w-[12.5px] h-[12.5px] text-inverted" />
      </Container>
    </motion.div>
  );
}

export function Toaster() {
  const { toasts } = useToast();

  return (
    <div
      aria-live="polite"
      className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 items-end"
    >
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} />
        ))}
      </AnimatePresence>
    </div>
  );
}
