import { Container } from "@repo/ui";
import { useState } from "react";
import { NumberWrapper } from "../nuggets/number-wrapper";
import SelectIcon1 from "@/assets/images/multi-select-icons/light-bulb.png";
import SelectIcon2 from "@/assets/images/multi-select-icons/police-officer.png";
import SelectIcon3 from "@/assets/images/multi-select-icons/camera-flash.png";
import SelectIcon4 from "@/assets/images/multi-select-icons/construction.png";
import SelectIcon5 from "@/assets/images/multi-select-icons/national-park.png";
import SelectIcon6 from "@/assets/images/multi-select-icons/clapper-board.png";
import SelectIcon7 from "@/assets/images/multi-select-icons/elevator.png";
import SelectIcon8 from "@/assets/images/multi-select-icons/person-swimming.png";
import SelectIcon9 from "@/assets/images/multi-select-icons/basketball.png";
import SelectIcon10 from "@/assets/images/multi-select-icons/soccer-ball.png";
import SelectIcon11 from "@/assets/images/multi-select-icons/tennis.png";
import SelectIcon12 from "@/assets/images/multi-select-icons/safety-vest.png";
import SelectIcon13 from "@/assets/images/multi-select-icons/battery.png";
import SelectIcon14 from "@/assets/images/multi-select-icons/antenna-bars.png";
import SelectIcon15 from "@/assets/images/multi-select-icons/officer.png";
import SelectIcon16 from "@/assets/images/multi-select-icons/window.png";
import SelectIcon17 from "@/assets/images/multi-select-icons/light-bulb.png";

import { ContentWrapper } from "../nuggets/content-wrapper";
import { Radio } from "@repo/ui";
import { Text } from "@repo/ui";
import { Checkbox } from "@repo/ui";
import { MultiSelect, MultiSelectOption } from "@repo/ui";
import Image from "next/image";





export const StepFive = ({ activeSubstep }: { activeSubstep: number }) => {
  const [waterSource, setWaterSource] = useState<"borehole" | "well" | "waterboard" | "">("");
  const [hasParkingSpace, setHasParkingSpace] = useState<"yes" | "no" | "">("");
  const [isFenced, setIsFenced] = useState<"yes" | "no" | "">("");
  const [selected, setSelected] = useState<string[]>([]);
  const iconSize = 16;


  const options: MultiSelectOption[] = [
    { label: "24hrs Electricity", value: "01", icon: <Image src={SelectIcon1} alt="" width={iconSize} height={iconSize} /> },
    { label: "Security Guard(s)", value: "02", icon:   <Image src={SelectIcon2} alt="" width={iconSize} height={iconSize} /> },
    { label: "CCTV", value: "03", icon:  <Image src={SelectIcon3} alt="" width={iconSize} height={iconSize} /> },
    { label: "Regulated Entry", value: "04", icon:  <Image src={SelectIcon4} alt="" width={iconSize} height={iconSize} /> },
    { label: "Park Area/Playground", value: "05", icon:  <Image src={SelectIcon5} alt="" width={iconSize} height={iconSize} /> },
    { label: "Cinema", value: "06", icon:  <Image src={SelectIcon6} alt="" width={iconSize} height={iconSize} /> },
    { label: "Elevator", value: "07", icon:  <Image src={SelectIcon7} alt="" width={iconSize} height={iconSize} /> },
    { label: "Swimming Pool", value: "08", icon:  <Image src={SelectIcon8} alt="" width={iconSize} height={iconSize} /> },
    { label: "Basketball Court", value: "09", icon:  <Image src={SelectIcon9} alt="" width={iconSize} height={iconSize} /> },
    { label: "Football Pitch", value: "10", icon:  <Image src={SelectIcon10} alt="" width={iconSize} height={iconSize} /> },
    { label: "Tennis Lawn", value: "11", icon:  <Image src={SelectIcon11} alt="" width={iconSize} height={iconSize} /> },
    { label: "Waste Management", value: "12", icon:  <Image src={SelectIcon12} alt="" width={iconSize} height={iconSize} /> },
    { label: "Inverter", value: "13", icon:  <Image src={SelectIcon13} alt="" width={iconSize} height={iconSize} /> },
    { label: "Internet/WiFi", value: "14", icon:  <Image src={SelectIcon14} alt="" width={iconSize} height={iconSize} /> },
    { label: "Facility Manager", value: "15", icon:  <Image src={SelectIcon15} alt="" width={iconSize} height={iconSize} /> },
    { label: "Balcony", value: "16", icon:  <Image src={SelectIcon16} alt="" width={iconSize} height={iconSize} /> },
    { label: "Prepaid Meter", value: "17", icon:  <Image src={SelectIcon17} alt="" width={iconSize} height={iconSize} /> },
    { label: "Dedicated Transformer", value: "18", icon:  <Image src={SelectIcon17} alt="" width={iconSize} height={iconSize} /> },
    { label: "Gym/Fitness", value: "19", icon:  <Image src={SelectIcon17} alt="" width={iconSize} height={iconSize} /> },
    { label: "Restaurant", value: "20", icon:  <Image src={SelectIcon17} alt="" width={iconSize} height={iconSize} /> },
    { label: "Generator", value: "21", icon:  <Image src={SelectIcon17} alt="" width={iconSize} height={iconSize} /> },
    { label: "Estate Intercom", value: "22", icon:  <Image src={SelectIcon17} alt="" width={iconSize} height={iconSize} /> },
    { label: "Estate Shuttle Service", value: "23", icon:  <Image src={SelectIcon17} alt="" width={iconSize} height={iconSize} /> },
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
