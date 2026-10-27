import { useEffect, useRef, useState } from "react";
import {
  useUploadImage,
  useUploadVideo,
} from "@/features/general/hooks/general.hooks";
import { useToast } from "@repo/ui";
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

  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());
  const setImageFailed = (index: number, failed: boolean) =>
    setFailedImages((prev) => {
      if (prev.has(index) === failed) return prev;
      const next = new Set(prev);
      if (failed) next.add(index);
      else next.delete(index);
      return next;
    });

  const { show } = useToast();
  // Property photos report failures themselves (per-tile border + one batched
  // toast) instead of the global one-toast-per-file handler.
  const { mutateAsync: uploadPropertyImage } = useUploadImage(() => {}, {
    silent: true,
  });

  const failureBatch = useRef<{ count: number; message: string }>({
    count: 0,
    message: "",
  });
  const flushTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );
  const reportFailure = (error: unknown) => {
    const message =
      (error as { message?: unknown })?.message &&
      typeof (error as { message?: unknown }).message === "string"
        ? ((error as { message: string }).message)
        : "Something went wrong. Please try again.";
    failureBatch.current.count += 1;
    failureBatch.current.message = message;
    clearTimeout(flushTimer.current);
    flushTimer.current = setTimeout(() => {
      const { count, message: msg } = failureBatch.current;
      failureBatch.current = { count: 0, message: "" };
      show(
        "Upload failed",
        count > 1
          ? `${count} images could not be uploaded (${msg}). They are outlined in red.`
          : msg,
        "error",
      );
    }, 400);
  };
  useEffect(() => () => clearTimeout(flushTimer.current), []);
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
    setImageFailed(index, false);
    setImages((prev) => {
      const copy = [...prev];
      if (copy[index]?.startsWith("blob:")) URL.revokeObjectURL(copy[index]);
      copy[index] = previewUrl;
      return copy;
    });

    // mutateAsync gives each file its own promise; mutate()'s per-call
    // callbacks only fire for the latest call, which hid earlier failures.
    uploadPropertyImage({ file, folderType: "properties" })
      .then((result) => {
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
      })
      .catch((error) => {
        // Keep the preview so the user can see which image failed; it is not
        // in uploadedImages, so it never reaches the draft.
        setImageFailed(index, true);
        reportFailure(error);
      });
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
    failedImages,
    handleImageChange,
    handleIdUpload,
    handleOwnershipUpload,
    handleVideoChange,
    generateWithAi,
    isGeneratingWithAi,
    isVideoUploading,
  };
};
