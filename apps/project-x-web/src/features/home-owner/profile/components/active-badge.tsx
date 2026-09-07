import { Check } from "@repo/icons";
import { Container, Text } from "@repo/ui";

export function ActiveBadge() {
  return (
    <Container
      as="span"
      className="z-1 inline-flex items-center gap-1.5 rounded-full bg-sc300 py-[3px] pr-2.5 pl-[3px] whitespace-nowrap"
    >
      <Container
        as="span"
        aria-hidden="true"
        className="grid size-5 shrink-0 place-items-center rounded-full bg-surface text-sc300"
      >
        <Check size={12} />
      </Container>
      <Text as="span" variant="body-sm" tone="inverted">
        Active
      </Text>
    </Container>
  );
}
