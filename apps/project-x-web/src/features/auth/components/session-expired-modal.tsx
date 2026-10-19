"use client";

import { useCallback } from "react";
import { LogoutIcon } from "@repo/icons";
import { Button, Container, Text } from "@repo/ui";
import { ModalOverlay } from "@/features/guest/components/property-details/modal-overlay";
import { useSessionExpiredStore } from "@/store/useSessionExpiredStore";

export const SessionExpiredModal = () => {
  const isOpen = useSessionExpiredStore((s) => s.isOpen);
  const hide = useSessionExpiredStore((s) => s.hide);

  const goToLogin = useCallback(() => {
    hide();
    window.location.replace("/login");
  }, [hide]);

  if (!isOpen) return null;

  return (
    <ModalOverlay
      onClose={goToLogin}
      label="Session expired"
      className="flex items-center justify-center bg-primary/60 p-4"
    >
      <Container className="flex w-full max-w-100 flex-col items-center gap-4 rounded-2xl bg-surface p-6 text-center md:p-8">
        <LogoutIcon className="text-d300" />
        <Text variant="h3" tone="primary" className="!font-bold">
          Session expired
        </Text>
        <Text variant="body-sm" tone="primary">
          For your security, you&apos;ve been logged out. Please sign in again
          to continue.
        </Text>
        <Button fullWidth onClick={goToLogin}>
          Sign In
        </Button>
      </Container>
    </ModalOverlay>
  );
};
