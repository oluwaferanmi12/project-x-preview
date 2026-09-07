"use client";
import { Button, Container, Text } from "@repo/ui";
import { useRouter } from "next/navigation";

export const AddPropertyWrapper = () => {
  const router = useRouter();
  return (
    <Container className="mb-8 flex lg:flex-row flex-col lg:items-center justify-between rounded-2xl bg-p200 px-6 py-5">
      <Container>
        <Text variant="h5" tone="inverted">
          Add your properties
        </Text>

        <Text variant="body-sm" tone="inverted">
          List your properties and get real life actions and trackable
          engagements
        </Text>
      </Container>
      <Container className="flex">
        <Button onClick={() => router.push("/properties/list-property")}>
          + Add property
        </Button>
      </Container>
    </Container>
  );
};
