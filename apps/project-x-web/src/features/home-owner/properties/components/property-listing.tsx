import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AddIcon } from "@repo/icons";
import { Button, Container, Pagination, Text } from "@repo/ui";
import { ListingType } from "../types/property.types";
import { useGetListings } from "../hooks/property.hook";
import { toPropertyItem } from "../utils/property.utils";
import { PropertyCard } from "./property-card";
import { PropertyEmptyState } from "./property-empty-state";
import { PropertyListingSkeleton } from "./property-listing-skeleton";

const ITEMS_PER_PAGE = 12;

export const PropertyListing = ({ status }: { status: ListingType }) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const { data: listings, isLoading } = useGetListings(status);

  const properties = useMemo(
    () => (listings ?? []).map(toPropertyItem),
    [listings],
  );

  const totalPages = Math.ceil(properties.length / ITEMS_PER_PAGE);

  const paginatedProperties = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = currentPage * ITEMS_PER_PAGE;

    return properties.slice(startIndex, endIndex);
  }, [currentPage, properties]);

  const addProperty = () => {
    router.push("/properties/list-property");
  };

  return (
    <Container>
      <Container
        className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between overflow-hidden rounded-2xl bg-s50 bg-cover bg-center px-6 py-5"
        style={{
          backgroundImage:
            "linear-gradient(90deg, color-mix(in srgb, var(--s400) 92%, transparent), color-mix(in srgb, var(--s500) 82%, transparent)), url('/property-background-bg.jpg')",
        }}
      >
        <Container className="space-y-1">
          <Text variant="h4" tone="inverted" >
            Add your properties
          </Text>

          <Text variant="body-sm" tone="inverted">
            List your properties and get real life actions and trackable
            engagements
          </Text>
        </Container>
        <Container>
          <Button className="text-sm mt-2 md:mt-0" shorter  leftIcon={<AddIcon size={14} />} onClick={addProperty}>
           <Text variant="action-button"> Add property</Text>
          </Button>
        </Container>
      </Container>

      {isLoading ? (
        <PropertyListingSkeleton />
      ) : paginatedProperties.length > 0 ? (
        <Container className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {paginatedProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </Container>
      ) : (
        <Container className="flex items-center justify-center py-16">
          <PropertyEmptyState onAddProperty={addProperty} />
        </Container>
      )}

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </Container>
  );
};
