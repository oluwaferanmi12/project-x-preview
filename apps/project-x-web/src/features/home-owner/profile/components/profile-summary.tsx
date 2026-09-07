import { Container, Text } from "@repo/ui";
import { ActiveBadge } from "./active-badge";

type ProfileSummaryProps = {
  firstName: string;
  lastName: string;
  email: string;
};

export function ProfileSummary({
  firstName,
  lastName,
  email,
}: ProfileSummaryProps) {
  return (
    <Container
      as="section"
      className="relative flex h-[84px] items-center gap-3 overflow-hidden rounded-2xl border border-line bg-surface p-3"
      aria-label="Profile summary"
    >
      <Container className="grid size-[58px] shrink-0 place-items-center rounded-[15px] bg-p50 uppercase">
        <Text as="span" variant="body-lg" tone="p300" className="font-bold">
          {firstName[0]}
          {lastName[0]}
        </Text>
      </Container>
      <Container className="z-1 min-w-0">
        <Text as="strong" variant="body-sm" className="block font-semibold">
          {firstName} {lastName}
        </Text>
        <Text
          as="span"
          variant="body-xs"
          tone="secondary"
          className="block text-[11px]"
        >
          {email}
        </Text>
      </Container>
      <ActiveBadge />
      <Container
        className="pointer-events-none absolute top-0 right-0 h-[84px] w-[225px] max-[900px]:w-[150px] max-[900px]:opacity-50 max-[640px]:hidden [&>span]:absolute [&>span]:text-[28px]"
        aria-hidden="true"
      >
        <Text
          as="span"
          variant="body-xs"
          className="left-[5px] -top-[15px] -rotate-20"
        >
          &#x1F511;
        </Text>
        <Text
          as="span"
          variant="body-xs"
          className="left-[126px] -top-3.5 rotate-25"
        >
          &#x1F4B8;
        </Text>
        <Text
          as="span"
          variant="body-xs"
          className="right-0 -top-[13px] !text-[23px]"
        >
          &#x1F45F;
        </Text>
        <Text
          as="span"
          variant="body-xs"
          className="left-2 -bottom-2.5 -rotate-20"
        >
          &#x1F3E0;
        </Text>
        <Text
          as="span"
          variant="body-xs"
          className="left-[88px] top-[22px] !text-[34px] -rotate-10"
        >
          &#x1F3AC;
        </Text>
        <Text
          as="span"
          variant="body-xs"
          className="right-5 -bottom-2.5 rotate-18"
        >
          &#x1F4DA;
        </Text>
      </Container>
    </Container>
  );
}
