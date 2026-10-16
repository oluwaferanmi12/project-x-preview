"use client";

import { useState } from "react";
import {
  OutlineMessageIcon,
  RatingMessagesIcon,
  RatingStarIcon,
} from "@repo/icons";
import { Button, Container, Pagination, Text } from "@repo/ui";
import { reviewedProperties } from "@/features/home-owner/reviews/data/reviews.mock";
import {
  MetricBand,
  RatingBreakdown,
} from "@/features/home-owner/reviews/components/review-summary";
import { PropertyReviewRow } from "./property-review-row";

// Placeholder until guest reviews come from the API.
const reviewedProperty = reviewedProperties[0]!;
const REVIEWS_PER_PAGE = 8;

export const PropertyReviewsTab = ({
  onAddReview,
}: {
  onAddReview?: () => void;
}) => {
  const [page, setPage] = useState(1);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const totalPages = Math.ceil(
    reviewedProperty.reviews.length / REVIEWS_PER_PAGE,
  );
  const reviews = reviewedProperty.reviews.slice(
    (page - 1) * REVIEWS_PER_PAGE,
    page * REVIEWS_PER_PAGE,
  );

  return (
    <Container className="flex flex-col gap-4">
      <Container className="grid grid-cols-2 gap-3 md:gap-4">
        <MetricBand
          label="Avg Rating"
          value={reviewedProperty.rating.toFixed(1)}
          suffix="/5.0"
          className="bg-indigo-back"
          valueClassName="text-indigo-fore"
          icon={<RatingStarIcon className="text-indigo-fore" />}
          singleBandFullWidth
        />
        <MetricBand
          label="Total Reviews"
          value={reviewedProperty.totalReviews.toString()}
          className="bg-purple-fore"
          valueClassName="text-purple-back"
          icon={<RatingMessagesIcon className="text-purple-back" />}
          singleBandFullWidth
        />
      </Container>

      <RatingBreakdown
        property={reviewedProperty}
        gridClassName="md:grid md:grid-cols-4"
        showDescription={false}
      />

      <Container className="rounded-xl bg-surface p-4">
        <Container className="flex items-center justify-between">
          <Text variant="body-sm" tone="primary">
            All Reviews
          </Text>
          <Button
            shorter
            rightIcon={<OutlineMessageIcon />}
            onClick={onAddReview}
          >
            Add a Review
          </Button>
        </Container>
        <Container className="mt-4 border-t border-line">
          {reviews.map((review) => (
            <PropertyReviewRow
              key={review.id}
              review={review}
              expanded={expandedId === review.id}
              onView={() => setExpandedId(review.id)}
            />
          ))}
        </Container>
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={(next) => {
            setPage(next);
            setExpandedId(null);
          }}
          align="start"
        />
      </Container>
    </Container>
  );
};
