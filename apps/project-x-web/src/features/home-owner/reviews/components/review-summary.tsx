import type { ReactNode } from "react";
import Image from "next/image";
import { ArrowRight, RatingStarIcon, RatingMessagesIcon, RatingBuildingIcon } from "@repo/icons";
import { Button, Container, Text } from "@repo/ui";
import type { ReviewedProperty } from "../data/reviews.mock";

type ReviewSummaryProps = {
  property: ReviewedProperty;
  totalProperties: number;
  compact?: boolean;
  showPropertyCard?: boolean;
};

export const ReviewSummary = ({
  property,
  totalProperties,
  compact,
  showPropertyCard,
}: ReviewSummaryProps) => (
  <Container className="space-y-5">
    <Container className="space-y-3">
    <MetricBand
  label={compact ? "Total Rating" : "Avg Rating"}
  value={property.rating.toFixed(1)}
  suffix="/5.0"
  className="bg-indigo-back"
  valueClassName="text-indigo-fore"
  icon={<RatingStarIcon className="text-indigo-fore" />}
/>
      <MetricBand
        label="Total Reviews"
        value={property.totalReviews.toString().padStart(2, "0")}
        className="bg-purple-fore"
        valueClassName="text-purple-back"
        icon={<RatingMessagesIcon  className="text-purple-back" />}
      />
      {!compact && (
        <MetricBand
          label="Total Properties"
          value={totalProperties.toString().padStart(2, "0")}
          className="bg-mossgreen-back"
          valueClassName="text-mossgreen-fore"
          icon={<RatingBuildingIcon className="text-mossgreen-fore"  />}
        />
      )}
    </Container>
    <hr className=" border-line" />

    <RatingBreakdown property={property} />
    {showPropertyCard && <SummaryPropertyCard property={property} />}
  </Container>
);

const RatingBreakdown = ({ property }: { property: ReviewedProperty }) => (
  <Container className="rounded-xl bg-surface p-4">
    <Text variant="body-sm" tone="primary">
      Overall Rating Breakdown
    </Text>
    <Text variant="body-xs"  tone="secondary">
      See how your ratings are distributed
    </Text>

    <Container className="mt-4 h-px bg-line" />

    <Container className="mt-5 grid grid-cols-2 gap-3">
      {property.categories.map((category) => (
        <Container
          key={category.label}
          className="flex min-h-26 flex-col items-center justify-center rounded-lg bg-background p-3.5 text-center"
        >
          <RatingProgress score={category.score} />
          <Text variant="body-sm" className="mt-3 leading-tight" tone="primary">
            {category.label}
          </Text>
        </Container>
      ))}
    </Container>
  </Container>
);

const SummaryPropertyCard = ({ property }: { property: ReviewedProperty }) => (
    <Container className="grid min-h-21 grid-cols-[86px_minmax(0,1fr)] overflow-hidden rounded-lg border border-line bg-surface transition hover:border-s500">
     <Container className="relative h-full min-h-21 overflow-hidden bg-muted">
      <Image
        src={property.image}
        alt={property.title}
        fill
        className="object-cover"
      />
    </Container>

      <Container className="flex min-w-0 flex-col px-3 justify-start py-2">
        <Text
        variant="body-md"
          className="line-clamp-2"
          tone="primary"
        >
          {property.title}, {property.address}
        </Text>
        <Button
          shorter
          variant="transparent"
          rightIcon={<ArrowRight size={12} />}
          className="mt-2 self-start text-sm   px-0 font-bold text-s500 hover:bg-transparent"
        >
          View Property
        </Button>
      </Container>
    </Container>
);

const MetricBand = ({
  label,
  value,
  suffix,
  className,
  valueClassName,
  icon,
}: {
  label: string;
  value: string;
  suffix?: string;
  className: string;
  valueClassName: string;
  icon: ReactNode;
}) => (
  <Container
    className={`relative min-h-[96px] overflow-hidden rounded-xl p-5 ${className}`}
  >
    <Text
      variant="body-sm"
      className="font-sans font-medium leading-none"
      tone="primary"
    >
      {label}
    </Text>

    <Container className={`mt-5 flex items-baseline gap-1 ${valueClassName}`}>
      <Text variant="body-xl" className="font-bold leading-none">
        {value}
      </Text>

      {suffix && (
        <Text variant="body-md" className="font-semibold leading-none">
          {suffix}
        </Text>
      )}
    </Container>

    <Container className="absolute -bottom-3 right-0 opacity-90">
      {icon}
    </Container>
  </Container>
);

const RatingProgress = ({ score }: { score: number }) => {
  const percentage = Math.max(0, Math.min(score / 5, 1)) * 100;

  return (
    <Container
      className="flex h-14 w-14 items-center justify-center rounded-full"
      style={{
        background: `conic-gradient(var(--persian-red-fore) ${percentage}%, var(--w50) 0)`,
      }}
    >
      <Container className="flex h-11 w-11 items-center justify-center rounded-full bg-surface">
        <Text className="text-sm font-bold text-persian-red-fore">
          {score.toFixed(1)}
        </Text>
      </Container>
    </Container>
  );
};
