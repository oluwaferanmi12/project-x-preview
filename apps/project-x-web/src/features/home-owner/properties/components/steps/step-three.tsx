import { Container } from "@repo/ui";
import React from "react";
import { NumberWrapper } from "../nuggets/number-wrapper";
import { Select } from "@repo/ui";
import { Input } from "@repo/ui";
import { Location as LocationIcon, WhiteInfo } from "@repo/icons";
import { ContentWrapper } from "../nuggets/content-wrapper";
import { Radio } from "@repo/ui";
import { Text } from "@repo/ui";
import { DraftProperty } from "../../types/property.types";
import {
  useGetLGA,
  useGetStates,
} from "@/features/general/hooks/general.hooks";
import { label } from "framer-motion/client";

export const StepThree = ({
  activeSubstep,
  payload,
  handleUpdateDraft,
}: {
  activeSubstep: number;
  payload?: DraftProperty;
  handleUpdateDraft: (updates: Partial<DraftProperty>) => void;
}) => {
  const { data } = useGetStates();
  const { data: localGovernments } = useGetLGA(payload?.stateId ?? "");
  return (
    <>
      <Container>
        {activeSubstep === 1 && (
          <>
            <NumberWrapper serialNo="i" text="Where is the property located ?">
              <Select
                label=""
                options={
                  data
                    ? [
                        { label: "Choose a state", value: "" },
                        ...data?.map((item) => {
                          return { label: item.name, value: item.id };
                        }),
                      ]
                    : [{ label: "Choose a state", value: "" }]
                }
                value={payload?.stateId ?? ""}
                onChange={({ target }) => {
                  handleUpdateDraft({ stateId: target.value });
                }}
                noBottomMargin
              />
              <Select
                label=""
                options={
                  localGovernments
                    ? [
                        { label: "Choose a LGA", value: "" },
                        ...localGovernments?.map((item) => {
                          return { label: item.name, value: item.id };
                        }),
                      ]
                    : [{ label: "Choose a LGA", value: "" }]
                }
                value={payload?.lgaId ?? ""}
                onChange={({ target }) => {
                  handleUpdateDraft({ lgaId: target.value });
                }}
                noBottomMargin
              />
              <Input
                label=""
                onChange={({ target }) => {
                  handleUpdateDraft({ neighbourhood: target.value });
                }}
                placeholder="Area/Neighborhood"
              />
            </NumberWrapper>
            <NumberWrapper serialNo="ii" text="Provide Property address">
              <Input
                label=""
                onChange={({ target }) => {
                  handleUpdateDraft({ addressLine: target.value });
                }}
                value={payload?.addressLine ?? ""}
                placeholder="Enter address"
                rightIcon={
                  <LocationIcon className="text-secondary" size={16} />
                }
              />
            </NumberWrapper>
          </>
        )}
        {activeSubstep === 2 && (
          <>
            <NumberWrapper
              serialNo="iii"
              text="Is there a nearby landmark? (optional)"
            >
              <Input
                label=""
                value={payload?.landmark ?? ""}
                onChange={({ target }) => {
                  handleUpdateDraft({ landmark: target.value });
                }}
                placeholder="eg. bus stop, school, market, hospital, e.t.c."
              />
            </NumberWrapper>
            <NumberWrapper
              serialNo="iv"
              text="Would you like to share this address with house seekers?"
            >
              <Container className="flex gap-4">
                <ContentWrapper>
                  <Container className="flex items-center gap-3">
                    <Radio
                      value="new"
                      checked={payload?.shareAddressWithSeekers === true}
                      onChange={(value) => {
                        handleUpdateDraft({ shareAddressWithSeekers: true });
                      }}
                    />
                    <Text tone="primary" variant="action-label">
                      Yes, that&apos;s fine
                    </Text>
                  </Container>
                </ContentWrapper>
                <ContentWrapper>
                  <Container className="flex items-center gap-3">
                    <Radio
                      value="new"
                      checked={payload?.shareAddressWithSeekers === false}
                      onChange={(value) => {
                        handleUpdateDraft({ shareAddressWithSeekers: false });
                      }}
                    />
                    <Text tone="primary" variant="action-label">
                      No, I&apos;d rather not
                    </Text>
                  </Container>
                </ContentWrapper>
              </Container>
            </NumberWrapper>

            {/* NOTE CONTAINER */}
            <Container className="flex items-start bg-i400 rounded-2xl p-2 pb-4 gap-2">
              <WhiteInfo className="text-inverted" size={28} />
              <Container>
                <Text
                  tone="inverted"
                  variant="body-md"
                  className="font-semibold"
                >
                  Note
                </Text>
                <Text tone="inverted">
                  Sharing this property&apos;s address helps house seekers find
                  the location easily.
                </Text>
              </Container>
            </Container>
          </>
        )}
      </Container>
    </>
  );
};
