import { Container, Text } from "@repo/ui";
import type { ReactNode } from "react";

export function InfoItem({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <Container>
      <Text
        as="dt"
        variant="body-xs"
        tone="secondary"
        className="mb-[5px] text-[10px]"
      >
        {label}
      </Text>
      <Text
        as="dd"
        variant="body-xs"
        className="m-0 min-h-[17px] [overflow-wrap:anywhere]"
      >
        {children}
      </Text>
    </Container>
  );
}
