import thumbnail from "@/assets/images/image-thumbnail.png";
import { GalleryMedia, GuestPropertyDetails } from "../guest.types";

// Placeholder media until the listing endpoint returns real photos/video.
export const GALLERY_MEDIA_MOCK: GalleryMedia[] = Array.from(
  { length: 9 },
  (_, index) => ({
    id: `media-${index + 1}`,
    type: index === 8 ? "video" : "image",
    src: thumbnail,
  }),
);

// Placeholder until the guest property-details endpoint is wired up.
export const getPropertyDetailsMock = (id: string): GuestPropertyDetails => ({
  id,
  price: 410000,
  period: "bi-annually",
  date: "5 Apr, 2026",
  location: "Oke-Baale Area, Osogbo, Osun State.",
  type: "Apartment/Flat",
  beds: 3,
  baths: 3,
  toilets: 4,
  description: [
    "This well-maintained 3-bedroom apartment is located in a peaceful residential area of Osogbo. The property features spacious rooms, tiled floors, and good ventilation throughout the apartment.",
    "The living room is large and bright, with enough space for a full seating arrangement and dining area. The kitchen comes fitted with cabinets and a dedicated storage area. Each bedroom has its own bathroom, while the extra guest toilet is conveniently located near the living area.",
    "The compound is gated and fenced, providing added security and privacy for residents. The property also has a steady water supply and a prepaid electricity meter.",
    "This apartment is ideal for families or working professionals looking for comfort, accessibility, and a secure environment.",
  ],
  locationInfo: [
    { label: "State", value: "Osun" },
    { label: "Area", value: "Oke-Baale Area" },
    { label: "LGA", value: "Osun" },
    {
      label: "Address",
      value: "15 Adewale Street, Oke-Baale Area, Osogbo, Osun State",
    },
    { label: "Landmark", value: "Close to major road and local market" },
  ],
  overview: [
    { label: "Property Type", value: "Apartment/Flat" },
    { label: "Available Unit", value: "6/6" },
    { label: "Furnishing", value: "Not furnished" },
    { label: "Condition", value: "Newly Built" },
    { label: "Bedrooms", value: "3" },
    { label: "Bathrooms", value: "3" },
    { label: "Toilets", value: "4" },
    { label: "Water Source", value: "Borehole, Well, Water Board" },
    { label: "Parking Space", value: "Available" },
    { label: "Fencing & Gated", value: "Yes" },
  ],
  amenities: [
    { icon: "💡", label: "24hrs Electricity" },
    { icon: "💂", label: "Security Guard(s)" },
    { icon: "📹", label: "CCTV" },
    { icon: "🚪", label: "Regulated Entry" },
    { icon: "🌳", label: "Park Area/Playground" },
    { icon: "🎬", label: "Cinema" },
    { icon: "🛗", label: "Elevator" },
    { icon: "🏊", label: "Swimming Pool" },
    { icon: "🏀", label: "Basketball Court" },
    { icon: "⚽", label: "Football Pitch" },
    { icon: "🎾", label: "Tennis Lawn" },
    { icon: "🗑️", label: "Waste Management" },
    { icon: "🔋", label: "Inverter" },
    { icon: "🌐", label: "Internet/WiFi" },
    { icon: "🧑‍🔧", label: "Facility Manager" },
    { icon: "🏠", label: "Balcony" },
  ],
  propertyCode: "PTL-1234",
  pricing: { rent: 300000, agency: 30000, caution: 30000, serviceCharge: 50000 },
  lister: { firstName: "Micheal", lastName: "Scofield", role: "Agent" },
});
