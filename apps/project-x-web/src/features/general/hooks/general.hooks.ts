import { useMutation, useQuery } from "@tanstack/react-query";
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
    meta: { errorTitle: "Could not load states" },
  });
};

export const useGetLGA = (id: string) => {
  return useQuery({
    queryKey: ["lga", id],
    queryFn: () => getLocalGovt(id),
    enabled: !!id,
    meta: { errorTitle: "Could not load local government areas" },
  });
};

export const useUploadImage = (
  sc: (val: { publicId: string; optimizedUrl: string }) => void,
) => {
  return useMutation({
    mutationFn: (payload: { file: File; folderType: FolderType }) =>
      uploadImage(payload),
    onSuccess: sc,
    meta: { errorTitle: "Upload failed" },
  });
};

export const useUploadVideo = (
  sc: (val: { publicId: string; optimizedUrl: string }) => void,
) => {
  return useMutation({
    mutationFn: (payload: { file: File; folderType: FolderType }) =>
      uploadVideo(payload),
    onSuccess: sc,
    meta: { errorTitle: "Upload failed" },
  });
};
