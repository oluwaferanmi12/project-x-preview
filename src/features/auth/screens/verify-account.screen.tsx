"use client";
import { Button } from "@repo/ui";
import { Container } from "@repo/ui";
import { OtpField } from "@repo/ui";
import { Text } from "@repo/ui";
import { useRouter } from "next/navigation";

export function VerifyAccountScreen() {
  const router = useRouter();
  return (
    <>
      <Text as="h1" variant="h3" tone="primary">
        Verify your account 🔍
      </Text>
      <Text as="p" variant="body-sm" className="my-2 text-secondary">
        Enter the 6-digit code sent to your email address,
      </Text>
      <Text tone="p300" as="p" variant="body-sm" className="my-2">
        johndoe@yahoo.com
      </Text>
      <Container
        onSubmit={(e) => {
          e.preventDefault();
        }}
        as="form"
        className="mt-7"
      >
        <OtpField name="otp" />
        <Container className="mt-6">
          <Button
            onClick={() => {
              router.replace("/account-created");
            }}
            fullWidth
          >
            Verify Account
          </Button>
        </Container>
        <Container className="mt-8 text-center">
          <Text as="span" variant="body-sm" tone="primary">
            Yet to receive the code?
          </Text>{" "}
          <Text as="span" variant="action-button" tone="s500">
            Resend in 50s
          </Text>
        </Container>
      </Container>
    </>
  );
}
