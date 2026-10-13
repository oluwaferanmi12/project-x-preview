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

export type SearchFilterKey = "location" | "propertyType" | "bedroom" | "rent";

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
