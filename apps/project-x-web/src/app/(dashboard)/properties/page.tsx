"use client";

import { useState } from "react";
import { Container, Text } from "@repo/ui";
import { PropertyStatusTabs } from "@/features/house-owners/properties/components/property-status-tabs";
import { DraftPropertiesScreen } from "@/features/house-owners/properties/screens/draft-properties-screen";
import { UnderReviewPropertiesScreen } from "@/features/house-owners/properties/screens/under-review-properties-screen";
import { PublishedPropertiesScreen } from "@/features/house-owners/properties/screens/published-properties-screen";
import { ArchivedPropertiesScreen } from "@/features/house-owners/properties/screens/archived-properties-screen";

export default function PropertiesPage() {
  const [activeStatus, setActiveStatus] = useState("draft");

  return (
    <Container className="min-h-[90vh] pb-10">
      <Container className="mb-6 flex items-center justify-between">
        <Text variant="h3" tone="primary">
          Properties
        </Text>

        <PropertyStatusTabs
          active={activeStatus}
          onChange={setActiveStatus}
        />
      </Container>

      {activeStatus === "draft" && <DraftPropertiesScreen />}
      {activeStatus === "under-review" && <UnderReviewPropertiesScreen />}
      {activeStatus === "published" && <PublishedPropertiesScreen />}
      {activeStatus === "archived" && <ArchivedPropertiesScreen />}
    </Container>
  );
}