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
    <Container className="order-1 xl:order-2 min-w-0">
      <ReviewSummary
        property={selectedProperty}
        totalProperties={totalProperties}
      />
    </Container>
    <Container className="order-2 xl:order-1">
      <ReviewsSearch value={query} onChange={onSearch} />
      <hr className="mb-3 border-line" />

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
  </Container>
);
