import { Container } from "@repo/ui";
import { SingleStarIcon, SingleOutlineStarIcon } from "@repo/icons";

type StarRatingProps = {
  rating: number;
};

export const StarRating = ({ rating }: StarRatingProps) => (
  <Container className="flex shrink-0 items-center gap-0.5">
    {Array.from({ length: 5 }, (_, index) => {
      const filled = index < rating;

      return filled ? (
        <SingleStarIcon
          key={index}
          size={14}
          className="block text-w200"
        />
      ) : (
        <SingleOutlineStarIcon
          key={index}
          size={14}
          className="block text-w200"
        />
      );
    })}
  </Container>
);