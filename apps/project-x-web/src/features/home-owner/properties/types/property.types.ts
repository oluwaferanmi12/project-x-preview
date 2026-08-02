import { MediaResponse } from "@/features/general/general.types";

export type RelationshipType = "AGENT" | "OWNER";

export type PropertyCondition = "NEWLY_BUILT" | "OLDER_PROPERTY";

export type FurnishingStatus =
  | "FULLY_FURNISHED"
  | "SEMI_FURNISHED"
  | "NOT_FURNISHED";

export type RentPaymentFrequency = "MONTHLY" | "BIANNUAL" | "ANNUALLY";

export type DraftProperty = Partial<CreateProperty>;

export type PropertyImage = Omit<MediaResponse, "originalUrl">;

export type CreateProperty = {
  id: string | null;
  relationshipType: RelationshipType | null;
  propertyTypeId: string | null;
  bedroomCount: number | null;
  bathroomCount: number | null;
  toiletCount: number | null;
  propertyCondition: PropertyCondition | null;
  unitCount: number | null;
  description: string | null;
  waterSourceId: string[] | null;
  parkingAvailable: boolean | null;
  fencedOrGated: boolean | null;
  renovated: boolean | null;
  furnishingStatus: FurnishingStatus | null;
  stateId: string | null;
  lgaId: string | null;
  addressLine: string | null;
  landmark: string | null;
  latitude: number | null;
  longitude: number | null;
  placeId: string | null;
  shareAddressWithSeekers: boolean | null;
  rentAmount: number | null;
  rentPaymentFrequency: RentPaymentFrequency | null;
  agencyFee: number | null;
  legalAgreementFee: number | null;
  cautionFee: number | null;
  serviceCharge: number | null;
  proofOfOwnershipUrl: string | null;
  amenityIds: string[] | null;
  images: PropertyImage[] | null;
  videoUrl: string | null;
  videoPublicId: string | null;
};

export interface ListingNuggetType {
  id: string;
  code: string;
  name: string;
  description: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export type ListingResponse = {
  id: string | null;
  relationshipType: RelationshipType | null;
  propertyTypeId: string | null;
  propertyTypeName: string | null;
  bedroomCount: number | null;
  bathroomCount: number | null;
  toiletCount: number | null;
  propertyCondition: PropertyCondition | null;
  unitCount: number | null;
  description: string | null;
  waterSourceId: string | null;
  waterSourceName: string | null;
  parkingAvailable: boolean | null;
  fencedOrGated: boolean | null;
  renovated: boolean | null;
  furnishingStatus: FurnishingStatus | null;
  stateId: string | null;
  stateName: string | null;
  lgaId: string | null;
  lgaName: string | null;
  addressLine: string | null;
  landmark: string | null;
  latitude: number | null;
  longitude: number | null;
  placeId: string | null;
  shareAddressWithSeekers: boolean | null;
  rentAmount: number | null;
  rentPaymentFrequency: RentPaymentFrequency | null;
  status: string | null;
  agencyFee: number | null;
  legalAgreementFee: number | null;
  cautionFee: number | null;
  serviceCharge: number | null;
  proofOfOwnershipUrl: string | null;
  amenities: { id: string; name: string }[] | null;
  images: PropertyImage[] | null;
  videoUrl: string | null;
  ownerId: string | null;
  createdAt: string | null;
  updatedAt: string | null;
};

export interface AmenitiesTypes {
  id: string;
  name: string;
  imageUrl: string;
  imagePublicId: string;
}
