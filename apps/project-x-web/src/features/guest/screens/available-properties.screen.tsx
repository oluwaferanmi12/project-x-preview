"use client";

import { useState } from "react";
import { Container, GeneralSpacer, Text } from "@repo/ui";
import { PropertyListingCard } from "../components/homepage/property-listing-card";
import { PropertySearchBar } from "../components/homepage/search/property-search-bar";
import { HomeFooter } from "../components/homepage/footer";
import { PropertiesPagination } from "../components/properties/properties-pagination";
import { PropertyCardSkeleton } from "@/features/home-owner/properties/components/property-card-skeleton";
import { useGetPublishedListings } from "../hooks/guest.hooks";
import { toGuestProperty } from "../guest.mappers";

function AvailablePropertiesScreen() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useGetPublishedListings(page);
  const properties = data?.listings.map(toGuestProperty) ?? [];

  return (
    <Container>
      <GeneralSpacer>
        <Container className="pb-16 pt-8">
          <Text variant="h3" tone="primary">
            Available properties
          </Text>
          <Container className="mt-6">
            <PropertySearchBar className="w-full" />
          </Container>
          <Text variant="body-sm" tone="primary" className="mb-6 mt-8">
            Showing all available properties
          </Text>
          <Container className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {isLoading
              ? Array.from({ length: 8 }, (_, index) => (
                  <PropertyCardSkeleton key={index} />
                ))
              : properties.map((property) => (
                  <PropertyListingCard key={property.id} property={property} />
                ))}
          </Container>
          {!isLoading && properties.length === 0 && (
            <Text variant="body-sm" tone="secondary" className="py-16 text-center">
              {isError
                ? "We couldn't load properties right now. Please try again."
                : "No properties are available yet."}
            </Text>
          )}
          {data && data.totalPages > 1 && (
            <PropertiesPagination
              currentPage={page}
              totalPages={data.totalPages}
              onPageChange={setPage}
            />
          )}
        </Container>
      </GeneralSpacer>
      <HomeFooter />
    </Container>
  );
}

export default AvailablePropertiesScreen;
