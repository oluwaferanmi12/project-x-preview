import { Container, GeneralSpacer, Text } from "@repo/ui";
import Image from "next/image";
import React from "react";
import LocationImage from "@/assets/images/location-img.png";
import { FilterSearch } from "../filter-search";

export const HomeBanner = () => {
  return (
    <GeneralSpacer>
      <Container className="flex flex-col justify-center items-center pb-16">
        <Container className="lg:my-30 mt-20 mb-12 w-full lg:w-[60%]  flex items-center flex-col justify-center">
          <Text variant="h1" tone="primary" className="text-center">
            A better way to find your next home. Skip the usual hassle!
          </Text>
          <Text variant="bodyRegular" tone="primary" className="mt-4 text-center">
            Search through to find a property of your choice
          </Text>
        </Container>
        <Container className="w-full relative">
          <Container className="lg:w-4/5 w-full mx-auto lg:relative lg:-bottom-2">
            <FilterSearch />
          </Container>
          <Image src={LocationImage} alt="location-image" className="w-full hidden lg:inline" />
        </Container>
      </Container>
    </GeneralSpacer>
  );
};
