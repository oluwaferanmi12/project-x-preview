"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import {
  getPublishedListing,
  getPublishedListings,
} from "../services/guest.service";

export const useGetPublishedListings = (page: number) => {
  return useQuery({
    queryKey: ["guest-listings", page],
    queryFn: () => getPublishedListings({ page }),
    placeholderData: keepPreviousData,
    meta: { errorTitle: "Could not load properties" },
  });
};

export const useGetPublishedListing = (id: string) => {
  return useQuery({
    queryKey: ["guest-listing", id],
    queryFn: () => getPublishedListing(id),
    meta: { errorTitle: "Could not load property" },
  });
};
