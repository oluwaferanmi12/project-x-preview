export interface StateType {
  id: string;
  name: string;
}

export type FolderType = "properties";

export interface MediaResponse {
  publicId: string;
  originalUrl: string;
  optimizedUrl: string;
  resourceType: string;
  format: string;
}
