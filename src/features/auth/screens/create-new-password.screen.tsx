import { Button } from "@repo/ui";
import { Container } from "@repo/ui";
import { Input } from "@repo/ui";
import { Text } from "@repo/ui";

export function CreateNewPasswordScreen() {
  return (
    <>
      <Text as="p" variant="h3" tone="primary">
        Create a new password 🔑
      </Text>
      <Text as="p" variant="body-md" tone="secondary" className="mt-2 mb-6">
        A new password is needed to secure your account
      </Text>
      <Container as="form" className="mt-6">
        <Input
          type="password"
          label="New Password"
          placeholder="Enter your new password"
        />
        <Input
          type="password"
          label="Confirm Password"
          placeholder="Confirm your new password"
        />
        <Container>
          <Button variant="disabled" fullWidth>
            Create Password
          </Button>
        </Container>
      </Container>
    </>
  );
}
