import React from "react";
import { Text } from "@/components/common/text/text";
import { Container } from "@/components/common/container/container";
import { Input } from "@/components/common/input/input";

function ForgotPassword() {
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
    </>
  );
}

export default ForgotPassword;
