"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { useToast } from "@repo/ui";
import {
  createListingService,
  getAmenities,
  getListing,
  getListingService,
  getPropertyTypes,
  getWaterSources,
} from "../services/property.service";
import { CreateProperty } from "../types/property.types";

export const useCreatePropertyMutation = (sc: (val: any) => void) => {
  const { show } = useToast();
  return useMutation({
    mutationFn: (payload: Partial<CreateProperty>) =>
      createListingService(payload),
    onSuccess: sc,
    onError: (error) => {
      console.log(error.message, "Error message");
      console.log(error instanceof Error);
      show(
        "Failed to save draft",
        error?.message ?? "An error occurred",
        "error",
      );
    },
  });
};

export const useGetListingById = (id: string | null) => {
  return useQuery({
    queryKey: ["listing", id],
    queryFn: () => getListingService(id!),
    enabled: !!id,
  });
};

export const useGetListings = () => {
  return useQuery({
    queryKey: ["listing"],
    queryFn: () => getListing(),
  });
};

export const useGetWaterSources = () => {
  return useQuery({
    queryKey: ["water-sources"],
    queryFn: () => getWaterSources(),
  });
};

export const useGetPropertyTypes = () => {
  return useQuery({
    queryKey: ["property-sources"],
    queryFn: () => getPropertyTypes(),
  });
};

export const useGetAmenities = () => {
  return useQuery({
    queryKey: ["amenities"],
    queryFn: () => getAmenities(),
  });
};
