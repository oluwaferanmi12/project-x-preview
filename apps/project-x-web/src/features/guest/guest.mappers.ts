import type { ListingResponse } from "@/features/home-owner/properties/types/property.types";
import type {
  GalleryMedia,
  GuestPropertyDetails,
} from "./guest.types";

export const PLACEHOLDER_IMAGE = "/guest/property-placeholder.png";

const PERIOD_MAP = {
  MONTHLY: "monthly",
  BIANNUAL: "bi-annually",
  ANNUALLY: "annually",
} as const;

const FURNISHING_LABEL = {
  FULLY_FURNISHED: "Fully furnished",
  SEMI_FURNISHED: "Semi furnished",
  NOT_FURNISHED: "Not furnished",
} as const;

const CONDITION_LABEL = {
  NEWLY_BUILT: "Newly Built",
  OLDER_PROPERTY: "Older Property",
} as const;

const formatDate = (value: string | null) =>
  value
    ? new Date(value).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "";

const formatLocation = (listing: ListingResponse) =>
  [listing.addressLine, listing.lgaName, listing.stateName]
    .filter(Boolean)
    .join(", ");

const sortedImages = (listing: ListingResponse) =>
  [...(listing.images ?? [])].sort((a, b) => a.position - b.position);

const listerRole = (listing: ListingResponse) =>
  listing.relationshipType === "AGENT" ? "Agent" : "House Owner";

const yesNo = (value: boolean | null) => (value ? "Yes" : "No");


export const toGalleryMedia = (listing: ListingResponse): GalleryMedia[] => {
  const images: GalleryMedia[] = sortedImages(listing).map((image, index) => ({
    id: `image-${index}`,
    type: "image",
    src: image.url,
  }));
  return listing.videoUrl
    ? [...images, { id: "video", type: "video", src: listing.videoUrl }]
    : images;
};

export const toGuestPropertyDetails = (
  listing: ListingResponse,
): GuestPropertyDetails => ({
  id: listing.id ?? "",
  price: listing.rentAmount ?? 0,
  period: PERIOD_MAP[listing.rentPaymentFrequency ?? "ANNUALLY"],
  date: formatDate(listing.createdAt),
  location: formatLocation(listing),
  type: listing.propertyTypeName ?? "",
  beds: listing.bedroomCount ?? 0,
  baths: listing.bathroomCount ?? 0,
  toilets: listing.toiletCount ?? 0,
  description: (listing.description ?? "").split(/\n+/).filter(Boolean),
  locationInfo: [
    { label: "State", value: listing.stateName ?? "-" },
    { label: "LGA", value: listing.lgaName ?? "-" },
    ...(listing.shareAddressWithSeekers && listing.addressLine
      ? [{ label: "Address", value: listing.addressLine }]
      : []),
    ...(listing.landmark
      ? [{ label: "Landmark", value: listing.landmark }]
      : []),
  ],
  overview: [
    { label: "Property Type", value: listing.propertyTypeName ?? "-" },
    { label: "Available Unit", value: String(listing.unitCount ?? "-") },
    {
      label: "Furnishing",
      value: listing.furnishingStatus
        ? FURNISHING_LABEL[listing.furnishingStatus]
        : "-",
    },
    {
      label: "Condition",
      value: listing.propertyCondition
        ? CONDITION_LABEL[listing.propertyCondition]
        : "-",
    },
    { label: "Bedrooms", value: String(listing.bedroomCount ?? "-") },
    { label: "Bathrooms", value: String(listing.bathroomCount ?? "-") },
    { label: "Toilets", value: String(listing.toiletCount ?? "-") },
    {
      label: "Water Source",
      value: (listing.waterSources ?? []).map((s) => s.name).join(", ") || "-",
    },
    {
      label: "Parking Space",
      value: listing.parkingAvailable ? "Available" : "Not available",
    },
    { label: "Fencing & Gated", value: yesNo(listing.fencedOrGated) },
  ],
  amenities: (listing.amenities ?? []).map((amenity) => ({
    icon: "✔️",
    label: amenity.name,
  })),
  propertyCode: listing.friendlyId ?? "",
  pricing: {
    rent: listing.rentAmount ?? 0,
    agency: listing.agencyFee ?? 0,
    caution: listing.cautionFee ?? 0,
    serviceCharge: listing.serviceCharge ?? 0,
  },
  // The listing payload only carries ownerId, so the lister's name isn't known.
  lister: {
    firstName: "Property",
    lastName: "Lister",
    role: listing.relationshipType === "AGENT" ? "Agent" : "Owner",
  },
});
