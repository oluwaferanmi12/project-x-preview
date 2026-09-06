import { Container, Text } from "@repo/ui";

export const FeaturePill = ({
  icon,
  label,
}: {
  icon: string;
  label: string;
}) => (
  <Container className="flex items-center gap-1 rounded-xl border border-line bg-surface px-2 py-1">
    <Container as="span" className="text-sm leading-none">
      {icon}
    </Container>
    <Text variant="body-xs" tone="primary">
      {label}
    </Text>
  </Container>
);
