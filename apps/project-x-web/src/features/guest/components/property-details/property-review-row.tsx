import { ArrowRight, OutlineMessageIcon, OutlineThumbUpIcon } from "@repo/icons";
import { Button, Container, Text } from "@repo/ui";
import type {
  ReviewItem,
  ReviewReply,
} from "@/features/home-owner/reviews/data/reviews.mock";
import { StarRating } from "@/features/home-owner/reviews/components/star-rating";

// Placeholder until reply threads come from the API.
const FALLBACK_REPLIES: ReviewReply[] = Array.from({ length: 4 }, (_, index) => ({
  id: `reply-${index + 1}`,
  author: "Adedibu Galatia",
  initials: "AG",
  date: "5 Apr, 2025",
  comment:
    "Great location and very responsive landlord. The unit could use a little more lighting in the kitchen but overall a solid place.",
  likes: 12,
}));

const Avatar = ({ initials }: { initials: string }) => (
  <Container className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-p50">
    <Text as="span" variant="bodyRegular" className="font-bold" tone="p300">
      {initials}
    </Text>
  </Container>
);

const LikeCount = ({ count }: { count: number }) => (
  <Container className="inline-flex items-center gap-1.5">
    <OutlineThumbUpIcon />
    <Text variant="body-xs" tone="secondary">
      {count}
    </Text>
  </Container>
);

const ReviewHeader = ({ review }: { review: ReviewItem }) => (
  <Container className="flex items-start justify-between gap-3">
    <Container className="flex min-w-0 flex-col gap-1">
      <Text variant="bodyRegular" className="truncate font-semibold" tone="primary">
        {review.author}
      </Text>
      <StarRating rating={review.rating} />
    </Container>
    <Text variant="body-xs" tone="secondary">
      {review.date}
    </Text>
  </Container>
);

const ReviewCounts = ({
  review,
  onView,
}: {
  review: ReviewItem;
  onView?: () => void;
}) => (
  <Container className="flex items-center justify-between gap-3">
    <Container className="flex items-center gap-3 text-secondary">
      <Container className="inline-flex items-center gap-1.5">
        <OutlineMessageIcon />
        <Text variant="body-xs" tone="secondary">
          {String(review.replies).padStart(2, "0")}
        </Text>
      </Container>
      <LikeCount count={review.likes} />
    </Container>
    {onView && (
      <Button
        shorter
        variant="transparent"
        rightIcon={<ArrowRight size={12} />}
        className="h-auto px-0 py-0 text-sm font-bold text-s500 hover:bg-transparent"
        onClick={onView}
      >
        View
      </Button>
    )}
  </Container>
);

export const PropertyReviewRow = ({
  review,
  expanded = false,
  onView,
}: {
  review: ReviewItem;
  expanded?: boolean;
  onView?: () => void;
}) => {
  const replies = review.thread ?? FALLBACK_REPLIES;

  return (
    <Container className="border-b border-line py-4 last:border-b-0">
      {expanded ? (
        <Container className="relative flex gap-3 pb-4">
          <Container className="absolute bottom-0 left-5 top-12 w-px bg-line" />
          <Avatar initials={review.initials} />
          <Container className="min-w-0 flex-1">
            <ReviewHeader review={review} />
            <Text variant="body-sm" tone="primary" className="mt-3">
              {review.comment}
            </Text>
            <hr className="my-2 border-line" />
            <ReviewCounts review={review} />
          </Container>
        </Container>
      ) : (
        <Container className="flex flex-col gap-3">
          <Container className="flex items-start gap-3">
            <Avatar initials={review.initials} />
            <Container className="min-w-0 flex-1">
              <ReviewHeader review={review} />
            </Container>
          </Container>
          <Text variant="body-sm" tone="primary" className="line-clamp-2">
            {review.comment}
          </Text>
          <ReviewCounts review={review} onView={onView} />
        </Container>
      )}

      {expanded &&
        replies.map((reply, index) => {
          const isLast = index === replies.length - 1;
          return (
            <Container
              key={reply.id}
              className={`relative flex gap-3 ${isLast ? "" : "pb-4"}`}
            >
              {!isLast && (
                <Container className="absolute bottom-0 left-5 top-12 w-px bg-line" />
              )}
              <Avatar initials={reply.initials} />
              <Container className="min-w-0 flex-1">
                <Container className="flex items-start justify-between gap-3">
                  <Text variant="bodyRegular" className="truncate font-semibold" tone="primary">
                    {reply.author}
                  </Text>
                  <Text variant="body-xs" tone="secondary">
                    {reply.date}
                  </Text>
                </Container>
                <Text variant="body-sm" tone="primary" className="mt-2">
                  {reply.comment}
                </Text>
                <Container className="mt-3 text-secondary">
                  <LikeCount count={reply.likes} />
                </Container>
              </Container>
            </Container>
          );
        })}
    </Container>
  );
};
