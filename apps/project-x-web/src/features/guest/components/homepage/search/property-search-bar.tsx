"use client";

import { Button, Container, Text } from "@repo/ui";
import {
  BuildingIcon,
  HandRentIcon,
  HomeIcon,
  Location,
  PropertyIcon,
  SearchIcon,
} from "@repo/icons";
import { useCallback, useState } from "react";
import { DEFAULT_SEARCH_FILTERS } from "../../../guest.constants";
import { PropertySearchFilters, SearchFilterKey } from "../../../guest.types";
import { FilterDropdown } from "./filter-dropdown";
import { BathToiletFilter } from "./filters/bath-toilet-filter";
import { BedroomFilter } from "./filters/bedroom-filter";
import { LocationFilter } from "./filters/location-filter";
import { PropertyTypeFilter } from "./filters/property-type-filter";
import { RentFilter } from "./filters/rent-filter";

export const PropertySearchBar = ({
  onSearch,
  className = "mx-auto -mb-8 w-[92%] max-w-[900px]",
}: {
  onSearch?: (filters: PropertySearchFilters) => void;
  className?: string;
}) => {
  // `applied` holds committed filters; `draft` is what the open panel edits.
  const [applied, setApplied] = useState(DEFAULT_SEARCH_FILTERS);
  const [draft, setDraft] = useState(DEFAULT_SEARCH_FILTERS);
  const [openFilter, setOpenFilter] = useState<SearchFilterKey | null>(null);

  const closeFilter = useCallback(() => setOpenFilter(null), []);

  const toggleFilter = (key: SearchFilterKey) => {
    if (openFilter === key) return closeFilter();
    setDraft(applied);
    setOpenFilter(key);
  };

  const updateDraft = (updates: Partial<PropertySearchFilters>) =>
    setDraft((prev) => ({ ...prev, ...updates }));

  const applyDraft = () => {
    setApplied(draft);
    closeFilter();
  };

  return (
    <Container className={`relative z-10 flex flex-col gap-2 rounded-2xl bg-surface p-2 shadow-lg md:flex-row md:items-center ${className}`}>
      <FilterDropdown
        icon={<Location size={16} />}
        label="Location"
        isOpen={openFilter === "location"}
        onToggle={() => toggleFilter("location")}
        onClose={closeFilter}
      >
        <LocationFilter
          value={draft}
          onChange={updateDraft}
          onApply={applyDraft}
        />
      </FilterDropdown>
      <FilterDropdown
        icon={<HomeIcon size={16} />}
        label="Property type"
        isOpen={openFilter === "propertyType"}
        onToggle={() => toggleFilter("propertyType")}
        onClose={closeFilter}
        panelClassName="w-[360px]"
      >
        <PropertyTypeFilter
          value={draft.propertyTypeIds}
          onChange={(propertyTypeIds) => updateDraft({ propertyTypeIds })}
          onApply={applyDraft}
        />
      </FilterDropdown>
      <FilterDropdown
        icon={<BuildingIcon size={16} />}
        label="Bedroom"
        isOpen={openFilter === "bedroom"}
        onToggle={() => toggleFilter("bedroom")}
        onClose={closeFilter}
        panelClassName="w-[320px]"
      >
        <BedroomFilter
          value={draft.bedrooms}
          onChange={(bedrooms) => updateDraft({ bedrooms })}
          onApply={applyDraft}
        />
      </FilterDropdown>
      <FilterDropdown
        icon={<PropertyIcon size={16} />}
        label="Bath/Toilet"
        isOpen={openFilter === "bathToilet"}
        onToggle={() => toggleFilter("bathToilet")}
        onClose={closeFilter}
        panelClassName="w-[320px]"
      >
        <BathToiletFilter
          value={draft}
          onChange={updateDraft}
          onApply={applyDraft}
        />
      </FilterDropdown>
      <FilterDropdown
        icon={<HandRentIcon size={16} />}
        label="Rent"
        isOpen={openFilter === "rent"}
        onToggle={() => toggleFilter("rent")}
        onClose={closeFilter}
      >
        <RentFilter
          value={draft}
          onChange={updateDraft}
          onApply={applyDraft}
        />
      </FilterDropdown>
      <Button
        aria-label="Search properties"
        className="md:w-12 md:px-0"
        onClick={() => onSearch?.(applied)}
      >
        <SearchIcon size={18} />
        <Text as="span" variant="action-button" tone="inverted" className="md:hidden">
          Search
        </Text>
      </Button>
    </Container>
  );
};
