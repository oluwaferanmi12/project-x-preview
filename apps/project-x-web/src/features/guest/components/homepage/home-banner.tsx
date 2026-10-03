import { Container, Text } from "@repo/ui";
import Image from "next/image";
import React from "react";
import LocationImage from "@/assets/images/location-img.png";

export const HomeBanner = () => {
  return (
    <Container className="flex flex-col justify-center items-center">
      <Container className="my-30 w-[60%]  flex items-center flex-col justify-center">
        <Text variant="h1" tone="primary" className="text-center">
          A better way to find your next home. Skip the usual hassle!
        </Text>
        <Text variant="bodyRegular" tone="primary" className="mt-4">
          Search through to find a property of your choice
        </Text>
      </Container>
      <Container className="w-full relative">
        <Image src={LocationImage} alt="location-image" className="w-full" />
      </Container>
    </Container>
  );
};
