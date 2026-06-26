import { useLogout } from "@/features/auth/hooks/auth.hooks";
import { LogoutIcon } from "@repo/icons";
import { Container, Text } from "@repo/ui";
import React from "react";

export const LogoutWrapper = () => {
  const { mutate, isPending } = useLogout();
  return (
    <Container
      as="button"
      onClick={() => {
        mutate();
      }}
      disabled={isPending}
      className={`px-4 flex items-center gap-2 ${isPending && "opacity-40"}`}
    >
      <LogoutIcon className="text-d300" />
      <Text tone="danger" variant="action-label">
        Log Out
      </Text>
    </Container>
  );
};
