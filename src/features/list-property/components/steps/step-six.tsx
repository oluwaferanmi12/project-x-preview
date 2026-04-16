import { Container } from "@/components/common/container/container";
import React, { useState } from "react";
import { NumberWrapper } from "../nuggets/number-wrapper";
import { UploadBox } from "../nuggets/upload-container";

export const StepSix = ({ activeSubstep }: { activeSubstep: number }) => {
  const [images, setImages] = useState<(string | null)[]>(
    Array(9).fill(null)
  );

  const [video, setVideo] = useState<string | null>(null);

  const handleImageChange = (index: number, file: File | null) => {
    if (!file) return;

    const url = URL.createObjectURL(file);

    setImages((prev) => {
      const copy = [...prev];
      copy[index] = url;
      return copy;
    });
  };

  const handleVideoChange = (file: File | null) => {
    if (!file) return;

    const url = URL.createObjectURL(file);
    setVideo(url);
  };
  return (
    <Container>
      {/* SUBSTEP I */}
      {activeSubstep === 1 && (
        <NumberWrapper
          serialNo="i"
          text="Upload photos of the property (min. of 6)"
        >
          <p className="text-sm text-gray-500 mb-4">
            Make sure to cover most of the property, e.g living room,
            bedroom, kitchen, bathroom, exterior, etc.
          </p>

          <div className="grid grid-cols-3 gap-4">
            {images.map((img, i) => (
              <UploadBox
                key={i}
                value={img}
                onChange={(file) => handleImageChange(i, file)}
                className="h-32"
              />
            ))}
          </div>
        </NumberWrapper>
      )}

      {/* SUBSTEP II */}
      {activeSubstep === 2 && (
        <NumberWrapper
          serialNo="ii"
          text="Upload a 6 minutes video of the property"
        >
          <p className="text-sm text-gray-500 mb-4">
            Uploaded video must show key areas of the property, e.g
            compound, sitting room, kitchen, rooms, bathroom & toilet, etc.
          </p>

          <UploadBox
            value={video}
            onChange={handleVideoChange}
            className="w-full h-40"
            type="video"
            accept="video/*"
          />
        </NumberWrapper>
      )}
    </Container>
  );
};