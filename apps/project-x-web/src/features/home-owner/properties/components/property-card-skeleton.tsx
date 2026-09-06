import { Container } from "@repo/ui";

const MetaPillSkeleton = ({ width }: { width: string }) => (
  <Container className="flex items-center gap-2">
    <Container className="h-4 w-4 shrink-0 rounded-full bg-muted" />
    <Container className={`h-3 ${width} rounded-full bg-muted`} />
  </Container>
);

export const PropertyCardSkeleton = () => {
  return (
    <Container className="animate-pulse overflow-hidden rounded-3xl">
      <Container className="h-32 w-full rounded-2xl bg-muted" />

      <Container className="px-3.5 pt-4 pb-4 space-y-4">
        <Container className="h-5 w-4/5 rounded-full bg-muted" />

        <Container className="flex flex-wrap gap-x-6 gap-y-3">
          <MetaPillSkeleton width="w-16" />
          <MetaPillSkeleton width="w-12" />
          <MetaPillSkeleton width="w-16" />
          <MetaPillSkeleton width="w-12" />
        </Container>

        <Container className="flex items-center justify-between pt-1">
          <MetaPillSkeleton width="w-14" />
          <Container className="h-7 w-16 rounded-lg bg-muted" />
        </Container>
      </Container>
    </Container>
  );
};
