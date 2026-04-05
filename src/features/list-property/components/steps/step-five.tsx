import { Container } from "@/components/common/container/container";
import { useState } from "react";
import { NumberWrapper } from "../nuggets/number-wrapper";
import LocationIcon from "@/assets/svgs/location.svg";
import SelectIcon1 from "@/assets/svgs/bulb.svg";
import SelectIcon2 from "@/assets/svgs/security-guard.svg";
import SelectIcon3 from "@/assets/svgs/cctv.svg";
import SelectIcon4 from "@/assets/svgs/multi-select-icons/construction.svg";
import SelectIcon5 from "@/assets/svgs/multi-select-icons/national-park.svg";
import SelectIcon6 from "@/assets/svgs/multi-select-icons/clapper-board.svg";
import SelectIcon7 from "@/assets/svgs/multi-select-icons/elevator.svg";
import SelectIcon8 from "@/assets/svgs/multi-select-icons/person-swimming.svg";
import SelectIcon9 from "@/assets/svgs/multi-select-icons/basketball.svg";
import SelectIcon10 from "@/assets/svgs/multi-select-icons/soccer-ball.svg";
import SelectIcon11 from "@/assets/svgs/multi-select-icons/tennis.svg";
import SelectIcon12 from "@/assets/svgs/multi-select-icons/safety-vest.svg";
import SelectIcon13 from "@/assets/svgs/multi-select-icons/battery.svg";
import SelectIcon14 from "@/assets/svgs/multi-select-icons/antenna-bars.svg";
import SelectIcon15 from "@/assets/svgs/multi-select-icons/officer.svg";
import SelectIcon16 from "@/assets/svgs/multi-select-icons/window.svg";
import SelectIcon17 from "@/assets/svgs/multi-select-icons/light-bulb.svg";

import { ContentWrapper } from "../nuggets/content-wrapper";
import { Radio } from "@/components/common/radio/radio";
import { Text } from "@/components/common/text/text";
import { Checkbox } from "@/components/common/checkbox/checkbox";
import { MultiSelect, MultiSelectOption } from "@/components/common/select/multi-select";

