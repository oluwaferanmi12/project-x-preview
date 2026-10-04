import { Container, Text } from "@repo/ui";

export const SectionTag = ({ label }: { label: string }) => (
  <Container className="w-fit rounded-full bg-p50 px-3 py-1">
    <Text variant="body-xs" className="text-p300">
      {label}
    </Text>
  </Container>
);
