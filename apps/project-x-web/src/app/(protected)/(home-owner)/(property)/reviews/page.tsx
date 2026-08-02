import { Container } from "@repo/ui";
import { ReviewsScreen } from "@/features/home-owner/reviews/screens/reviews-screen";

export default function ReviewsPage() {
  return (
    <Container className="min-h-[90vh] pb-10">
      <ReviewsScreen />
    </Container>
  );
}
