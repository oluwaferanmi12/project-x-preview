"use client"
import { ArrowLeft } from "@repo/icons";
import { Button, Container, Pagination } from "@repo/ui";
import type { ReviewedProperty, ReviewItem } from "../data/reviews.mock";
import { ReviewCommentCard } from "./review-comment-card";
import { ReviewSummary } from "./review-summary";
import { BackRouter } from './back-router';

type ReviewsDetailProps = {
  property: ReviewedProperty;
  reviews: ReviewedProperty["reviews"];
  totalProperties: number;
  currentPage: number;
  totalPages: number;
  onBack: () => void;
  onPageChange: (page: number) => void;
  onSelectReview: (review: ReviewItem) => void;
};

export const ReviewsDetail = ({
  property,
  reviews,
  totalProperties,
  currentPage,
  totalPages,
  onBack,
  onPageChange,
  onSelectReview,
}: ReviewsDetailProps) => (
  <Container>
    <BackRouter onBack={onBack} />

    <Container className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
    <Container className="order-1 xl:order-2 min-w-0">
        <ReviewSummary
          property={property}
          totalProperties={totalProperties}
          compact
          showPropertyCard
        />
      </Container>
      
      <Container className="order-2 xl:order-1">

        <Container className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {reviews.map((review) => (
            <ReviewCommentCard
              key={review.id}
              review={review}
              onView={() => onSelectReview(review)}
            />
          ))}
        </Container>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </Container>


    </Container>
  </Container>
);
