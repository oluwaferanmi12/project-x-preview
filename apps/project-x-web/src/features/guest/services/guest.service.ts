import { apiClient } from "@/services";
import type { ListingResponse } from "@/features/home-owner/properties/types/property.types";

export interface PublishedListingsPage {
  listings: ListingResponse[];
  totalPages: number;
}

export const LISTINGS_PAGE_SIZE = 10;

// The paginated envelope isn't pinned down in the contract, so accept either a
// bare array or an object wrapping the rows with common pagination metadata.
const normalizePage = (
  data: unknown,
  pageSize: number,
): PublishedListingsPage => {
  if (Array.isArray(data)) {
    return { listings: data, totalPages: 1 };
  }
  const body = (data ?? {}) as Record<string, unknown>;
  const rows = [body.content, body.items, body.listings, body.data].find(
    Array.isArray,
  ) as ListingResponse[] | undefined;
  const listings = rows ?? [];
  const total = Number(body.totalElements ?? body.totalItems ?? body.total);
  const totalPages = Number(body.totalPages ?? body.pageCount);
  return {
    listings,
    totalPages:
      totalPages > 0
        ? totalPages
        : total > 0
          ? Math.ceil(total / pageSize)
          : 1,
  };
};

export const getPublishedListings = async ({
  page,
  pageSize = LISTINGS_PAGE_SIZE,
}: {
  page: number;
  pageSize?: number;
}): Promise<PublishedListingsPage> => {
  const result = await apiClient.get("/listings", {
    params: { status: "PUBLISHED", page, pageSize },
  });
  return normalizePage(result.data.data, pageSize);
};

export const getPublishedListing = async (
  id: string,
): Promise<ListingResponse> => {
  const result = await apiClient.get(`/listings/${id}`);
  return result.data.data;
};
