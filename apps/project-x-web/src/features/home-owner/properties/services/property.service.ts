import { apiClient } from "@/services";
import {
  AmenitiesTypes,
  CreateProperty,
  ListingNuggetType,
  ListingResponse,
  ListingType,
} from "../types/property.types";

export const getListing = async ({
  status,
}: {
  status: ListingType;
}): Promise<ListingResponse[]> => {
  const result = await apiClient.get(`/listings?status=${status}`);
  return result.data.data;
};

export const createListingService = async (
  createProperty: Partial<CreateProperty>,
) => {
  const result = await apiClient.post("/listings/draft", createProperty);
  return result.data.data;
};

export const getListingService = async (
  id: string,
): Promise<ListingResponse> => {
  const result = await apiClient.get(`/listings/${id}`);
  return result.data.data;
};

export const submitListingService = async (id: string) => {
  const result = await apiClient.patch(`/listings/${id}/submit`);
  return result.data.data;
};

export const getPropertyTypes = async (): Promise<ListingNuggetType[]> => {
  const result = await apiClient.get("/property-types");
  return result.data.data;
};

export const getWaterSources = async (): Promise<ListingNuggetType[]> => {
  const result = await apiClient.get("/water-sources");
  return result.data.data;
};

export const getAmenities = async (): Promise<AmenitiesTypes[]> => {
  const result = await apiClient.get("/amenities");
  return result.data.data;
};

export const generateSummaryWithAi = async (listingId: string) => {
  const result = await apiClient.post(
    `/listings/${listingId}/description/generate`,
  );
  return result.data.data;
};
