"use client";
// import { Button } from "@repo/ui";
import { Container } from "@repo/ui";
import { Text } from "@repo/ui";
import { useRouter } from "next/navigation";
import { Button } from "@repo/ui";

function AccountCreatedScreen() {
  const router = useRouter();
  return (
    <Container
      as="div"
      className="flex justify-center h-[60vh] items-center flex-col"
    >
      <Text variant="h3" tone="primary">
        Account Created Successfully
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
