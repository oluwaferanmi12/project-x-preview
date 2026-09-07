import Image from "next/image";
import { ArrowRight } from "@repo/icons";
import { Button, Container, Text } from "@repo/ui";
import type { ReviewedProperty } from "../data/reviews.mock";
import { RatingPill } from "./rating-pill";

type PropertyReviewCardProps = {
  property: ReviewedProperty;
  onView: () => void;
};

export const PropertyReviewCard = ({
  property,
  onView,
}: PropertyReviewCardProps) => (
  <Container
    className="grid min-h-21 grid-cols-[80px_minmax(0,1fr)] md:grid-cols-[120px_minmax(0,1fr)] overflow-hidden rounded-lg border border-line bg-surface transition hover:border-s500"
  >
    <Container className="relative h-full min-h-21 overflow-hidden bg-muted">
      <Image
        src={property.image}
        alt={property.title}
        fill
        className="object-cover"
      />
    </Container>

    <Container className="flex min-w-0 flex-col px-3 py-2">
      <Text
        variant="body-sm"
        className="line-clamp-2 md:pr-10"
        tone="primary"
      >
        {property.title}, {property.address}
      </Text>

      <Container className="mt-auto flex items-center justify-between pt-2 text-secondary">
        <Container className="flex items-center gap-2 text-secondary">
          <RatingPill value={property.rating} />
          <Text variant="body-xs" tone="secondary">
            {property.totalReviews} Reviews
          </Text>
        </Container>
        <Container>
          <Container className="hidden md:flex">
            <Button
              shorter
              variant="transparent"
              rightIcon={<ArrowRight size={12} />}
              className="ml-auto px-0 py-0 text-sm font-bold text-s500 hover:bg-transparent"
              onClick={onView}
            >
              View
            </Button>
          </Container>
          <Container className="md:hidden ">
            <Button
              shorter
              variant="transparent"
              rightIcon={<ArrowRight size={12} />}
              className="ml-auto px-0 py-0 text-sm font-bold text-s500 hover:bg-transparent"
              onClick={onView}
            />

          </Container>
        </Container>
      </Container>
    </Container>
  </Container>
);
