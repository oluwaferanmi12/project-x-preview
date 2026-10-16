import { Container, Text } from "@repo/ui";

// The guest layout forces the light theme, so the dark variant uses fixed colours.
const toneClass = {
  light: { box: "bg-p50", text: "text-p300" },
  dark: { box: "bg-[#2f2a4e]", text: "text-[#c4c2d0]" },
};

export const SectionTag = ({
  label,
  tone = "light",
}: {
  label: string;
  tone?: keyof typeof toneClass;
}) => (
  <Container className={`w-fit rounded-full px-3 py-1 ${toneClass[tone].box}`}>
    <Text variant="body-xs" className={toneClass[tone].text}>
      {label}
    </Text>
  </Container>
);
