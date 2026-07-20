import { ArrowLeft, OutlineMessageIcon, OutlineThumbUpIcon, RatingStarIcon } from "@repo/icons";
import { Button, Container, Text } from "@repo/ui";
import type { ReviewedProperty, ReviewItem, ReviewReply } from "../data/reviews.mock";
import { StarRating } from "./star-rating";
import { RatingBreakdown, SummaryPropertyCard, MetricBand } from "./review-summary";
import { BackRouter } from './back-router';



type ReviewThreadProps = {
  property: ReviewedProperty;
  review: ReviewItem;
  totalProperties: number;
  onBack: () => void;
};

const reviewReplies = (thread?: ReviewReply[]) =>
  thread ?? [
    {
      id: "reply-1",
      author: "Property Owner",
      initials: "PO",
      date: "6 Apr, 2026",
      comment: "Thanks for your feedback! We appreciate the details and will address the kitchen lighting issue.",
      likes: 3,
    },
    {
      id: "reply-2",
      author: "Guest",
      initials: "GT",
      date: "6 Apr, 2026",
      comment: "Happy to hear the stay was smooth. The kitchen lighting could definitely be improved for future bookings.",
      likes: 1,
    },
  ];

export const ReviewThread = ({ property, review, totalProperties, onBack }: ReviewThreadProps) => (
  <Container>
    <BackRouter onBack={onBack} />
    <Container className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
      <Container className="order-2 xl:order-1">
        <Container className="overflow-hidden rounded-xl bg-surface ">
          {/* Main review */}
          <Container className="relative flex gap-4 px-5 pt-4">
            {/* Main thread line */}
            {reviewReplies(review.thread).length > 0 && (
              <Container className="absolute bottom-0 left-9.25 top-13 w-px bg-line" />
            )}

            {/* Avatar */}
            <Container className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-p50">
              <Text variant="h4" className="font-bold" tone="p300">
                {review.initials}
              </Text>
            </Container>

            {/* Review content */}
            <Container className="min-w-0 flex-1 pb-3">
              <Container className="flex items-start justify-between gap-4">
                <Container>
                  <Text variant="h5" className="font-semibold" tone="primary">
                    {review.author}
                  </Text>

                  <Text variant="body-xs" tone="secondary" className="mt-1">
                    {review.date}
                  </Text>
                </Container>

                <StarRating rating={review.rating} />
              </Container>

              <Text
                variant="body-sm"
                tone="primary"
                className="mt-3 max-w-175 leading-normal"
              >
                {review.comment}
              </Text>
              <Container className=" border-b border-line py-1" />

              <Container className="mt-3 flex items-center gap-3">
                <Container className="inline-flex items-center gap-1 text-secondary">
                  <OutlineMessageIcon className="h-3.5 w-3.5" />

                  <Text variant="body-xs" tone="secondary">
                    {review.replies}
                  </Text>
                </Container>

                <Container className="inline-flex items-center gap-1 text-secondary">
                  <OutlineThumbUpIcon className="h-3.5 w-3.5" />

                  <Text variant="body-xs" tone="secondary">
                    {review.likes}
                  </Text>
                </Container>
              </Container>
            </Container>
          </Container>

          {/* Replies */}
          {reviewReplies(review.thread).length > 0 && (
            <Container className="relative px-5">
              {/* Continuous vertical thread */}
              <Container className="absolute bottom-[50%] left-9.25 top-0 w-px bg-line" />

              {reviewReplies(review.thread).map((reply, index, replies) => {
                const isLastReply = index === replies.length - 1;

                return (
                  <Container
                    key={reply.id}
                    className="relative ml-11.5 flex gap-4 pt-4"
                  >
                    <Container className="absolute -left-7.25 top-0 h-3 w-px bg-line" />
                    {/* Curved branch from thread line */}
                      <Container
                        className={[
                          "absolute -left-7.25 top-3 h-7.25 w-7.25",
                          "rounded-bl-xl border-b border-l border-line",
                        ].join(" ")}
                    />

                    {/* Continue the vertical line until the final branch */}
                    {!isLastReply && (
                      <Container className="absolute -left-7.25 bottom-0 top-0 w-px bg-line" />
                    )}

                    {/* Reply avatar */}
                    <Container className="relative ml-1 z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-p50">
                      <Text
                        variant="h4"
                        className="font-bold"
                        tone="p300"
                      >
                        {reply.initials}
                      </Text>
                    </Container>

                    {/* Reply content */}
                    <Container
                      className="min-w-0 flex-1 pb-4"
                    >
                      <Text
                        variant="h5"
                        className="font-semibold"
                        tone="primary"
                      >
                        {reply.author}
                      </Text>

                      <Text variant="body-xs" tone="secondary" className="mt-1">
                        {reply.date}
                      </Text>

                      <Text
                        variant="body-sm"
                        tone="primary"
                        className="mt-3 max-w-175 leading-normal"
                      >
                        {reply.comment}
                      </Text>
                      <Container className=" border-b border-line py-1" />

                      <Container className="mt-3 inline-flex items-center gap-1 text-secondary">
                        <OutlineThumbUpIcon className="h-3.5 w-3.5" />

                        <Text variant="body-xs" tone="secondary">
                          {reply.likes}
                        </Text>
                      </Container>
                    </Container>
                  </Container>
                );
              })}
            </Container>
          )}
        </Container>
      </Container>

      <Container className="order-1 xl:order-2 min-w-0">
        <Container className="space-y-5">
          <MetricBand
            label="Rating"
            value={property.rating.toFixed(1)}
            suffix="/5.0"
            className="bg-indigo-back"
            valueClassName="text-indigo-fore"
            icon={<RatingStarIcon className="text-indigo-fore" />}
            singleBandFullWidth
          />
          <RatingBreakdown property={property} />
          <SummaryPropertyCard property={property} />
        </Container>
      </Container>
    </Container>
  </Container>
);
