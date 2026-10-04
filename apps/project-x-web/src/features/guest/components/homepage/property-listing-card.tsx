import { Button, Container, Text } from "@repo/ui";
import { BookmarkIcon, LightClock, Location, VerifiedCheck } from "@repo/icons";
import Image from "next/image";
import { GuestProperty } from "../../guest.types";

export const PropertyListingCard = ({
  property,
}: {
  property: GuestProperty;
}) => {
  return (
    <Container className="flex flex-col gap-3">
      <Container className="relative aspect-[1.64] w-full overflow-hidden rounded-2xl bg-muted">
        <Image
          src={property.image}
          alt={property.location}
          fill
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 300px"
          className="object-cover"
        />
        <Container className="absolute inset-0 bg-[#121212]/20" />
        <Button
          variant="surface"
          shorter
          aria-label="Save property"
          className="absolute right-3 top-3 !h-8 !w-8 !rounded-lg !p-0"
        >
          <BookmarkIcon size={16} />
        </Button>
      </Container>

      <Container className="flex items-center gap-2">
        <Container as="span" className="text-s300">
          <Location size={14} />
        </Container>
        <Text variant="body-xs" tone="primary">
          {property.location}
        </Text>
      </Container>

      <Container className="flex items-baseline gap-1">
        <Text variant="h5" tone="primary" className="!font-bold">
          ₦{property.price.toLocaleString("en-NG")}
        </Text>
        <Text variant="body-xs" tone="secondary">
          {property.period}
        </Text>
      </Container>

      <Container className="flex flex-wrap items-center gap-x-4 gap-y-1">
        {[
          { icon: "🏠", label: property.type },
          { icon: "🛏️", label: `${property.beds} Beds` },
          { icon: "🛁", label: `${property.baths} Baths` },
        ].map((item) => (
          <Container key={item.label} className="flex items-center gap-1">
            <Container as="span" className="text-xs leading-none">
              {item.icon}
            </Container>
            <Text variant="body-xs" tone="primary">
              {item.label}
            </Text>
          </Container>
        ))}
      </Container>

      <Container className="flex items-center justify-between border-t border-line pt-3">
        <Container className="flex items-center gap-1.5">
          <Container className="flex h-5 w-5 items-center justify-center rounded-md bg-p50">
            <Text as="span" variant="body-xs" className="text-[8px] text-p300">
              {property.listerInitials}
            </Text>
          </Container>
          <Text variant="body-xs" tone="primary">
            {property.listerRole}
          </Text>
          <VerifiedCheck size={12} />
        </Container>
        <Container className="flex items-center gap-1 text-secondary">
          <LightClock size={14} />
          <Text variant="body-xs" tone="secondary">
            {property.date}
          </Text>
        </Container>
      </Container>
    </Container>
  );
};
