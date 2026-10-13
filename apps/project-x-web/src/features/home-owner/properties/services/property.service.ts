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

const getIdempotencyKey = (id: string) => {
  const storageKey = `idempotency-key:submit:${id}`;
  try {
    const existing = sessionStorage.getItem(storageKey);
    if (existing) return existing;
  } catch {}
  const key =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}-${id}`;
  try {
    sessionStorage.setItem(storageKey, key);
  } catch {}
  return key;
};

const getOrCreateDraftKey = () => {
  const storageKey = "idempotency-key:draft:create";
  try {
    const existing = sessionStorage.getItem(storageKey);
    if (existing) return existing;
  } catch {}
  const key =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}-draft`;
  try {
    sessionStorage.setItem(storageKey, key);
  } catch {}
  return key;
};

export const createListingService = async (
  createProperty: Partial<CreateProperty>,
) => {
  const draftId = (createProperty as { id?: string | null })?.id;
  const idempotencyKey = draftId
    ? getIdempotencyKey(draftId)
    : getOrCreateDraftKey();
  const result = await apiClient.post("/listings/draft", createProperty, {
    headers: { "Idempotency-Key": idempotencyKey },
  });
  return result.data.data;
};

export const getListingService = async (
  id: string,
): Promise<ListingResponse> => {
  const result = await apiClient.get(`/listings/${id}`);
  return result.data.data;
};

export const submitListingService = async (id: string) => {
  const result = await apiClient.patch(`/listings/${id}/submit`, null, {
    headers: { "Idempotency-Key": getIdempotencyKey(id) },
  });
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
