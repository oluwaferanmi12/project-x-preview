import { Container, Text } from "@repo/ui";
import { BEDROOM_OPTIONS, TOILET_OPTIONS } from "../../../../guest.constants";
import { PropertySearchFilters } from "../../../../guest.types";
import { FilterPanel } from "../filter-panel";
import { RadioOptionGrid } from "../option-grid";

type BathToiletValue = Pick<PropertySearchFilters, "bathrooms" | "toilets">;

export const BathToiletFilter = ({
  value,
  onChange,
  onApply,
}: {
  value: BathToiletValue;
  onChange: (updates: Partial<BathToiletValue>) => void;
  onApply: () => void;
}) => (
  <FilterPanel title="Select number of bathrooms" onApply={onApply}>
    <RadioOptionGrid
      options={BEDROOM_OPTIONS}
      value={value.bathrooms}
      onChange={(bathrooms) => onChange({ bathrooms })}
    />
    <Container className="flex flex-col gap-4">
      <Text variant="action-label" tone="primary">
        Select number of toilet
      </Text>
      <RadioOptionGrid
        options={TOILET_OPTIONS}
        value={value.toilets}
        onChange={(toilets) => onChange({ toilets })}
      />
    </Container>
  </FilterPanel>
);
