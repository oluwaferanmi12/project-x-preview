import { Container, Pagination } from "@repo/ui";
import type { ReviewedProperty } from "../data/reviews.mock";
import { PropertyReviewCard } from "./property-review-card";
import { ReviewSummary } from "./review-summary";
import { ReviewsSearch } from "./reviews-search";

type ReviewsOverviewProps = {
  properties: ReviewedProperty[];
  selectedProperty: ReviewedProperty;
  totalProperties: number;
  query: string;
  currentPage: number;
  totalPages: number;
  onSearch: (value: string) => void;
  onPageChange: (page: number) => void;
  onSelectProperty: (property: ReviewedProperty) => void;
};

export const ReviewsOverview = ({
  properties,
  selectedProperty,
  totalProperties,
  query,
  currentPage,
  totalPages,
  onSearch,
  onPageChange,
  onSelectProperty,
}: ReviewsOverviewProps) => (
  <Container className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
    <Container>
      <ReviewsSearch value={query} onChange={onSearch} />
      <hr className="border-line mb-3"/>

      <Container className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {properties.map((property) => (
          <PropertyReviewCard
            key={property.id}
            property={property}
            onView={() => onSelectProperty(property)}
          />
        ))}
      </Container>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </Container>

    <ReviewSummary
      property={selectedProperty}
      totalProperties={totalProperties}
    />
  </Container>
);
