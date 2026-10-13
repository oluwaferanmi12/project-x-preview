import { Container, Text } from "@repo/ui";
import Image from "next/image";

// Rendered on the fixed-dark "Where we operate" band, so colours are literal.
export const OperateCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <Container className="flex flex-1 flex-col justify-between gap-8 rounded-3xl bg-[#2a2a2a] p-6">
    <Image src={icon} alt="" width={40} height={40} quality={100} />
    <Container className="flex flex-col gap-2">
      <Text variant="action-label" className="!font-bold text-white">
        {title}
      </Text>
      <Text variant="body-xs" className="text-[#a3a3a3]">
        {description}
      </Text>
    </Container>
  </Container>
);
