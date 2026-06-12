"use client";

import Link from "next/link";
import { Button } from "@repo/ui";
import { Container } from "@repo/ui";
import { Input } from "@repo/ui";
import { Text } from "@repo/ui";
import { useForgotPassword } from "../hooks/useAuth";

export function ForgotPasswordScreen() {
  const { setEmail, email, handleForgotPassword, isPending } =
    useForgotPassword();
  return (
    <>
      <Text as="p" variant="h3" tone="primary">
        Recover your account 🔍
      </Text>
      <Text as="p" variant="body-md" tone="secondary" className="mt-2 mb-6">
        Enter your email address, we will send a 6-digit code.
      </Text>
      <Container as="form" className="mt-6">
        <Input
          label="Email Address"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Container>
      <Container className="mt-6">
        <Button
          fullWidth
          onClick={handleForgotPassword}
          loading={isPending}
          disabled={isPending}
        >
          Send Code
        </Button>
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
