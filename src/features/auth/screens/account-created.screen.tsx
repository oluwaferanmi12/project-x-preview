"use client";
import Button from "@/components/common/button/button";
import { Container } from "@/components/common/container/container";
import { Text } from "@/components/common/text/text";
import { useRouter } from "next/navigation";
import React from "react";

function AccountCreatedScreen() {
  const router = useRouter();
  return (
    <Container
      as="div"
      className="flex justify-center h-[60vh] items-center flex-col"
    >
      <Text variant="h3" tone="primary">
        Account Created Successfullysss
      </Text>
      <Text tone="secondary" variant="body-sm" className="text-center mt-4">
        Your can proceed to go into the application to being exploring or
        listing properties
      </Text>
      <Button
        onClick={() => {
          router.replace("/choose-option");
        }}
        fullWidth
        className="mt-7"
      >
        Get Started
      </Button>
    </Container>
  );
}

export default AccountCreatedScreen;
