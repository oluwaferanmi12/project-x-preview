import { Container, Text } from "@repo/ui";
import React from "react";

export const HomePill = ({
  text,
  purpleVariant,
}: {
  text: string;
  purpleVariant?: boolean;
}) => {
  return (
    <Container className="flex">
      <Container className={`bg-purple-fore px-2 py-0.5 rounded-3xl`}>
        {/* In the purple variant the tokens are pinned to their dark-mode values
            from colors.css, in any theme: purple-back (#bf75e5) on the pill
            background and purple-fore (#341943) on the text. */}
        <Text className={`text-purple-back`} variant="body-xs">
          {text}
        </Text>
      </Container>
    </Container>
  );
};
