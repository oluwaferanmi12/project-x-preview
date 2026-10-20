"use client";

import {
  BedIcon,
  Location,
  PriceIcon,
  PropertyIcon,
  SearchIcon,
} from "@repo/icons";
import { Button, Container, Popover, SelectTrigger } from "@repo/ui";
import { useState } from "react";
import { LocationPanel } from "./panels/location-panel";
import { PropertyPanel } from "./panels/property-panel";
import { BedroomPanel } from "./panels/bedroom-pannel";
import { RentPanel } from "./panels/rent-panel";

type Filter = "location" | "property" | "bedroom" | "rent";

export const FilterSearch = () => {
  const [openFilter, setOpenFilter] = useState<Filter | null>(null);

  const handleOpenChange = (filter: Filter) => (open: boolean) => {
    setOpenFilter(open ? filter : null);
  };

  return (
    <Container className="bg-surface p-2 rounded-3xl w-full flex lg:flex-row flex-col gap-2.5 shadow-[0px_18px_88px_-4px_#18274B24,0px_8px_28px_-6px_#18274B1F]">
      <Popover
        open={openFilter === "location"}
        onOpenChange={handleOpenChange("location")}
        trigger={
          <SelectTrigger
            label="Location"
            leftIcon={<Location size={20} />}
            className="text-s300"
            open={openFilter === "location"}
          />
        }
      >
        <LocationPanel />
      </Popover>
      <Popover
        open={openFilter === "property"}
        onOpenChange={handleOpenChange("property")}
        trigger={
          <SelectTrigger
            label="Property type"
            leftIcon={<PropertyIcon size={20} />}
            className="text-s300"
            open={openFilter === "property"}
          />
        }
      >
        <PropertyPanel />
      </Popover>
      <Popover trigger={
        <SelectTrigger
          label="Bedroom"
          leftIcon={<BedIcon size={20} />}
          className="text-s300"
          open={openFilter === "bedroom"}
        />
      } onOpenChange={handleOpenChange("bedroom")} open={openFilter === "bedroom"}>
        <BedroomPanel />
      </Popover>
      <Popover trigger={
        <SelectTrigger
          label="Rent"
          leftIcon={<PriceIcon size={20} />}
          className="text-s300"
        />
      } onOpenChange={handleOpenChange("rent")} open={openFilter === "rent"}>
        <RentPanel />
      </Popover>
      <Button leftIcon={<SearchIcon size={20} className="text-inverted" />}>
        <Container className="lg:hidden" as="span">
          Search
        </Container>
      </Button>
    </Container>
  );
};
