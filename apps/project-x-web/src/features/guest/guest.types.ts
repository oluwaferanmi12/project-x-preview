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
