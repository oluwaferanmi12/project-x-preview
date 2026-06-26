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

export const StepThree = ({ activeSubstep, payload }: { activeSubstep: number; payload?: DraftProperty }) => {
  const [shareAddress, setShareAddress] = React.useState<"yes" | "no">("no");
  return (
    <>
      <Container>
        {activeSubstep === 1 && (
          <>
            <NumberWrapper serialNo="i" text="Where is the property located ?">
              <Select
                label=""
                options={[{ label: "Select state", value: "" }]}
                noBottomMargin
              />
              <Select
                label=""
                options={[{ label: "Local government area", value: "" }]}
                noBottomMargin
              />
              <Select
                label=""
                options={[{ label: "Area/Neighborhood", value: "" }]}
                noBottomMargin
              />
            </NumberWrapper>
            <NumberWrapper serialNo="ii" text="Provide Property address">
              <Input
                label=""
                placeholder="Enter address"
                rightIcon={
                  <LocationIcon className="text-secondary" size="sm" />
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
                      checked={shareAddress === "yes"}
                      onChange={() => {
                        setShareAddress("yes");
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
                      checked={shareAddress === "no"}
                      onChange={() => {
                        setShareAddress("no");
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
              <WhiteInfo className="text-inverted" width="28" height="28" />
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
