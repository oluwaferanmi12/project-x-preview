import { Container, Text } from "@repo/ui";
import Image from "next/image";
import firstIntext from "../../../../../public/joseph-prospere.jpg";
import secondInText from "../../../../../public/joseph-prospere.jpg";

export const HowItWorksText = () => {
  return (
    <Container className="pt-28 pb-32">
      <Container className="w-1/2 mx-auto">
        <Text variant="h2" tone="primary">
          Whether you’re searching for your next home{" "}
          <Image
            className="inline-block align-middle rounded-lg rotate-[-9deg]"
            width={42}
            height={42}
            alt=""
            src={firstIntext}
          />{" "}
          or listing a property{" "}
          <Image
            className="inline-block align-middle rounded-lg rotate-[-9deg]"
            width={42}
            height={42}
            alt=""
            src={secondInText}
          />{" "}
          , we make it easier to discover properties, connect with the right
          people, and move forward with confidence.
        </Text>
      </Container>
    </Container>
  );
};
