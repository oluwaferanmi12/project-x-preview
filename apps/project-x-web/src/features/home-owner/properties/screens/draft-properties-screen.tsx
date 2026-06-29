"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button, Container, Pagination, Text } from "@repo/ui";
import { properties } from "../data/properties.mock";
import { ArrowRight } from "@repo/icons";

export const DraftPropertiesScreen = () => {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const draftProperties = properties.filter(
    (property) => property.status === "draft"
  );

  const totalPages = Math.ceil(draftProperties.length / itemsPerPage);

  const paginatedProperties = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;

    return draftProperties.slice(startIndex, endIndex);
  }, [currentPage, draftProperties]);

  const continueDraft = (step = 1, substep = 1) => {
    router.push(`/properties/list-property?step=${step}&substep=${substep}`);
  };

  return (
    <Container>
      <Container className="mb-8 flex items-center justify-between rounded-2xl bg-p200 px-6 py-5">
        <Container>
          <Text variant="h5" tone="inverted">
            Add your properties
          </Text>

          <Text variant="body-sm" tone="inverted">
            List your properties and get real life actions and trackable
            engagements
          </Text>
        </Container>

        <Button onClick={() => router.push("/properties/list-property")}>
          + Add property
        </Button>
      </Container>

      <Container className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {paginatedProperties.map((property) => (
          <Container
            key={property.id}
            className="overflow-hidden rounded-2xl border border-line bg-surface"
          >
            <Container className="relative h-32 w-full overflow-hidden bg-muted">
              <Image
                src={
                  property.image
                    ? property.image
                    : "/draft-image-placeholder.png"
                }
                alt={property.title}
                fill
                className="object-cover"
              />
            </Container>

            <Container className="p-3">
              <Text variant="body-sm" tone="primary" className="font-semibold">
                {property.title}
              </Text>

              <Text variant="body-xs" tone="secondary">
                {property.meta.type}
              </Text>

              <Container className="mt-4 flex items-center justify-between">
                <Text variant="body-xs" tone="secondary">
                  {property.date}
                </Text>
                <Button
                  shorter
                  rightIcon={<ArrowRight />}
                  as="button"
                  variant="transparent"
                  onClick={() =>
                    continueDraft(property.step, property.substep)
                  }
                >
                  Continue
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