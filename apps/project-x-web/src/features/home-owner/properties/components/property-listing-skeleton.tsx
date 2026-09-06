import { Container } from "@repo/ui";
import { PropertyCardSkeleton } from "./property-card-skeleton";

const SKELETON_COUNT = 8;

export const PropertyListingSkeleton = () => {
  return (
    <Container className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
        <PropertyCardSkeleton key={index} />
      ))}
    </Container>
  );
};
