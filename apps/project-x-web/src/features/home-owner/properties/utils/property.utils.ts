import {
  DraftProperty,
  FurnishingStatus,
  ListingResponse,
  PropertyCondition,
  PropertyImage,
  RentPaymentFrequency,
} from "../types/property.types";

const FURNISHING_STATUS_LABELS: Record<FurnishingStatus, string> = {
  FULLY_FURNISHED: "Fully Furnished",
  SEMI_FURNISHED: "Semi Furnished",
  NOT_FURNISHED: "Not Furnished",
};

const PROPERTY_CONDITION_LABELS: Record<PropertyCondition, string> = {
  NEWLY_BUILT: "Newly Built",
  OLDER_PROPERTY: "Older Property",
};

const RENT_PAYMENT_FREQUENCY_LABELS: Record<RentPaymentFrequency, string> = {
  MONTHLY: "Monthly",
  BIANNUAL: "Biannually",
  ANNUALLY: "Annually",
};

export const formatFurnishingStatus = (
  value?: FurnishingStatus | null,
): string | null => (value ? FURNISHING_STATUS_LABELS[value] : null);

export const formatPropertyCondition = (
  value?: PropertyCondition | null,
): string | null => (value ? PROPERTY_CONDITION_LABELS[value] : null);

export const formatRentPaymentFrequency = (
  value?: RentPaymentFrequency | null,
): string | null => (value ? RENT_PAYMENT_FREQUENCY_LABELS[value] : null);

const toPropertyImage = (image: {
  url: string;
  publicId: string | null;
}): PropertyImage => ({
  publicId: image.publicId ?? "",
  optimizedUrl: image.url,
  resourceType: "image",
  format: image.url.split(".").pop()?.split(/[?#]/)[0] ?? "",
});

export const DEFAULT_DRAFT_PROPERTY: DraftProperty = {
  id: null,
  relationshipType: null,
  propertyTypeId: null,
  bedroomCount: null,
  bathroomCount: null,
  toiletCount: null,
  propertyCondition: null,
  unitCount: null,
  description: null,
  waterSourceIds: null,
  parkingAvailable: null,
  fencedOrGated: null,
  renovated: null,
  furnishingStatus: null,
  stateId: null,
  lgaId: null,
  addressLine: null,
  landmark: null,
  latitude: null,
  longitude: null,
  placeId: null,
  shareAddressWithSeekers: null,
  rentAmount: null,
  rentPaymentFrequency: null,
  agencyFee: null,
  legalAgreementFee: null,
  cautionFee: null,
  serviceCharge: null,
  proofOfOwnershipUrl: null,
  amenityIds: null,
  images: null,
  videoUrl: null,
  videoPublicId: null,
};

export const mapListingResponseToDraft = (
  response: ListingResponse,
): DraftProperty => ({
  id: response.id,
  relationshipType: response.relationshipType,
  propertyTypeId: response.propertyTypeId,
  bedroomCount: response.bedroomCount,
  bathroomCount: response.bathroomCount,
  toiletCount: response.toiletCount,
  propertyCondition: response.propertyCondition,
  unitCount: response.unitCount,
  description: response.description,
  waterSourceIds: response.waterSources?.length ? response.waterSources.map((ws) => ws.id) : null,
  parkingAvailable: response.parkingAvailable,
  fencedOrGated: response.fencedOrGated,
  renovated: response.renovated,
  furnishingStatus: response.furnishingStatus,
  stateId: response.stateId,
  lgaId: response.lgaId,
  addressLine: response.addressLine,
  landmark: response.landmark,
  latitude: response.latitude,
  longitude: response.longitude,
  placeId: response.placeId,
  shareAddressWithSeekers: response.shareAddressWithSeekers,
  rentAmount: response.rentAmount,
  rentPaymentFrequency: response.rentPaymentFrequency,
  agencyFee: response.agencyFee,
  legalAgreementFee: response.legalAgreementFee,
  cautionFee: response.cautionFee,
  serviceCharge: response.serviceCharge,
  proofOfOwnershipUrl: response.proofOfOwnershipUrl,
  amenityIds: response.amenities?.map((amenity) => amenity.id) ?? null,
  images: response.images?.map(toPropertyImage) ?? null,
  videoUrl: response.videoUrl,
  videoPublicId: null,
});

export const normalizeDraftForSave = (draft: DraftProperty): DraftProperty => ({
  ...draft,
  amenityIds: draft.amenityIds?.length ? draft.amenityIds : null,
  images: draft.images?.length ? draft.images : null,
  waterSourceIds: draft.waterSourceIds?.length ? draft.waterSourceIds : null,
});

const STEP_COMPLETENESS_CHECKS: Record<
  number,
  (payload: DraftProperty) => boolean
> = {
  1: (payload) => !!payload.relationshipType && !!payload.propertyTypeId,
  2: (payload) =>
    !!payload.propertyCondition &&
    !!payload.furnishingStatus &&
    !!payload.bedroomCount &&
    !!payload.bathroomCount &&
    !!payload.toiletCount &&
    !!payload.unitCount &&
    !!payload.description,
  3: (payload) => !!payload.stateId && !!payload.lgaId && !!payload.addressLine,
  4: (payload) => !!payload.rentAmount && !!payload.rentPaymentFrequency,
  5: (payload) =>
    !!payload.waterSourceIds?.length &&
    payload.parkingAvailable != null &&
    payload.fencedOrGated != null &&
    !!payload.amenityIds?.length,
  6: (payload) => !!payload.images?.length && !!payload.proofOfOwnershipUrl,
};

// Each step's completeness is checked independently rather than as a
// waterfall, so a gap in an earlier step (e.g. a missing description) doesn't
// force the user back past steps they've already finished. Resumes at the
// step right after the furthest one that's fully filled in.
export const resolveDropOffStep = (payload: DraftProperty): number => {
  let furthestCompleteStep = 0;
  for (let step = 1; step <= 6; step++) {
    if (STEP_COMPLETENESS_CHECKS[step](payload)) {
      furthestCompleteStep = step;
    }
  }
  return Math.min(furthestCompleteStep + 1, 7);
};
