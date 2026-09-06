"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  useCreatePropertyMutation,
  useGetListingById,
  useSubmitPropertyMutation,
} from "./property.hook";
import {
  DEFAULT_DRAFT_PROPERTY,
  mapListingResponseToDraft,
  normalizeDraftForSave,
  resolveDropOffStep,
} from "../utils/property.utils";
import { DraftProperty } from "../types/property.types";

export const useListingScreen = () => {
  const params = useSearchParams();
  const router = useRouter();

  const propertyId = params.get("propertyId");
  const stepFromUrl = Number(params.get("step"));
  const { data: listingResponse, isLoading: isDraftLoading } =
    useGetListingById(propertyId);

  const fetchedDraft = listingResponse
    ? mapListingResponseToDraft(listingResponse)
    : undefined;

 
  const stepVariation: Record<number, number> = {
    1: 1,
    2: 3,
    3: 2,
    4: 2,
    5: 2,
    6: 3,
    7: 1,
  };
  const [activeStep, setActiveStep] = useState(stepFromUrl || 1);
  const [activeSubStep, setActiveSubStep] = useState(
    Number(params.get("substep")) || 1,
  );
  const [isVideoUploading, setIsVideoUploading] = useState(false);
  const handleVideoUploadingChange = useCallback((uploading: boolean) => {
    setIsVideoUploading(uploading);
  }, []);

  const handleNextStep = () => {
    const currentStepVariations = stepVariation[activeStep] || 1;
    if (activeSubStep < currentStepVariations) {
      setActiveSubStep((prev) => prev + 1);
    } else {
      setActiveStep((prev) => prev + 1);
      setActiveSubStep(1);
    }
  };

  const { mutate, isPending } = useCreatePropertyMutation((data) => {
    if (data?.id) {
      setDraftProperty((prev) => ({ ...prev, id: data.id }));
    }
    handleNextStep();
  });

  const dropOffStep =
    propertyId && fetchedDraft ? resolveDropOffStep(fetchedDraft) : undefined;

  const [draftProperty, setDraftProperty] = useState<DraftProperty | undefined>(
    () => (propertyId ? undefined : DEFAULT_DRAFT_PROPERTY),
  );

  const didSeedDraft = useRef(false);

  // Only runs once, right after the fetched draft resolves — seeds both the
  // form state and the active step from it, so draftProperty is always the
  // single source of truth from then on.
  useEffect(() => {
    if (!propertyId || !fetchedDraft || didSeedDraft.current) return;
    setDraftProperty(fetchedDraft);
    if (!stepFromUrl && dropOffStep) {
      setActiveStep(dropOffStep);
    }
    didSeedDraft.current = true;
  }, [fetchedDraft, propertyId, stepFromUrl, dropOffStep]);

  const handleUpdateDraft = (updates: Partial<DraftProperty>) => {
    setDraftProperty((prev) => ({ ...prev, ...updates }));
  };

  const handlePrevStep = () => {
    if (activeStep > 1 || stepVariation[activeStep] < 1) {
      if (activeSubStep > 1) {
        setActiveSubStep((prev) => prev - 1);
        return;
      }
      setActiveSubStep(stepVariation[activeStep - 1]);
      setActiveStep((prev) => prev - 1);
    }
  };

  const handleGoToStep = (step: number) => {
    setActiveStep(step);
    setActiveSubStep(1);
  };

  const handleSaveDraft = () => {
    mutate(normalizeDraftForSave(draftProperty!));
  };

  const { mutate: submitListing, isPending: isSubmitting } =
    useSubmitPropertyMutation(() => {
      handleNextStep();
    });

  const handleSubmitListing = () => {
    const id = draftProperty?.id;
    if (!id) return;
    submitListing(id);
  };

  // If no propertyId, always ready. If there is one, wait for the draft to load first.
  const isReadyToSync = !propertyId || !isDraftLoading;

  const resolvedPropertyId = draftProperty?.id || propertyId;

  useEffect(() => {
    if (!isReadyToSync) return;

    const base = "/properties/list-property";
    const id = resolvedPropertyId ? `&propertyId=${resolvedPropertyId}` : "";
    if (!params.get("step")) {
      router.replace(
        `${base}?step=${activeStep}&substep=${activeSubStep}${id}`,
      );
    } else {
      router.push(`${base}?step=${activeStep}&substep=${activeSubStep}${id}`);
    }
  }, [activeStep, activeSubStep, isReadyToSync, resolvedPropertyId]);


  return {
    activeStep,
    handleNextStep,
    handlePrevStep,
    handleGoToStep,
    activeSubStep,
    payload: draftProperty,
    handleUpdateDraft,
    dropOffStep,
    isDraftLoading,
    isPending: isPending || isSubmitting || isVideoUploading,
    handleSaveDraft,
    handleSubmitListing,
    onVideoUploadingChange: handleVideoUploadingChange,
  };
};
