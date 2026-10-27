"use client";

import { Container, GeneralSpacer, Text } from "@repo/ui";
import { HomeFooter } from "../components/homepage/footer";
import { AvailablePropertyListing } from "../components/properties/available-property-listing";
import { FilterSearch } from "../components/filter-search";

function AvailablePropertiesScreen() {
  return (
    <Container>
      <GeneralSpacer>
        <Container className="pb-16 pt-8">
          <Text variant="h3" tone="primary">
            Available properties
          </Text>
          <Container className="mt-6">
            <FilterSearch inAvailableProperties />
          </Container>
          <Text variant="body-sm" tone="primary" className="mb-6 mt-8">
            Showing all available properties
          </Text>
          <AvailablePropertyListing />
        </Container>
      </GeneralSpacer>
    </Container>
  );
}

export default AvailablePropertiesScreen;
