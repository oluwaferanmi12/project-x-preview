import type { Metadata } from "next";
import PropertyDetailsScreen from "@/features/guest/screens/property-details.screen";

export const metadata: Metadata = { title: "Property Details" };

export default async function PropertyDetailsPage({
  params,
}: {
  params: Promise<{ propertyId: string }>;
}) {
  const { propertyId } = await params;
  return <PropertyDetailsScreen propertyId={propertyId} />;
}
