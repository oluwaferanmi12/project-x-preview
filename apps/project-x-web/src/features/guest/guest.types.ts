import type { StaticImageData } from "next/image";
import type { ListingResponse } from "@/features/home-owner/properties/types/property.types";

export interface GuestPropertyOwner {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string | null;
}

/** A listing from the public /properties list: the full listing plus its owner and cover image. */
export interface GuestPropertyListing extends ListingResponse {
  owner: GuestPropertyOwner;
  coverImageUrl: string;
  neighbourhood: string;
}

export type PropertyDetailsTab = "details" | "reviews";

export interface GuestPropertyDetails {
  id: string;
  price: number;
  period: "annually" | "bi-annually" | "monthly";
  date: string;
  location: string;
  type: string;
  beds: number;
  baths: number;
  toilets: number;
  description: string[];
  locationInfo: { label: string; value: string }[];
  overview: { label: string; value: string }[];
  amenities: { icon: string; label: string }[];
  propertyCode: string;
  pricing: {
    rent: number;
    agency: number;
    caution: number;
    serviceCharge: number;
  };
  lister: { firstName: string; lastName: string; role: "Agent" | "Owner" };
}

export interface GalleryMedia {
  id: string;
  type: "image" | "video";
  src: string | StaticImageData;
}

export interface Coverage {
  stateId: string;
  stateName: string;
  displayName: string;
  mapKey: string;
  imageUrl: string;
  availableListingCount: number;
}
