import GuestLayout from "./(public)/(guest)/layout";
import { NotFoundScreen } from "@/features/guest/screens/not-found.screen";

export default function NotFound() {
  return (
    <GuestLayout>
      <NotFoundScreen />
    </GuestLayout>
  );
}
