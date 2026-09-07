import { apiClient } from "@/services";
import { FolderType, MediaResponse, StateType } from "./general.types";

export const getStates = async (): Promise<StateType[]> => {
  const result = await apiClient.get("/locations/states");
  return result.data;
};

export const getLocalGovt = async (id: string): Promise<StateType[]> => {
  const result = await apiClient.get(`/locations/states/${id}/lgas`);
  return result.data;
};

export const uploadImage = async ({
  file,
  folderType,
}: {
  file: File;
  folderType: FolderType;
}): Promise<MediaResponse> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("folder", folderType);

  const result = await apiClient.post("/files/images", formData);
  return result.data.data;
};

export const uploadVideo = async ({
  file,
  folderType,
}: {
  file: File;
  folderType: FolderType;
}): Promise<MediaResponse> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("folder", folderType);

  const result = await apiClient.post("files/videos", formData);
  return result.data.data;
};
