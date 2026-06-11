"use client";
import Link from "next/link";
import GoogleIcon from "@/assets/svgs/google-icon.svg";
import { Button } from "@repo/ui";
import { Container } from "@repo/ui";
import { Input } from "@repo/ui";
import { Text } from "@repo/ui";

export function LoginScreen() {
  const {
    handleLogin,
    isPending,
    setPayload,
    payload,
    errors,
    handleSignInWithGoogle,
    googleAuthLoading,
  } = useLogin();
  return (
    <>
      <Text as="p" variant="h3" tone="primary">
        Welcome back 👋
      </Text>
      <Text as="p" variant="body-md" tone="secondary" className="mt-2 mb-6">
        Log in to your account to continue.
      </Text>
      <Container onSubmit={handleLogin} className="mt-8" as="form">
        <Input
          label="Email Address / Phone Number"
          placeholder="Enter your email or phone no"
          value={payload.email}
          error={errors.email}
          onChange={(e) => setPayload({ ...payload, email: e.target.value })}
        />
        <Input
          type="password"
          label="Password"
          placeholder="Enter your password"
          value={payload.password}
          error={errors.password}
          onChange={(e) => setPayload({ ...payload, password: e.target.value })}
        />
        <Container className="flex justify-end">
          <Link href="/forgot-password">
            <Button
              className="relative -top-3 -right-2 text-right"
              variant="transparent"
            >
              Forgot Password
            </Button>
          </Link>
        </Container>
        <Container as="div">
          <Button
            loading={isPending}
            fullWidth
            variant="primary"
            disabled={isPending || googleAuthLoading}
            type="submit"
          >
            Log In
          </Button>
        </Container>
      </Container>
      <Container>
        <Button
          loading={googleAuthLoading}
          onClick={handleSignInWithGoogle}
          fullWidth
          variant="muted"
          leftIcon={<GoogleIcon className="text-secondary" />}
          className="my-6 border border-line rounded-xl"
        >
          <Text as="span">Sign in with Google</Text>
        </Button>

        <Text
          className="text-center mx-auto"
          as="p"
          tone="primary"
          variant="body-sm"
        >
          Don&apos;t have an account ?
          <Link href="/register">
            <Text as="span" variant="action-label" tone="s500">
              {" "}
              Sign up{" "}
            </Text>
          </Link>
        </Text>
      </Container>
    </>
  );
}
