import { BEDROOM_OPTIONS } from "../../../../guest.constants";
import { FilterPanel } from "../filter-panel";
import { RadioOptionGrid } from "../option-grid";

export const BedroomFilter = ({
  value,
  onChange,
  onApply,
}: {
  value: string;
  onChange: (value: string) => void;
  onApply: () => void;
}) => (
  <FilterPanel title="Select number of bedrooms" onApply={onApply}>
    <RadioOptionGrid
      options={BEDROOM_OPTIONS}
      value={value}
      onChange={onChange}
    />
  </FilterPanel>
);
