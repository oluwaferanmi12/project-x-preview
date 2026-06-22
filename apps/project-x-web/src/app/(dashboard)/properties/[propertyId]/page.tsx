import { PropertyReviewDetailsScreen } from "@/features/house-owners/properties/screens/property-review-details-screen";
import { PublishedPropertyDetailsScreen } from "@/features/house-owners/properties/screens/published-property-details-screen";

export default async function PropertyDetailsPage({
  params,
  searchParams,
}: {
  params: Promise<{ propertyId: string }>;
  searchParams: Promise<{ status?: string }>;
}) {
  const { propertyId } = await params;
  const { status } = await searchParams;

  if (status === "published") {
    return <PublishedPropertyDetailsScreen propertyId={propertyId} />;
  }

  return <PropertyReviewDetailsScreen propertyId={propertyId} />;
}