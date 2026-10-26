import { Button, Container, Text } from "@repo/ui";
import { BookmarkIcon, LightClock, Location, VerifiedCheck } from "@repo/icons";
import Image from "next/image";
import Link from "next/link";
import { getInitials } from "@repo/utils";
import { formatListingDate } from "@/features/home-owner/properties/utils/property.utils";
import { GuestPropertyListing } from "../../guest.types";
import { PLACEHOLDER_IMAGE } from "../../guest.constants";

export const PropertyListingCard = ({
  property,
}: {
  property: GuestPropertyListing;
}) => {
  return (
    <Link
      href={`/available-properties/${property.id}`}
      className="flex min-w-0 flex-col gap-3"
    >
      <Container className="relative aspect-[1.64] w-full overflow-hidden rounded-2xl bg-muted">
        <Image
          src={property.coverImageUrl}
          alt={property.neighbourhood}
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
          className="absolute right-3 top-3 h-8! w-8! rounded-lg! bg-inverted! !p-0 !text-secondary hover:!bg-inverted"
        >
          <BookmarkIcon size={16} />
        </Button>
      </Container>

      <Container className="flex items-center gap-2">
        <Container as="span" className="shrink-0 text-s300">
          <Location size={14} />
        </Container>
        <Text
          variant="body-xs"
          tone="primary"
          className="min-w-0 truncate"
          title={property.neighbourhood}
        >
          {property.neighbourhood}
        </Text>
      </Container>

      <Container className="flex items-baseline gap-1">
        <Text variant="h4" tone="primary">
          ₦{property.rentAmount?.toLocaleString("en-NG")}
        </Text>
        <Text variant="body-xs" tone="secondary">
          {property.rentPaymentFrequency}
        </Text>
      </Container>

      <Container className="flex flex-wrap items-center gap-x-4 gap-y-1">
        {[
          { icon: "🏠", label: property.propertyTypeName },
          { icon: "🛏️", label: `${property.bedroomCount} Beds` },
          { icon: "🛁", label: `${property.bathroomCount} Baths` },
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
              {getInitials(property.owner.firstName, property.owner.lastName)}
            </Text>
          </Container>
          <Text variant="body-xs" tone="secondary">
            {property.relationshipType}
          </Text>
          <VerifiedCheck size={12} />
        </Container>
        <Container className="flex items-center gap-1 text-secondary">
          <LightClock size={14} />
          <Text variant="body-xs" tone="secondary">
            {formatListingDate(property.createdAt)}
          </Text>
        </Container>
      </Container>
    </Link>
  );
};
