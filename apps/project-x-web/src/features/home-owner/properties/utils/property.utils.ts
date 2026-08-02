import { DraftProperty, ListingResponse } from "../types/property.types";

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
  waterSourceId: null,
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
  waterSourceId: response.waterSourceId ? [response.waterSourceId] : null,
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
  images: response.images,
  videoUrl: response.videoUrl,
  videoPublicId: null,
});

export const normalizeDraftForSave = (
  draft: DraftProperty,
): DraftProperty => ({
  ...draft,
  amenityIds: draft.amenityIds?.length ? draft.amenityIds : null,
  images: draft.images?.length ? draft.images : null,
});

export const resolveDropOffStep = (payload: DraftProperty): number => {
  if (!payload.relationshipType || !payload.propertyTypeId) return 1;
  if (
    !payload.propertyCondition ||
    !payload.furnishingStatus ||
    !payload.bedroomCount ||
    !payload.bathroomCount ||
    !payload.toiletCount ||
    !payload.unitCount ||
    !payload.description
  ) return 2;
  if (!payload.stateId || !payload.lgaId || !payload.addressLine) return 3;
  if (!payload.rentAmount || !payload.rentPaymentFrequency) return 4;
  if (
    !payload.waterSourceId ||
    payload.parkingAvailable == null ||
    payload.fencedOrGated == null ||
    !payload.amenityIds?.length
  ) return 5;
  if (!payload.images?.length || !payload.proofOfOwnershipUrl) return 6;
  return 7;
};
