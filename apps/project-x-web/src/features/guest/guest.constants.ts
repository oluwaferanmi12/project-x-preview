import { PropertySearchFilters } from "./guest.types";

export const ANY_OPTION = "any";

export const DEFAULT_SEARCH_FILTERS: PropertySearchFilters = {
  stateId: "",
  lgaId: "",
  area: "",
  propertyTypeIds: [],
  minRent: null,
  maxRent: null,
  bedrooms: ANY_OPTION,
  bathrooms: ANY_OPTION,
  toilets: ANY_OPTION,
};

export const BEDROOM_OPTIONS = [
  { label: "Any", value: ANY_OPTION },
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5+", value: "5+" },
];

export const TOILET_OPTIONS = [
  { label: "Any", value: ANY_OPTION },
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4+", value: "4+" },
];

export const HERO_PINS = [
  { top: "36%", left: "56%" },
  { top: "56%", left: "26%" },
  { top: "74%", left: "13%" },
  { top: "28%", left: "87%" },
  { top: "62%", left: "88%" },
  { top: "50%", left: "70%" },
];
