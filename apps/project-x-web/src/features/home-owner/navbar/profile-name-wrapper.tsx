import { useAuthStore } from "@/store/useAuthStore";
import { Container, Text } from "@repo/ui";
import { getInitials } from "@repo/utils";
import React from "react";

export const ProfileNameWrapper = () => {
  const { user } = useAuthStore();
  return (
    <Container className="rounded-2xl bg-inverted p-2 flex items-center gap-2.5 min-w-0">
      <Container className="bg-p200 rounded-xl h-10 w-10 shrink-0 flex items-center justify-center">
        <Text variant="h4" tone="inverted">
          {user && getInitials(user.firstName, user.lastName)}
        </Text>
      </Container>
      <Container className="flex items-start flex-col justify-center min-w-0 overflow-hidden">
        <Text variant="h5" className="text-primary truncate w-full">
          {user?.firstName + " " + user?.lastName}
        </Text>
        <Text tone="secondary" variant="body-sm" className="truncate w-full">
          Agent
        </Text>
      </Container>
    </Container>
  );
};