export const StepFive = ({ activeSubstep }: { activeSubstep: number }) => {
  const [waterSource, setWaterSource] = useState<"borehole" | "well" | "waterboard" | "">("");
  const [hasParkingSpace, setHasParkingSpace] = useState<"yes" | "no" | "">("");
  const [isFenced, setIsFenced] = useState<"yes" | "no" | "">("");
  const [selected, setSelected] = useState<string[]>([]);

  const options: MultiSelectOption[] = [
    { label: "24hrs Electricity", value: "01", icon: <LocationIcon /> },
    { label: "Security Guard(s)", value: "02", icon: <SelectIcon2  /> },
    { label: "CCTV", value: "03", icon: <SelectIcon3 /> },
    { label: "Regulated Entry", value: "04", icon: <SelectIcon4 /> },
    { label: "Park Area/Playground", value: "05", icon: <SelectIcon5 /> },
    { label: "Cinema", value: "06", icon: <SelectIcon6 /> },
    { label: "Elevator", value: "07", icon: <SelectIcon7 /> },
    { label: "Swimming Pool", value: "08", icon: <SelectIcon8 /> },
    { label: "Basketball Court", value: "09", icon: <SelectIcon9 /> },
    { label: "Football Pitch", value: "10", icon: <SelectIcon10 /> },
    { label: "Tennis Lawn", value: "11", icon: <SelectIcon11 /> },
    { label: "Waste Management", value: "12", icon: <SelectIcon12 /> },
    { label: "Inverter", value: "13", icon: <SelectIcon13 /> },
    { label: "Internet/WiFi", value: "14", icon: <SelectIcon14 /> },
    { label: "Facility Manager", value: "15", icon: <SelectIcon15 /> },
    { label: "Balcony", value: "16", icon: <SelectIcon16 /> },
    { label: "Prepaid Meter", value: "17", icon: <SelectIcon17 /> },
    { label: "Dedicated Transformer", value: "18", icon: <SelectIcon17 /> },
    { label: "Gym/Fitness", value: "19", icon: <SelectIcon17 /> },
    { label: "Restaurant", value: "20", icon: <SelectIcon17 /> },
    { label: "Generator", value: "21", icon: <SelectIcon17 /> },
    { label: "Estate Intercom", value: "22", icon: <SelectIcon17 /> },
    { label: "Estate Shuttle Service", value: "23", icon: <SelectIcon17 /> },
  ];

  return (
    <>
      <Container>
        {activeSubstep === 1 && (
          <>
            <NumberWrapper serialNo="i" text="What is the water source?">
              <Container className="grid grid-cols-2 gap-4">
                <ContentWrapper>
                  <Container className="flex items-center gap-3">
                    <Checkbox
                      checked={waterSource === "borehole"}
                      onChange={() => {
                        setWaterSource("borehole");
                      }} />
                    <Text tone="primary" variant="action-label">
                      Borehole
                    </Text>
                  </Container>
                </ContentWrapper>
                <ContentWrapper>
                  <Container className="flex items-center gap-3">
                    <Checkbox
                      checked={waterSource === "well"}
                      onChange={() => {
                        setWaterSource("well");
                      }}
                    />
                    <Text tone="primary" variant="action-label">
                      Well
                    </Text>
                  </Container>
                </ContentWrapper>
                <ContentWrapper>
                  <Container className="flex items-center gap-3">
                    <Checkbox
                      checked={waterSource === "waterboard"}
                      onChange={() => {
                        setWaterSource("waterboard");
                      }}
                    />
                    <Text tone="primary" variant="action-label">
                      Water board
                    </Text>
                  </Container>
                </ContentWrapper>
              </Container>

            </NumberWrapper>
            <NumberWrapper serialNo="iii" text="Is the compound fenced or gated?">
              <Container className="flex gap-4">
                <ContentWrapper>
                  <Container className="flex items-center gap-3">
                    <Radio
                      value="new"
                      checked={isFenced === "yes"}
                      onChange={() => {
                        setIsFenced("yes");
                      }}
                    />
                    <Text tone="primary" variant="action-label">
                      Yes, it is
                    </Text>
                  </Container>
                </ContentWrapper>
                <ContentWrapper>
                  <Container className="flex items-center gap-3">
                    <Radio
                      value="new"
                      checked={isFenced === "no"}
                      onChange={() => {
                        setIsFenced("no");
                      }}
                    />
                    <Text tone="primary" variant="action-label">
                      No, it&apos;s not
                    </Text>
                  </Container>
                </ContentWrapper>
              </Container>
            </NumberWrapper>
            <NumberWrapper serialNo="ii" text="Is parking available">
              <Container className="flex gap-4">
                <ContentWrapper>
                  <Container className="flex items-center gap-3">
                    <Radio
                      value="new"
                      checked={hasParkingSpace === "yes"}
                      onChange={() => {
                        setHasParkingSpace("yes");
                      }}
                    />
                    <Text tone="primary" variant="action-label">
                      Yes, it is
                    </Text>
                  </Container>
                </ContentWrapper>
                <ContentWrapper>
                  <Container className="flex items-center gap-3">
                    <Radio
                      value="new"
                      checked={hasParkingSpace === "no"}
                      onChange={() => {
                        setHasParkingSpace("no");
                      }}
                    />
                    <Text tone="primary" variant="action-label">
                      No, not provided
                    </Text>
                  </Container>
                </ContentWrapper>
              </Container>
            </NumberWrapper>
          </>
        )}
        {
          activeSubstep === 2 && (
            <>
              <NumberWrapper serialNo="iv" text="Select amenities available in your property">
                <Container className="">
                  <MultiSelect options={options} value={selected} onChange={setSelected} />
                </Container>
              </NumberWrapper>

            </>
          )
        }
      </Container>
    </>
  );
};
