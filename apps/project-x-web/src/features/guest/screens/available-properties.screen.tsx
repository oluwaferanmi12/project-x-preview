"use client";

import { useState } from "react";
import { Container, GeneralSpacer, Text } from "@repo/ui";
import { PropertyListingCard } from "../components/homepage/property-listing-card";
import { PropertySearchBar } from "../components/homepage/search/property-search-bar";
import { HomeFooter } from "../components/homepage/footer";
import { PropertiesPagination } from "../components/properties/properties-pagination";
import { AVAILABLE_PROPERTIES_MOCK } from "../data/available-properties.mock";

// Placeholder until the guest listings endpoint is wired up.
const TOTAL_PAGES = 22;

function AvailablePropertiesScreen() {
  const [page, setPage] = useState(1);

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
            {AVAILABLE_PROPERTIES_MOCK.map((property) => (
              <PropertyListingCard key={property.id} property={property} />
            ))}
          </Container>
          <PropertiesPagination
            currentPage={page}
            totalPages={TOTAL_PAGES}
            onPageChange={setPage}
          />
        </Container>
      </GeneralSpacer>
      <HomeFooter />
    </Container>
  );
}

export default AvailablePropertiesScreen;
