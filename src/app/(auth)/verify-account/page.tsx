import Button from "@/components/common/button/button";
import { Container } from "@/components/common/container/container";
import { OtpField } from "@/components/common/input/otp-field";
import { Text } from "@/components/common/text/text";

function VerifyAccount() {
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
      <Container as="form" className="mt-7">
        <OtpField name="otp" />
        <Container className="mt-6">
          <Button variant="disabled" fullWidth>
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

export default VerifyAccount;
