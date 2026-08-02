import { useMutation, useQuery } from "@tanstack/react-query";
import { useToast } from "@repo/ui";
import {
  getLocalGovt,
  getStates,
  uploadImage,
  uploadVideo,
} from "../general.service";
import { FolderType } from "../general.types";

export const useGetStates = () => {
  return useQuery({
    queryKey: ["states"],
    queryFn: () => getStates(),
  });
};

export const useGetLGA = (id: string) => {
  return useQuery({
    queryKey: ["lga", id],
    queryFn: () => getLocalGovt(id),
    enabled: !!id,
  });
};

export const useUploadImage = (
  sc: (val: { publicId: string; optimizedUrl: string }) => void,
) => {
  const { show } = useToast();
  return useMutation({
    mutationFn: (payload: { file: File; folderType: FolderType }) =>
      uploadImage(payload),
    onSuccess: sc,
    onError: (error) => {
      show(
        "Upload failed",
        error instanceof Error ? error.message : "An error occurred",
        "error",
      );
    },
  });
};

export const useUploadVideo = (
  sc: (val: { publicId: string; optimizedUrl: string }) => void,
) => {
  const { show } = useToast();
  return useMutation({
    mutationFn: (payload: { file: File; folderType: FolderType }) =>
      uploadVideo(payload),
    onSuccess: sc,
    onError: (error) => {
      show(
        "Upload failed",
        error instanceof Error ? error.message : "An error occurred",
        "error",
      );
    },
  });
};
