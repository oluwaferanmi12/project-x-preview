export type PropertyStatus = "draft" | "under-review" | "published" | "archived";

export type PropertyItem = {
  id: string;
  title: string;
  image?: string;
  status: PropertyStatus;
  step?: number;
  substep?: number;
  date: string;
  meta: {
    type: string;
    beds: number;
    baths: number;
    toilets: number;
  };
};

export const properties: PropertyItem[] = [
  {
    id: "1",
    title: "Property 01",
    status: "draft",
    step: 2,
    substep: 1,
    date: "5 Apr, 2026",
    meta: {
      type: "N/A",
      beds: 0,
      baths: 0,
      toilets: 0,
    },
  },
  {
    id: "2",
    title: "15 Adewale Street, Oke-Baal...",
    image: "/draft-property.png",
    status: "draft",
    step: 3,
    substep: 1,
    date: "5 Apr, 2026",
    meta: {
      type: "Apartment/Flat",
      beds: 3,
      baths: 3,
      toilets: 4,
    },
  },
  {
    id: "3",
    title: "15 Adewale Street, Oke-Baal...",
    image: "/draft-property.png",
    status: "draft",
    step: 3,
    substep: 1,
    date: "5 Apr, 2026",
    meta: {
      type: "Apartment/Flat",
      beds: 3,
      baths: 3,
      toilets: 4,
    },
  },
  {
    id: "4",
    title: "15 Adewale Street, Oke-Baal...",
    image: "/draft-property.png",
    status: "draft",
    step: 3,
    substep: 1,
    date: "5 Apr, 2026",
    meta: {
      type: "Apartment/Flat",
      beds: 3,
      baths: 3,
      toilets: 4,
    },
  },
  {
    id: "5",
    title: "15 Adewale Street, Oke-Baal...",
    image: "/draft-property.png",
    status: "draft",
    step: 3,
    substep: 1,
    date: "5 Apr, 2026",
    meta: {
      type: "Apartment/Flat",
      beds: 3,
      baths: 3,
      toilets: 4,
    },
  },
  {
    id: "6",
    title: "15 Adewale Street, Oke-Baal...",
    image: "/draft-property.png",
    status: "draft",
    step: 3,
    substep: 1,
    date: "5 Apr, 2026",
    meta: {
      type: "Apartment/Flat",
      beds: 3,
      baths: 3,
      toilets: 4,
    },
  },
  {
    id: "7",
    title: "15 Adewale Street, Oke-Baal...",
    image: "/draft-property.png",
    status: "draft",
    step: 3,
    substep: 1,
    date: "5 Apr, 2026",
    meta: {
      type: "Apartment/Flat",
      beds: 3,
      baths: 3,
      toilets: 4,
    },
  },
  {
    id: "8",
    title: "15 Adewale Street, Oke-Baal...",
    image: "/draft-property.png",
    status: "draft",
    step: 3,
    substep: 1,
    date: "5 Apr, 2026",
    meta: {
      type: "Apartment/Flat",
      beds: 3,
      baths: 3,
      toilets: 4,
    },
  },
  {
    id: "9",
    title: "15 Adewale Street, Oke-Baal...",
    image: "/draft-property.png",
    status: "draft",
    step: 3,
    substep: 1,
    date: "5 Apr, 2026",
    meta: {
      type: "Apartment/Flat",
      beds: 3,
      baths: 3,
      toilets: 4,
    },
  },
  {
    id: "10",
    title: "15 Adewale Street, Oke-Baal...",
    image: "/draft-property.png",
    status: "draft",
    step: 3,
    substep: 1,
    date: "5 Apr, 2026",
    meta: {
      type: "Apartment/Flat",
      beds: 3,
      baths: 3,
      toilets: 4,
    },
  },
  {
    id: "11",
    title: "15 Adewale Street, Oke-Baal...",
    image: "/draft-property.png",
    status: "draft",
    step: 3,
    substep: 1,
    date: "5 Apr, 2026",
    meta: {
      type: "Apartment/Flat",
      beds: 3,
      baths: 3,
      toilets: 4,
    },
  },
  {
    id: "12",
    title: "15 Adewale Street, Oke-Baal...",
    image: "/draft-property.png",
    status: "draft",
    step: 3,
    substep: 1,
    date: "5 Apr, 2026",
    meta: {
      type: "Apartment/Flat",
      beds: 3,
      baths: 3,
      toilets: 4,
    },
  },
  {
    id: "13",
    title: "15 Adewale Street, Oke-Baal...",
    image: "/draft-property.png",
    status: "draft",
    step: 3,
    substep: 1,
    date: "5 Apr, 2026",
    meta: {
      type: "Apartment/Flat",
      beds: 3,
      baths: 3,
      toilets: 4,
    },
  },
  {
    id: "14",
    title: "15 Adewale Street, Oke-Baal...",
    image: "/draft-property.png",
    status: "draft",
    step: 3,
    substep: 1,
    date: "5 Apr, 2026",
    meta: {
      type: "Apartment/Flat",
      beds: 3,
      baths: 3,
      toilets: 4,
    },
  },
];