import Link from "next/link";
import Button from "@/components/common/button/button";
import { Container } from "@/components/common/container/container";
import { Input } from "@/components/common/input/input";
import { Text } from "@/components/common/text/text";

export function ForgotPasswordScreen() {
  return (
    <>
      <Text as="p" variant="h3" tone="primary">
        Recover your account 🔍
      </Text>
      <Text as="p" variant="body-md" tone="secondary" className="mt-2 mb-6">
        Enter your email address, we will send a 6-digit code.
      </Text>
      <Container as="form" className="mt-6">
        <Input label="Email Address" placeholder="Enter your email address" />
      </Container>
      <Container className="mt-6">
        <Button fullWidth>Send Code</Button>
      </Container>
      <Container className="mt-9 flex items-center justify-center">
        <Text variant="body-sm" tone="primary">
          Don&apos;t have an account?{" "}
          <Link href="/register">
            <Text variant="action-button" className="text-s500" as="span">
              Sign up
            </Text>
          </Link>
        </Text>
      </Container>
    </>
  );
}
