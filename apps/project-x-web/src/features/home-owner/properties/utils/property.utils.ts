import { DraftProperty } from "../types/property.types";

export const resolveDropOffStep = (payload: DraftProperty): number => {
  if (!payload.relationshipType || !payload.propertyType) return 1;
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
    !payload.waterSource ||
    payload.parkingAvailable === undefined ||
    payload.fencedOrGated === undefined ||
    !payload.amenityIds?.length
  ) return 5;
  if (!payload.images?.length || !payload.proofOfOwnershipUrl) return 6;
  return 7;
};
