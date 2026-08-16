"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createListingService,
  getAmenities,
  getListing,
  getListingService,
  getPropertyTypes,
  getWaterSources,
  submitListingService,
} from "../services/property.service";
import { CreateProperty } from "../types/property.types";

export const useCreatePropertyMutation = (sc: (val: any) => void) => {
  return useMutation({
    mutationFn: (payload: Partial<CreateProperty>) =>
      createListingService(payload),
    onSuccess: sc,
    meta: { errorTitle: "Failed to save draft" },
  });
};

export const useSubmitPropertyMutation = (sc: (val: any) => void) => {
  return useMutation({
    mutationFn: (id: string) => submitListingService(id),
    onSuccess: sc,
    meta: { errorTitle: "Failed to submit listing" },
  });
};

export const useGetListingById = (id: string | null) => {
  return useQuery({
    queryKey: ["listing", id],
    queryFn: () => getListingService(id!),
    enabled: !!id,
    meta: { errorTitle: "Could not load listing" },
  });
};

export const useGetListings = () => {
  return useQuery({
    queryKey: ["listing"],
    queryFn: () => getListing(),
    meta: { errorTitle: "Could not load listings" },
  });
};

export const useGetWaterSources = () => {
  return useQuery({
    queryKey: ["water-sources"],
    queryFn: () => getWaterSources(),
    meta: { errorTitle: "Could not load water sources" },
  });
};

export const useGetPropertyTypes = () => {
  return useQuery({
    queryKey: ["property-sources"],
    queryFn: () => getPropertyTypes(),
    meta: { errorTitle: "Could not load property types" },
  });
};

export const useGetAmenities = () => {
  return useQuery({
    queryKey: ["amenities"],
    queryFn: () => getAmenities(),
    meta: { errorTitle: "Could not load amenities" },
  });
};
