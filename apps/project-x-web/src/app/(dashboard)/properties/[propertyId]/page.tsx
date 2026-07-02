import { PropertyReviewDetailsScreen } from "@/features/home-owner/properties/screens/property-review-details-screen";
import { PublishedPropertyDetailsScreen } from "@/features/home-owner/properties/screens/published-property-details-screen";

export default async function PropertyDetailsPage({
  params,
  searchParams,
}: {
  params: Promise<{ propertyId: string }>;
  searchParams: Promise<{ status?: string }>;
}) {
  const { propertyId } = await params;
  const { status } = await searchParams;

  if (status === "published" || status === "archived") {
    return (
      <PublishedPropertyDetailsScreen
        propertyId={propertyId}
        mode={status}
      />
    );
  }

  return <PropertyReviewDetailsScreen propertyId={propertyId} />;
}
