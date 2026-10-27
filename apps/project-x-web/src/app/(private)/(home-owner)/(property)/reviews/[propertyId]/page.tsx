import { Container } from "@repo/ui";
import { ReviewsScreen } from "@/features/home-owner/reviews/screens/reviews-screen";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Reviews" };

export default async function PropertyReviewsPage({
  params,
}: {
  params: Promise<{ propertyId: string }>;
}) {
  const { propertyId } = await params;

  return (
    <Container className="min-h-[90vh] pb-10">
      <ReviewsScreen propertyId={propertyId} />
    </Container>
  );
}
