import { Container, Text } from "@repo/ui";
import { SingleStarIcon } from "@repo/icons";

type RatingPillProps = {
  value: number;
};

export const RatingPill = ({ value }: RatingPillProps) => (
  <Container className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-w75 bg-w50 py-1 px-2 ">
      <SingleStarIcon className="text-w200" size={14} />
      <Text
        variant="body-xs"
        tone="primary"
        className="leading-none"
      >
        {value.toFixed(1)}/5.0                
      </Text>
  </Container>
);
