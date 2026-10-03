import ListPropertyScreen from "@/features/home-owner/properties/screens/list-property.screen";
import { Suspense } from "react";

const ListProperty = () => {
  return (
    <Suspense fallback={null}>
      <ListPropertyScreen />
    </Suspense>
  );
};

export default ListProperty;
