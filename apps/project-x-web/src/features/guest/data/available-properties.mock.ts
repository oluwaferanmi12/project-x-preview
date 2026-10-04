import { GuestProperty } from "../guest.types";

const base: Omit<GuestProperty, "id" | "period" | "listerRole"> = {
  image: "/guest/property-placeholder.png",
  location: "Oke-Baale Area, Osogbo, Osun State.",
  price: 12000000,
  type: "Apartment/Flat",
  beds: 3,
  baths: 3,
  listerInitials: "MS",
  date: "5 Apr, 2026",
};

const variants: Pick<GuestProperty, "period" | "listerRole">[] = [
  { period: "bi-annually", listerRole: "Agent" },
  { period: "annually", listerRole: "House Owner" },
  { period: "monthly", listerRole: "House Owner" },
  { period: "annually", listerRole: "Agent" },
  { period: "annually", listerRole: "House Owner" },
  { period: "annually", listerRole: "Agent" },
  { period: "monthly", listerRole: "House Owner" },
  { period: "annually", listerRole: "House Owner" },
];

export const AVAILABLE_PROPERTIES_MOCK: GuestProperty[] = variants.map(
  (variant, index) => ({ ...base, ...variant, id: String(index + 1) }),
);
