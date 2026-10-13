import { useEffect, useRef, useState } from "react";
import {
  useUploadImage,
  useUploadVideo,
} from "@/features/general/hooks/general.hooks";
import { DraftProperty, PropertyImage } from "../types/property.types";
import { useGenerateSummaryWithAi } from "./property.hook";

export const useStepSix = (
  handleUpdateDraft: (updates: Partial<DraftProperty>) => void,
  payload?: DraftProperty,
  onVideoUploadingChange?: (isUploading: boolean) => void,
) => {
  const [idImage, setIdImage] = useState<string | null>(null);
  const [ownershipImage, setOwnershipImage] = useState<string | null>(
    payload?.proofOfOwnershipUrl ?? null,
  );
  const [video, setVideo] = useState<string | null>(payload?.videoUrl ?? null);

  const dedupeImages = (imgs: PropertyImage[]) => {
    const seen = new Set<string>();
    return imgs.filter((img) => {
      const key = img.publicId || img.optimizedUrl;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  };

  const buildSeededImages = (imgs?: PropertyImage[] | null) => {
    const seeded: (string | null)[] = Array(9).fill(null);
    const deduped = imgs ? dedupeImages(imgs) : [];
    deduped.forEach((img, i) => {
      if (i < seeded.length) seeded[i] = img.optimizedUrl;
    });
    return seeded;
  };
  const buildSeededUploaded = (imgs?: PropertyImage[] | null) => {
    const seeded: (PropertyImage | null)[] = Array(9).fill(null);
    const deduped = imgs ? dedupeImages(imgs) : [];
    deduped.forEach((img, i) => {
      if (i < seeded.length) seeded[i] = img;
    });
    return seeded;
  };

  const [images, setImages] = useState<(string | null)[]>(() =>
    buildSeededImages(payload?.images as PropertyImage[] | undefined),
  );
  const [uploadedImages, setUploadedImages] = useState<
    (PropertyImage | null)[]
  >(() => buildSeededUploaded(payload?.images as PropertyImage[] | undefined));

  const { mutate: uploadPropertyImage } = useUploadImage(() => {});
  const { mutate: uploadPropertyVideo, isPending: isVideoUploading } =
    useUploadVideo(() => {});
  const { mutate: uploadOwnershipProof } = useUploadImage(() => {});
  const { mutate: generateWithAi, isPending: isGeneratingWithAi } =
    useGenerateSummaryWithAi((data) => {
      // console.log(data.description, "data.description");
      handleUpdateDraft({ description: data.description });
    });

  useEffect(() => {
    onVideoUploadingChange?.(isVideoUploading);
  }, [isVideoUploading, onVideoUploadingChange]);

  // Re-sync grid when the draft loads asynchronously (payload was undefined on mount)
  const hasSyncedPayload = useRef(false);
  useEffect(() => {
    if (!payload?.images?.length || hasSyncedPayload.current) return;
    // Only sync if the local grid is still empty/partial — don't clobber user uploads
    const hasLocalUploads = uploadedImages.some(Boolean);
    if (hasLocalUploads) return;
    hasSyncedPayload.current = true;
    setImages(buildSeededImages(payload.images));
    setUploadedImages(buildSeededUploaded(payload.images));
  }, [payload?.images, uploadedImages]);

  const isFirstImagesSync = useRef(true);
  useEffect(() => {
    if (isFirstImagesSync.current) {
      isFirstImagesSync.current = false;
      return;
    }
    handleUpdateDraft({
      images: uploadedImages.filter(
        (img): img is PropertyImage => img !== null,
      ),
    });
  }, [uploadedImages]);

  const handleImageChange = (index: number, file: File | null) => {
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setImages((prev) => {
      const copy = [...prev];
      copy[index] = previewUrl;
      return copy;
    });

    uploadPropertyImage(
      { file, folderType: "properties" },
      {
        onSuccess: (result) => {
          setUploadedImages((prev) => {
            const copy = [...prev];
            copy[index] = {
              publicId: result.publicId,
              optimizedUrl: result.optimizedUrl,
              resourceType: result.resourceType,
              format: result.format,
            };
            return copy;
          });

          setImages((prev) => {
            const copy = [...prev];
            const previousPreview = copy[index];
            if (previousPreview?.startsWith("blob:")) {
              URL.revokeObjectURL(previousPreview);
            }
            copy[index] = result.optimizedUrl;
            return copy;
          });
        },
        onError: () => {
          setImages((prev) => {
            const copy = [...prev];
            copy[index] = null;
            return copy;
          });
        },
      },
    );
  };

  const handleIdUpload = (file: File | null) => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setIdImage(url);
  };

  const handleOwnershipUpload = (file: File | null) => {
    if (!file) return;
    const previewUrl = URL.createObjectURL(file);
    setOwnershipImage(previewUrl);

    uploadOwnershipProof(
      { file, folderType: "properties" },
      {
        onSuccess: (result) => {
          handleUpdateDraft({ proofOfOwnershipUrl: result.optimizedUrl });
        },
        onError: () => {
          setOwnershipImage(null);
        },
      },
    );
  };

  const handleVideoChange = (file: File | null) => {
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setVideo(previewUrl);

    uploadPropertyVideo(
      { file, folderType: "properties" },
      {
        onSuccess: (result) => {
          handleUpdateDraft({
            videoUrl: result.optimizedUrl,
            videoPublicId: result.publicId,
          });
        },
        onError: () => {
          setVideo(null);
        },
      },
    );
  };

  return {
    idImage,
    ownershipImage,
    video,
    images,
    handleImageChange,
    handleIdUpload,
    handleOwnershipUpload,
    handleVideoChange,
    generateWithAi,
    isGeneratingWithAi,
    isVideoUploading,
  };
};
