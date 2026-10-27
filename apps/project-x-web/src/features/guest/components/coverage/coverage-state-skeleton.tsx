import { Container } from "@repo/ui";

export const CoverageStateSkeleton = () => {
  return (
    <Container className="h-73.5 animate-pulse flex flex-col items-start justify-between rounded-2xl p-5 bg-muted">
      <Container className="h-7 w-2/5 rounded-full bg-line" />
      <Container className="h-8 w-12 rounded-lg bg-line" />
    </Container>
  );
};
