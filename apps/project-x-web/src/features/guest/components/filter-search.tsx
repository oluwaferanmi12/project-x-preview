import {
  BedIcon,
  Location,
  PriceIcon,
  PropertyIcon,
  SearchIcon,
} from "@repo/icons";
import { Button, Container, SelectTrigger } from "@repo/ui";
import React from "react";

export const FilterSearch = () => {
  return (
    <Container className="bg-surface p-2 rounded-3xl w-full flex gap-2.5">
      <SelectTrigger
        label="Location"
        leftIcon={<Location size={20} />}
        className="text-s300"
      />
      <SelectTrigger
        label="Property type"
        leftIcon={<PropertyIcon size={20} />}
        className="text-s300"
      />
      <SelectTrigger
        label="Bedroom "
        leftIcon={<BedIcon size={20} />}
        className="text-s300"
      />
      <SelectTrigger
        label="Rent"
        leftIcon={<PriceIcon size={20} />}
        className="text-s300"
        
      />
      <Button leftIcon={<SearchIcon size={20} className="text-inverted" />}></Button>
    </Container>
  );
};
