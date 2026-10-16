import { useGetPropertyTypes } from "@/features/home-owner/properties/hooks/property.hook";
import { ANY_OPTION } from "../../../../guest.constants";
import { FilterPanel } from "../filter-panel";
import { CheckboxOptionGrid } from "../option-grid";

export const PropertyTypeFilter = ({
  value,
  onChange,
  onApply,
}: {
  value: string[];
  onChange: (value: string[]) => void;
  onApply: () => void;
}) => {
  const { data: propertyTypes } = useGetPropertyTypes();
  const options = [
    { label: "Any", value: ANY_OPTION },
    ...(propertyTypes ?? []).map((item) => ({
      label: item.name,
      value: item.id,
    })),
  ];
  // "Any" is represented by an empty selection.
  const selected = value.length ? value : [ANY_OPTION];

  const handleToggle = (id: string) => {
    if (id === ANY_OPTION) return onChange([]);
    onChange(
      value.includes(id) ? value.filter((item) => item !== id) : [...value, id],
    );
  };

  return (
    <FilterPanel title="Select a property type" onApply={onApply}>
      <CheckboxOptionGrid
        options={options}
        values={selected}
        onToggle={handleToggle}
      />
    </FilterPanel>
  );
};
