import { Container, Input, Select, Text } from "@repo/ui";
import type { ProfileFormValues } from "../types/profile.types";

export function EditProfileFields({
  defaultValues,
}: {
  defaultValues: ProfileFormValues;
}) {
  return (
    <>
      <Input
        label="First Name"
        aria-label="First Name"
        name="firstName"
        defaultValue={defaultValues.firstName}
        required
        placeholder="Enter first name"
        autoComplete="given-name"
      />
      <Input
        label="Last Name"
        aria-label="Last Name"
        name="lastName"
        defaultValue={defaultValues.lastName}
        required
        placeholder="Enter last name"
        autoComplete="family-name"
      />
      <Input
        label="Profile Name"
        aria-label="Profile Name"
        name="profileName"
        defaultValue={defaultValues.profileName}
        required
        placeholder="Enter profile name"
      />
      <Container as="fieldset" className="m-0 min-w-0 border-0 p-0">
        <Text as="legend" variant="body-sm" tone="primary" className="mb-2 p-0">
          Phone Number (WhatsApp Contact)
        </Text>
        <Container className="grid grid-cols-[120px_minmax(0,1fr)] items-end gap-2">
          <Select
            label="Country code"
            hideLabel
            aria-label="Country calling code"
            name="countryCallingCode"
            defaultValue="+234"
            options={[
              { label: "\uD83C\uDDF3\uD83C\uDDEC +234", value: "+234" },
            ]}
          />
          <Input
            label="Phone Number (WhatsApp Contact)"
            hideLabel
            aria-label="WhatsApp phone number"
            name="phoneNumber"
            defaultValue={defaultValues.phoneNumber}
            required
            type="tel"
            autoComplete="tel-national"
            placeholder="000 0000 000"
          />
        </Container>
      </Container>
    </>
  );
}
