import { Container, Text } from "@repo/ui";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Dashboard" };

export default function DashboardPage() {
  return (
    <Container className="min-h-[90vh] pb-10">
      <Text variant="h3" tone="primary">
        Dashboard
      </Text>
    </Container>
  );
}
