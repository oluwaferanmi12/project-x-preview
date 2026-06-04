"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  useToastStore,
  type Toast,
  type ToastVariant,
} from "@/store/useToastStore";
import DangerIcon from "@/assets/svgs/danger.svg";
import WarningIcon from "@/assets/svgs/warning.svg";
import InfoIcon from "@/assets/svgs/info.svg";
import SuccessIcon from "@/assets/svgs/success.svg";
import CloseIcon from "@/assets/svgs/close.svg";
import { Container } from "../container/container";
import { Text } from "../text/text";

const variantConfig: Record<
  ToastVariant,
  { bg: string; icon: React.ReactNode }
> = {
  success: {
    bg: "bg-sc400",
    icon: <SuccessIcon className="w-4 h-4 shrink-0 text-inverted" />,
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
    icon: <InfoIcon className="w-4 h-4 shrink-0 text-inverted" />,
  },
};

function ToastItem({ toast }: { toast: Toast }) {
  const dismiss = useToastStore((s) => s.dismiss);
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
      {/* icon */}
      <Container as={"div"} className="shrink-0">
        {icon}
      </Container>

      {/* text */}
      <Container as="div" className="flex-1 min-w-0">
        <Text variant="h5" tone="inverted">
          {toast.title}
        </Text>
        <Text variant="body-sm" tone="inverted">
          {toast.description}
        </Text>
      </Container>

      {/* divider */}
      <Container className="w-px self-stretch bg-white/30 mx-1 shrink-0" />

      {/* close */}
      <Container
        as="button"
        onClick={() => dismiss(toast.id)}
        className="shrink-0 text-inverted/80 hover:text-inverted transition-colors cursor-pointer"
        aria-label="Dismiss"
      >
        <CloseIcon className="w-[12.5px] h-[12.5px] text-inverted" />
      </Container>
    </motion.div>
  );
}

export function Toast() {
  const toasts = useToastStore((s) => s.toasts);

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
