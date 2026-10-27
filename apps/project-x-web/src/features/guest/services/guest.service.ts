import { apiClient } from "@/services";
import type { ListingResponse } from "@/features/home-owner/properties/types/property.types";
import { Coverage, GuestPropertyListing } from "../guest.types";

export const LISTINGS_PAGE_SIZE = 10;

export const getPublishedListings = async ({
  page,
  pageSize = LISTINGS_PAGE_SIZE,
}: {
  page: number;
  pageSize?: number;
}): Promise<GuestPropertyListing[]> => {
  const result = await apiClient.get("/properties", {
    params: { status: "PUBLISHED", page, pageSize },
  });
  return result.data.data;
};

export const getPublishedListing = async (
  id: string,
): Promise<ListingResponse> => {
  const result = await apiClient.get(`/properties/${id}`);
  return result.data.data;
};

export const getCoverage = async (): Promise<Coverage[]> => {
  const result = await apiClient.get("/coverage/states");
  return result.data.data;
};
