import { ArrowLeft } from "@repo/icons";
import { Button, Container, Pagination } from "@repo/ui";
import type { ReviewedProperty } from "../data/reviews.mock";
import { ReviewCommentCard } from "./review-comment-card";
import { ReviewSummary } from "./review-summary";

type ReviewsDetailProps = {
  property: ReviewedProperty;
  reviews: ReviewedProperty["reviews"];
  totalProperties: number;
  currentPage: number;
  totalPages: number;
  onBack: () => void;
  onPageChange: (page: number) => void;
};

export const ReviewsDetail = ({
  property,
  reviews,
  totalProperties,
  currentPage,
  totalPages,
  onBack,
  onPageChange,
}: ReviewsDetailProps) => (
  <Container className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
    <Container>
      <Container className="mb-4 hidden lg:flex">
        <Button
          shorter
          variant="transparent"
          leftIcon={<ArrowLeft size={14} />}
          className="px-0 text-s500"
          onClick={onBack}
        >
          Back
        </Button>
      </Container>

      <Container className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {reviews.map((review) => (
          <ReviewCommentCard key={review.id} review={review} />
        ))}
      </Container>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </Container>

    <Container className="hidden xl:block">
      <ReviewSummary
        property={property}
        totalProperties={totalProperties}
        compact
        showPropertyCard
      />
    </Container>
  </Container>
);
