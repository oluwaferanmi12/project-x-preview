import type { StaticImageData } from "next/image";

export interface PropertySearchFilters {
  stateId: string;
  lgaId: string;
  area: string;
  propertyTypeIds: string[];
  minRent: number | null;
  maxRent: number | null;
  bedrooms: string;
  bathrooms: string;
  toilets: string;
}

export type SearchFilterKey = "location" | "propertyType" | "bedroom" | "bathToilet" | "rent";

export interface GuestProperty {
  id: string;
  image: string;
  location: string;
  price: number;
  period: "annually" | "bi-annually" | "monthly";
  type: string;
  beds: number;
  baths: number;
  listerRole: "Agent" | "House Owner";
  listerInitials: string;
  date: string;
}

export type PropertyDetailsTab = "details" | "reviews";

export interface GuestPropertyDetails {
  id: string;
  price: number;
  period: GuestProperty["period"];
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
