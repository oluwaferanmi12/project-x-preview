import { Container, Text } from "@repo/ui";
import { PropertyCardSkeleton } from "@/features/home-owner/properties/components/property-card-skeleton";
import { useGetPublishedListings } from "../../hooks/guest.hooks";
import { PropertyListingCard } from "../homepage/property-listing-card";

const SKELETON_COUNT = 8;
const GRID_CLASS =
  "grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4";

export const AvailablePropertyListing = () => {
  const { data: properties, isLoading, isError } = useGetPublishedListings(1);

  return isLoading ? (
    <Container className={GRID_CLASS}>
      {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
        <PropertyCardSkeleton key={index} />
      ))}
    </Container>
  ) : properties && properties.length > 0 ? (
    <Container className={GRID_CLASS}>
      {properties.map((property) => (
        <PropertyListingCard key={property.id} property={property} />
      ))}
    </Container>
  ) : (
    <Text variant="body-sm" tone="secondary" className="py-16 text-center">
      {isError
        ? "We couldn't load properties right now. Please try again."
        : "No properties are available yet."}
    </Text>
  );
};
