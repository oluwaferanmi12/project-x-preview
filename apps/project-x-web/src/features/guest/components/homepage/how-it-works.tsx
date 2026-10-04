import { Container, Text } from "@repo/ui";
import { HOW_IT_WORKS_CARDS } from "../../guest.constants";
import { SectionTag } from "../section-tag";
import { HowItWorksCard } from "./how-it-works-card";

export const HowItWorks = () => {
  return (
    <Container className="flex flex-col items-center py-16 md:py-24">
      <SectionTag label="How It Works" />
      <Container className="mb-12 mt-4 w-full text-center md:w-[60%]">
        <Text variant="h2" tone="primary" className="text-center">
          Easier solution to getting a{" "}
          <Text as="span" variant="h2" className="text-s300">
            home
          </Text>{" "}
          or getting the right occupant for your{" "}
          <Text as="span" variant="h2" className="text-p300">
            property
          </Text>
        </Text>
      </Container>
      <Container className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        {HOW_IT_WORKS_CARDS.map((card) => (
          <HowItWorksCard key={card.key} card={card} />
        ))}
      </Container>
    </Container>
  );
};
