"use client";

import { Button, Container, Text } from "@repo/ui";
import { ArrowRight, CardCornerShape } from "@repo/icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { HOW_IT_WORKS_CARDS } from "../../guest.constants";
import { buildCardGradient } from "../../guest.utils";

export const HowItWorksCard = ({
  card,
}: {
  card: (typeof HOW_IT_WORKS_CARDS)[number];
}) => {
  const router = useRouter();
  return (
    <Container className="relative h-[590px] w-full overflow-hidden rounded-4xl">
      <Image
        src={card.image}
        alt={card.tag}
        fill
        quality={100}
        sizes="(max-width: 768px) 100vw, 612px"
        className="object-cover"
      />
      <Container
        className="absolute inset-0"
        style={{ backgroundImage: buildCardGradient(card.gradientColor) }}
      />
      <Container
        className={`absolute left-0 top-0 flex h-[75px] items-center rounded-br-4xl px-12 ${card.tagClassName}`}
      >
        <Text variant="body-xl" tone="inverted" className="!font-medium">
          {card.tag}
        </Text>
      </Container>
      <Container className="absolute inset-x-0 bottom-0 flex flex-col gap-2 px-12 pb-[150px]">
        <Text variant="h1" tone="inverted" className="!tracking-normal">
          {card.title}
        </Text>
        <Text variant="bodyRegular" tone="inverted">
          {card.description}
        </Text>
      </Container>
      <Container className="absolute bottom-0 right-0 h-[110px] w-[146px]">
        <CardCornerShape className={`opacity-90 ${card.accentClassName}`} />
      </Container>
      <Button
        onClick={() => router.push(card.href)}
        variant="surface"
        shorter
        aria-label={card.tag}
        className="absolute bottom-6 right-12 !h-[30px] !w-[48px] !p-0"
      >
        <ArrowRight size={16} />
      </Button>
    </Container>
  );
};
