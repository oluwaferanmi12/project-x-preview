import { useAuthStore } from "@/store/useAuthStore";
import { Container, Text } from "@repo/ui";
import { getInitials } from "@repo/utils";
import { SwitchIcon } from "@repo/icons";
import React from "react";

export const ProfileSwitchWrapper = () => {
  const { user } = useAuthStore();
  return (
    <Container className="rounded-2xl bg-s50 p-2 flex items-center gap-2.5 min-w-0">
      <Container className="bg-p50 border border-p75 rounded-xl h-10 w-10 shrink-0 flex items-center justify-center">
        <Text variant="h4" tone="p300">
          {user && getInitials(user.firstName, user.lastName)}
        </Text>
      </Container>
      <Container className="flex items-center gap-2 min-w-0 flex-1">
        <Container className="flex items-start flex-col justify-center min-w-0 flex-1 overflow-hidden">
          <Text variant="h5" className="text-primary truncate w-full">
            {user?.firstName + " " + user?.lastName}
          </Text>
          <Text variant="body-sm" className="truncate w-full text-s200">
            Switch Profile
          </Text>
        </Container>
        <SwitchIcon  className="shrink-0 text-s300" />
      </Container>
    </Container>
  );
};
