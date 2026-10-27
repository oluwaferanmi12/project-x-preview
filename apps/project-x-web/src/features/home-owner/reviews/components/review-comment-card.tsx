import { ArrowRight, OutlineMessageIcon, OutlineThumbUpIcon } from "@repo/icons";
import { Button, Container, Text } from "@repo/ui";
import type { ReviewItem } from "../data/reviews.mock";
import { StarRating } from "./star-rating";

type ReviewCommentCardProps = {
  review: ReviewItem;
  onView?: () => void;
  showViewButton?: boolean;
};

export const ReviewCommentCard = ({
  review,
  onView,
  showViewButton = true,
}: ReviewCommentCardProps) => (
  <Container
    className={`rounded-xl border border-line bg-surface p-3 ${
      onView ? "cursor-pointer transition hover:border-s500" : ""
    }`}
    onClick={onView}
    role={onView ? "button" : undefined}
    tabIndex={onView ? 0 : undefined}
    onKeyDown={(event) => {
      if (onView && (event.key === "Enter" || event.key === " ")) {
        event.preventDefault();
        onView();
      }
    }}
  >
    <Container>
      {/* Header: avatar, name + stars, date */}
      <Container className="flex items-start gap-3">
        <Container className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-p50">
          <Text variant="bodyRegular" className="font-bold" tone="p300">
            {review.initials}
          </Text>
        </Container>

        <Container className="min-w-0 flex-1">
          <Text variant="bodyRegular" className="truncate font-semibold" tone="primary">
            {review.author}
          </Text>
          <Container className="mt-1">
            <StarRating rating={review.rating} />
          </Container>
        </Container>

        <Text variant="body-xs" className="shrink-0" tone="secondary">
          {review.date}
        </Text>
      </Container>

      {/* Body spans the full card width, under the avatar */}
      <Container className="min-w-0">
        <Text
        variant="body-sm"
          className="mt-3 line-clamp-2"
          tone="primary"
        >
          {review.comment}
        </Text>
        <hr className="my-2 border-line" />


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

          {onView && showViewButton && (
            <Button
              shorter
              variant="transparent"
              rightIcon={<ArrowRight size={12} />}
              className="h-auto px-0 py-0 text-sm font-bold text-s500 hover:bg-transparent"
              onClick={(event) => {
                event.stopPropagation();
                onView();
              }}
            >
              View
            </Button>
          )}
        </Container>
      </Container>
    </Container>
  </Container>
);
