"use client";

import { useMemo, useState } from "react";
import { notFound, useRouter } from "next/navigation";
import { ArrowLeft } from "@repo/icons";
import { Button, Container, Text } from "@repo/ui";
import { ReviewsDetail } from "../components/reviews-detail";
import { ReviewThread } from "../components/review-thread";
import { ReviewsOverview } from "../components/reviews-overview";
import {
  reviewedProperties,
  type ReviewedProperty,
  type ReviewItem,
} from "../data/reviews.mock";
import { PROPERTIES_PER_PAGE, REVIEWS_PER_PAGE } from "../reviews.constants";

type ReviewsScreenProps = {
  /** From /reviews/[propertyId]; absent on the overview. */
  propertyId?: string;
  /** From /reviews/[propertyId]/[reviewId]; present on the replies view. */
  reviewId?: string;
};

export const ReviewsScreen = ({ propertyId, reviewId }: ReviewsScreenProps) => {
  const router = useRouter();
  const [previewPropertyId, setPreviewPropertyId] = useState(
    reviewedProperties[0]?.id
  );
  const [propertyPage, setPropertyPage] = useState(1);
  const [reviewPage, setReviewPage] = useState(1);
  const [query, setQuery] = useState("");

  const filteredProperties = useMemo(() => {
    const term = query.trim().toLowerCase();

    if (!term) return reviewedProperties;

    return reviewedProperties.filter((property) =>
      `${property.title} ${property.address}`.toLowerCase().includes(term)
    );
  }, [query]);

  const routedProperty = propertyId
    ? reviewedProperties.find((property) => property.id === propertyId)
    : undefined;
  if (propertyId && !routedProperty) notFound();

  const defaultProperty = reviewedProperties[0] as ReviewedProperty;
  const selectedProperty =
    routedProperty ??
    filteredProperties.find((property) => property.id === previewPropertyId) ??
    filteredProperties[0] ??
    defaultProperty;

  const selectedReview = reviewId
    ? selectedProperty.reviews.find((review) => review.id === reviewId)
    : undefined;
  if (reviewId && !selectedReview) notFound();

  const showDetails = Boolean(propertyId);
  const showOverview = !showDetails;

  const propertyTotalPages = Math.ceil(filteredProperties.length / PROPERTIES_PER_PAGE);
  const reviewTotalPages = Math.ceil(
    selectedProperty.reviews.length / REVIEWS_PER_PAGE
  );

  const visibleProperties = useMemo(() => {
    const startIndex = (propertyPage - 1) * PROPERTIES_PER_PAGE;

    return filteredProperties.slice(startIndex, startIndex + PROPERTIES_PER_PAGE);
  }, [filteredProperties, propertyPage]);

  const visibleReviews = useMemo(() => {
    const startIndex = (reviewPage - 1) * REVIEWS_PER_PAGE;

    return selectedProperty.reviews.slice(
      startIndex,
      startIndex + REVIEWS_PER_PAGE
    );
  }, [reviewPage, selectedProperty]);

  const goToOverview = () => router.push("/reviews");
  const goToProperty = () => router.push(`/reviews/${selectedProperty.id}`);

  const selectProperty = (property: ReviewedProperty) => {
    setPreviewPropertyId(property.id);
    router.push(`/reviews/${property.id}`);
  };

  const selectReview = (review: ReviewItem) => {
    router.push(`/reviews/${selectedProperty.id}/${review.id}`);
  };

  const searchProperties = (value: string) => {
    setQuery(value);
    setPropertyPage(1);
  };

  return (
    <Container className="space-y-6">
      <Container className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      {showOverview && (
        <Text variant="h3" tone="primary">
          Reviews
        </Text>
      )}

        {showDetails && (
          <Button
            shorter
            variant="transparent"
            leftIcon={<ArrowLeft size={14} />}
            className="w-fit px-0 text-s500 lg:hidden"
            onClick={selectedReview ? goToProperty : goToOverview}
          >
            Back
          </Button>
        )}
      </Container>

      {selectedReview ? (
        <ReviewThread
          property={selectedProperty}
          review={selectedReview}
          totalProperties={reviewedProperties.length}
          onBack={goToProperty}
        />
      ) : showOverview ? (
        <ReviewsOverview
          properties={visibleProperties}
          selectedProperty={selectedProperty}
          totalProperties={reviewedProperties.length}
          query={query}
          currentPage={propertyPage}
          totalPages={propertyTotalPages}
          onSearch={searchProperties}
          onPageChange={setPropertyPage}
          onSelectProperty={selectProperty}
        />
      ) : (
        <ReviewsDetail
          property={selectedProperty}
          reviews={visibleReviews}
          totalProperties={reviewedProperties.length}
          currentPage={reviewPage}
          totalPages={reviewTotalPages}
          onBack={goToOverview}
          onPageChange={setReviewPage}
          onSelectReview={selectReview}
        />
      )}
    </Container>
  );
};
