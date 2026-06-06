import ListPropertyScreen from "@/features/list-property/screens/list-property.screen";
import { Suspense } from "react";

const ListProperty = () => {
  return (
    <Suspense fallback={null}>
      <ListPropertyScreen />
    </Suspense>
  );
};

export default ListProperty;
