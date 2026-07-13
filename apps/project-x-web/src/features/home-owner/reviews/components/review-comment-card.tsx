import { ArrowRight, OutlineMessageIcon, OutlineThumbUpIcon } from "@repo/icons";
import { Button, Container, Text } from "@repo/ui";
import type { ReviewItem } from "../data/reviews.mock";
import { StarRating } from "./star-rating";

type ReviewCommentCardProps = {
  review: ReviewItem;
};

export const ReviewCommentCard = ({ review }: ReviewCommentCardProps) => (
  <Container className="rounded-xl border border-line bg-surface p-3">
    <Container className="grid grid-cols-[46px_minmax(0,1fr)] gap-3">
      {/* Left only avatar */}
      <Container className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-p50">
        <Text variant="body-md" className="font-bold" tone="p300">
          {review.initials}
        </Text>
      </Container>

      {/* Right content */}
      <Container className="min-w-0">
        <Container className="flex items-start justify-between gap-2">
          <Container className="min-w-0">
            <Text variant="body-md" className="truncate font-semibold" tone="primary">
              {review.author}
            </Text>
            <Text variant="body-xs" className="mt-1" tone="secondary">
              {review.date}
            </Text>
          </Container>

          <StarRating rating={review.rating} />
        </Container>

        <Text
        variant="body-sm"
          className="mt-3 line-clamp-2"
          tone="primary"
        >
          {review.comment}
        </Text>

        <Container className="mt-3 flex items-center justify-between gap-3">
          <Container className="flex items-center gap-3 text-secondary">
            <Container className="inline-flex gap-2 items-center">
              <OutlineMessageIcon />
              <Text variant="body-xs" tone="secondary">
                {review.replies}
              </Text>
            </Container>
            <Container className="inline-flex gap-2 items-center">
              <OutlineThumbUpIcon />
              <Text variant="body-xs" tone="secondary">
                {review.likes}
              </Text>
            </Container>
            
            
          </Container>

          <Button
            shorter
            variant="transparent"
            rightIcon={<ArrowRight size={12} />}
            className="h-auto px-0 py-0 text-sm font-bold text-s500 hover:bg-transparent"
          >
            View
          </Button>
        </Container>
      </Container>
    </Container>
  </Container>
);
