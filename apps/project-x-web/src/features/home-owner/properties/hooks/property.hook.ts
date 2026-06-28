import { useMutation, useQuery } from "@tanstack/react-query";
import { createListingService, getDraftListingService } from "../services/property.service";

export const useCreatePropertyMutation = () => {
  return useMutation({
    mutationFn: () => createListingService(),
  });
};

export const useGetDraftListing = (id: string | null) => {
  return useQuery({
    queryKey: ["draft-listing", id],
    queryFn: () => getDraftListingService(id!),
    enabled: !!id,
  });
};
