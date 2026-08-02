import { Container } from "@repo/ui";
import { NumberWrapper } from "../nuggets/number-wrapper";
import { UploadBox } from "../nuggets/upload-container";
import { Text } from "@repo/ui";
import { Select } from "@repo/ui";
import { DraftProperty } from "../../types/property.types";
import { useStepSix } from "../../hooks/useStepSix";

export const StepSix = ({
  activeSubstep,
  payload,
  handleUpdateDraft,
}: {
  activeSubstep: number;
  payload?: DraftProperty;
  handleUpdateDraft: (updates: Partial<DraftProperty>) => void;
}) => {
  const {
    idImage,
    ownershipImage,
    video,
    images,
    handleImageChange,
    handleIdUpload,
    handleOwnershipUpload,
    handleVideoChange,
  } = useStepSix(handleUpdateDraft);

  return (
    <Container>
      {/* SUBSTEP I */}
      {activeSubstep === 1 && (
        <NumberWrapper
          serialNo="i"
          text="Upload photos of the property (min. of 6)"
        >
          <Text tone="secondary" variant="body-sm" className=" mb-4">
            Make sure to cover most of the property, e.g living room,
            bedroom, kitchen, bathroom, exterior, etc.
          </Text>

          <Container className="grid grid-cols-3 gap-4">
            {images.map((img, i) => (
              <UploadBox
                key={i}
                value={img}
                onChange={(file) => handleImageChange(i, file)}
                className="h-32"
              />
            ))}
          </Container>
        </NumberWrapper>
      )}

      {/* SUBSTEP II */}
      {activeSubstep === 2 && (
        <NumberWrapper
          serialNo="ii"
          text="Upload a 6 minutes video of the property"
        >
          <Text tone="secondary" variant="body-sm" className="mb-4">
            Uploaded video must show key areas of the property, e.g
            compound, sitting room, kitchen, rooms, bathroom & toilet, etc.
          </Text>



          <UploadBox
            value={video}
            onChange={handleVideoChange}
            className="w-full h-40"
            type="video"
            accept="video/*"
          />
        </NumberWrapper>
      )}
      {/* SUBSTEP III */}
      {activeSubstep === 3 && (
        <>
          <NumberWrapper
            serialNo="iii"
            text="Verify your identity, this happens just once."
          >
            <Text tone="secondary" variant="body-sm" className="mb-4">
              Upload a valid means of identification, e.g Driver’s License, NIN Slip or Card, Voter’s Card, e.t.c.
            </Text>
            <Select
              label=""
              options={[{ label: "Select ID type", value: "" }]}
              noBottomMargin
            />
            <UploadBox
              value={idImage}
              onChange={handleIdUpload}
              className="h-32"
              accept="image/*"
            />

          </NumberWrapper>
          <NumberWrapper
            serialNo="iv"
            text="Proof of Property Ownership"
          >
            <Text tone="secondary" variant="body-sm" className="mb-4">
              Upload a valid means of ownership proof, e.g  Certificate of Occupancy (C of O), Deed of Assignment, Land purchase receipt, Survey plan, Allocation letter, Property tax receipt.
            </Text>
            <Select
              label=""
              options={[{ label: "Select document type", value: "" }]}
              noBottomMargin
            />
            <UploadBox
              value={ownershipImage}
              onChange={handleOwnershipUpload}
              className="h-32"
              accept="image/*"
            />
          </NumberWrapper>
        </>

      )}
    </Container>
  );
};
