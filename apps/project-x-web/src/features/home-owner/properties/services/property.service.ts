import { apiClient } from "@/services";
import { DraftProperty } from "../types/property.types";

export const createListingService = async () => {
  const result = await apiClient.post("/listings/draft");
  return result.data;
};

export const getDraftListingService = async (id: string): Promise<DraftProperty> => {
  const result = await apiClient.get(`/listings/draft/${id}`);
  return result.data;
};
