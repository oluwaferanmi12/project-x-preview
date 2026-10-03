import { Container } from "@repo/ui";
import { MessagesScreen } from "@/features/home-owner/messages/screens/messages-screen";

export default async function MessagesPage({
  params,
}: {
  params: Promise<{ propertyId: string }>;
}) {
  const { propertyId } = await params;
  return (
    <Container className="min-h-[90vh] pb-10">
      <MessagesScreen propertyId={propertyId} />
    </Container>
  );
}
