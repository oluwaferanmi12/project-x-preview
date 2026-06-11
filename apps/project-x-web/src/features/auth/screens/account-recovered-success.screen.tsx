"use client";
import Button from "@/components/common/button/button";
import { Container } from "@/components/common/container/container";
import { Text } from "@/components/common/text/text";
import { useRouter } from "next/navigation";
export const AccountRecoveredSuccessScreen = () => {
  const router = useRouter();
  return (
    <Container
      as="div"
      className="flex justify-center h-[60vh] items-center flex-col"
    >
      <Text variant="h3" tone="primary">
        Account Recovered Successfully
      </Text>
      <Text tone="secondary" variant="body-sm" className="text-center mt-4">
        Your password has been changed successfully, proceed to log in with your
        new password
      </Text>
      <Button
        onClick={() => {
          router.replace("/login");
        }}
        fullWidth
        className="mt-7"
      >
        Continue to Login
      </Button>
    </Container>
  );
};
