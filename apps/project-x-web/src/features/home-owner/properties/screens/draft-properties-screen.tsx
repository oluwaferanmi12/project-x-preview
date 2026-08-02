"use client";

import { Container, Text } from "@repo/ui";
import { AddPropertyWrapper } from "../components/nuggets/add-property-wrapper";
import { useGetListings } from "../hooks/property.hook";
import { useDraftProperty } from "../hooks/useDraftProperty";

export const DraftPropertiesScreen = () => {
  const { properties, continueDraft } = useDraftProperty();
  return (
    <Container>
      <AddPropertyWrapper />
      <Container className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {properties &&
          properties.map((property) => (
            <Container
              key={property.id}
              className="overflow-hidden rounded-2xl border border-line bg-surface"
            >
              <Container className="relative h-32 w-full overflow-hidden bg-muted">
                {/* <Image
                  src={
                    property.image
                      ? property.image
                      : "/draft-image-placeholder.png"
                  }
                  alt={property.title}
                  fill
                  className="object-cover"
                /> */}
              </Container>

              <Container className="p-3">
                <Text
                  variant="body-sm"
                  tone="primary"
                  className="font-semibold"
                >
                  {property.addressLine}
                </Text>

                <Text variant="body-xs" tone="secondary">
                  {property.propertyTypeName}
                </Text>

                <Container className="mt-4 flex items-center justify-between">
                  <Text variant="body-xs" tone="secondary">
                    {property.createdAt}
                  </Text>

                  <button
                    type="button"
                    onClick={() => continueDraft(property.id ?? "")}
                    className="text-xs font-semibold text-d300"
                  >
                    Continue →
                  </button>
                </Container>
              </Container>
            </Container>
          ))}
      </Container>

      {/* <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      /> */}
    </Container>
  );
};
