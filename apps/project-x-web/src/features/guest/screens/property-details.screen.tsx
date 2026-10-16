"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import largeView from "@/assets/images/gallery/large-view.png";
import thumbnail from "@/assets/images/image-thumbnail.png";
import { ArrowLeft, LightClock } from "@repo/icons";
import { Button, Container, GeneralSpacer, Text } from "@repo/ui";
import { FeaturePill } from "@/features/home-owner/properties/components/nuggets/feature-pill";
import { HomeFooter } from "../components/homepage/footer";
import { PropertyListingCard } from "../components/homepage/property-listing-card";
import { PropertyDetailsTab } from "../components/property-details/property-details-tab";
import { PropertyDetailsTabs } from "../components/property-details/property-details-tabs";
import {
  PropertyMainMedia,
  PropertyThumbnails,
} from "../components/property-details/property-media-gallery";
import { PropertyReviewsTab } from "../components/property-details/property-reviews-tab";
import {
  PropertyAgentCard,
  PropertyCheckoutCard,
  PropertyMapCard,
} from "../components/property-details/property-sidebar";
import { AVAILABLE_PROPERTIES_MOCK } from "../data/available-properties.mock";
import { getPropertyDetailsMock } from "../data/property-details.mock";
import { PropertyDetailsTab as TabKey } from "../guest.types";

const THUMBNAILS = [thumbnail, thumbnail, thumbnail, thumbnail];

function PropertyDetailsScreen({ propertyId }: { propertyId: string }) {
  const router = useRouter();
  const [tab, setTab] = useState<TabKey>("details");
  const property = getPropertyDetailsMock(propertyId);
  const similar = AVAILABLE_PROPERTIES_MOCK.filter(
    (item) => item.id !== propertyId,
  ).slice(0, 8);

  return (
    <Container>
      <GeneralSpacer>
        <Container className="pb-16 pt-6">
          <Button
            variant="transparent"
            shorter
            onClick={() => router.back()}
            leftIcon={<ArrowLeft size={16} />}
            className="mb-4 !px-0 text-primary hover:!bg-transparent"
          >
            <Text as="span" variant="body-xs" tone="primary">
              {property.location}
            </Text>
          </Button>

          {/* One column on mobile, with `order` interleaving the two wrappers
              (display: contents); two real columns from lg up. */}
          <Container className="flex flex-col gap-5 lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start lg:gap-6">
            <Container className="contents min-w-0 lg:flex lg:flex-col lg:gap-5">
              <PropertyMainMedia
                src={largeView}
                alt={property.location}
                className="order-1"
              />

              <Container className="order-3 flex flex-col gap-3">
                <Container className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <Container className="flex items-baseline gap-2">
                    <Text variant="h2" tone="primary" className="!font-bold">
                      ₦{property.price.toLocaleString("en-NG")}
                    </Text>
                    <Text variant="body-xs" tone="secondary">
                      ({property.period})
                    </Text>
                  </Container>
                  <Container className="flex items-center gap-1 text-secondary">
                    <LightClock size={14} />
                    <Text variant="body-xs" tone="secondary">
                      {property.date}
                    </Text>
                  </Container>
                </Container>

                <Container className="flex flex-wrap gap-2">
                  <FeaturePill icon="🏠" label={property.type} />
                  <FeaturePill icon="🛏️" label={`${property.beds} Beds`} />
                  <FeaturePill icon="🛁" label={`${property.baths} Baths`} />
                  <FeaturePill icon="🚽" label={`${property.toilets} Toilets`} />
                </Container>
              </Container>

              <Container className="order-6 flex min-w-0 flex-col gap-5">
                <PropertyDetailsTabs active={tab} onChange={setTab} />
                {tab === "details" ? (
                  <PropertyDetailsTab property={property} />
                ) : (
                  <PropertyReviewsTab />
                )}
              </Container>
            </Container>

            <Container className="contents min-w-0 lg:flex lg:flex-col lg:gap-4">
              <PropertyThumbnails
                thumbnails={THUMBNAILS}
                alt={property.location}
                className="order-2"
              />
              <PropertyAgentCard
                property={property}
                className="order-4 hidden lg:block"
              />
              <PropertyMapCard property={property} className="order-5" />
              <PropertyCheckoutCard className="order-7" />
            </Container>
          </Container>

          <Text variant="h4" tone="primary" className="mb-6 mt-12 !font-bold">
            See similar properties
          </Text>
          <Container className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {similar.map((item) => (
              <PropertyListingCard key={item.id} property={item} />
            ))}
          </Container>
        </Container>
      </GeneralSpacer>
      <HomeFooter />
    </Container>
  );
}

export default PropertyDetailsScreen;
