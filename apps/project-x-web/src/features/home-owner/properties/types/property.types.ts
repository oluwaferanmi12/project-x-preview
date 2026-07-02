export type DraftProperty = Partial<CreateProperty>;

export type CreateProperty = {
  id: string;
  relationshipType: string;
  propertyType: string;
  bedroomCount: number;
  bathroomCount: number;
  toiletCount: number;
  propertyCondition: string;
  unitCount: number;
  description: string;
  waterSource: string;
  parkingAvailable: boolean;
  fencedOrGated: boolean;
  renovated: boolean;
  furnishingStatus: string;
  stateId: string;
  lgaId: string;
  addressLine: string;
  landmark: string;
  latitude: number;
  longitude: number;
  placeId: string;
  shareAddressWithSeekers: boolean;
  rentAmount: number;
  rentPaymentFrequency: string;
  agencyFee: number;
  legalAgreementFee: number;
  cautionFee: number;
  serviceCharge: number;
  proofOfOwnershipUrl: string;
  amenityIds: string[];
  images: {
    publicId: string;
    optimizedUrl: string;
  }[];
  videoUrl: string;
};
