import { CheckIcon } from "@repo/icons";
import { Container, Text } from "@repo/ui";

export const PasswordRequirement = ({
  active,
  value,
}: {
  active: boolean;
  value: string;
}) => {
  return (
    <Container
      className={`${active ? "bg-s50 border-s75" : "border-line"} px-3 py-2 rounded-xl border  flex items-center gap-2`}
    >
      <Text
        className={active ? `text-s300` : "text-secondary"}
        variant="body-xs"
      >
        {value}
      </Text>
      <CheckIcon className={active ? `text-s300` : "text-secondary"} />
    </Container>
  );
};
