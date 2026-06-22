"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button, Container, Pagination, Text } from "@repo/ui";
import { properties } from "../data/properties.mock";
import { ArrowRight } from "../../../../../../../packages/icons/src/generated";

export const PublishedPropertiesScreen = () => {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const publishedProperties = properties.filter(
    (property) => property.status === "published"
  );

  const totalPages = Math.ceil(publishedProperties.length / itemsPerPage);

  const paginatedProperties = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;

    return publishedProperties.slice(startIndex, endIndex);
  }, [currentPage, publishedProperties]);

  const viewProperty = (propertyId: string) => {
    router.push(`/properties/${propertyId}?status=published`);
  };

  return (
    <Container>
      <Container className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {paginatedProperties.map((property) => (
          <Container
            key={property.id}
            className="overflow-hidden rounded-2xl border border-line bg-surface"
          >
            <Container className="relative h-32 w-full overflow-hidden bg-muted">
              <Image
                src={property.image || "/draft-image-placeholder.png"}
                alt={property.title}
                fill
                className="object-cover"
              />

              <Container className="absolute right-2 top-2 rounded-full bg-w300 px-2 py-1">
                <Text variant="body-xs" tone="inverted">
                  Published
                </Text>
              </Container>
            </Container>

            <Container className="p-3">
              <Text variant="body-sm" tone="primary" className="font-semibold">
                {property.title}
              </Text>

              <Container className="mt-2 flex flex-wrap gap-2">
                <Text variant="body-xs" tone="secondary">
                  {property.meta.type}
                </Text>

                <Text variant="body-xs" tone="secondary">
                  {property.meta.beds} Beds
                </Text>

                <Text variant="body-xs" tone="secondary">
                  {property.meta.baths} Baths
                </Text>

                <Text variant="body-xs" tone="secondary">
                  {property.meta.toilets} Toilets
                </Text>
              </Container>

              <Container className="mt-4 flex items-center justify-between">
                <Text variant="body-xs" tone="secondary">
                  {property.date}
                </Text>

                <Button
                  shorter
                  rightIcon={<ArrowRight />}
                  as="button"
                  variant="transparent"
                  onClick={() => viewProperty(property.id)}
                >
                  View
                </Button>
              </Container>
            </Container>
          </Container>
        ))}
      </Container>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </Container>
  );
};