import { Container, NumberInput } from "@repo/ui";
import { PropertySearchFilters } from "../../../../guest.types";
import { FilterPanel } from "../filter-panel";

type RentValue = Pick<PropertySearchFilters, "minRent" | "maxRent">;

export const RentFilter = ({
  value,
  onChange,
  onApply,
}: {
  value: RentValue;
  onChange: (updates: Partial<RentValue>) => void;
  onApply: () => void;
}) => (
  <FilterPanel title="Select rent range" onApply={onApply}>
    <Container className="flex flex-col gap-2 [&>div]:mb-0">
      <NumberInput
        label="Minimum Amount"
        hideLabel
        placeholder="Minimum Amount"
        decimalScale={0}
        value={value.minRent}
        onValueChange={(minRent) => onChange({ minRent })}
      />
      <NumberInput
        label="Maximum Amount"
        hideLabel
        placeholder="Maximum Amount"
        decimalScale={0}
        value={value.maxRent}
        onValueChange={(maxRent) => onChange({ maxRent })}
      />
    </Container>
  </FilterPanel>
);
