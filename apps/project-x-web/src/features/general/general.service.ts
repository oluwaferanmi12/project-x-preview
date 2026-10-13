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

const newIdempotencyKey = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

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

  const result = await apiClient.post("/files/images", formData, {
    headers: { "Idempotency-Key": newIdempotencyKey() },
  });
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

  const result = await apiClient.post("files/videos", formData, {
    headers: { "Idempotency-Key": newIdempotencyKey() },
  });
  return result.data.data;
};
