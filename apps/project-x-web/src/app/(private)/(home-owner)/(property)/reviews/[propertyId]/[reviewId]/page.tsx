import { Container } from "@repo/ui";
import { ReviewsScreen } from "@/features/home-owner/reviews/screens/reviews-screen";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Review replies" };

export default async function ReviewRepliesPage({
  params,
}: {
  params: Promise<{ propertyId: string; reviewId: string }>;
}) {
  const { propertyId, reviewId } = await params;

  return (
    <Container className="min-h-[90vh] pb-10">
      <ReviewsScreen propertyId={propertyId} reviewId={reviewId} />
    </Container>
  );
}
