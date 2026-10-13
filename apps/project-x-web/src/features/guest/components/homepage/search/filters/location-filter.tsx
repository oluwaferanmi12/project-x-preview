import { Container, Input, Select } from "@repo/ui";
import { useGetLGA, useGetStates } from "@/features/general/hooks/general.hooks";
import { PropertySearchFilters } from "../../../../guest.types";
import { FilterPanel } from "../filter-panel";

type LocationValue = Pick<PropertySearchFilters, "stateId" | "lgaId" | "area">;

export const LocationFilter = ({
  value,
  onChange,
  onApply,
}: {
  value: LocationValue;
  onChange: (updates: Partial<LocationValue>) => void;
  onApply: () => void;
}) => {
  const { data: states, isLoading: isLoadingStates } = useGetStates();
  const { data: localGovernments, isFetching: isLoadingLGA } = useGetLGA(
    value.stateId,
  );

  return (
    <FilterPanel title="Select a location" onApply={onApply}>
      <Container className="flex flex-col gap-2 [&>div]:mb-0">
        <Select
          label="State"
          hideLabel
          noBottomMargin
          variant="secondary"
          loading={isLoadingStates}
          loadingText="Loading states..."
          options={[
            { label: "State", value: "" },
            ...(states ?? []).map((item) => ({
              label: item.name,
              value: item.id,
            })),
          ]}
          value={value.stateId}
          onChange={({ target }) =>
            onChange({ stateId: target.value, lgaId: "" })
          }
        />
        <Select
          label="Local Government Area"
          hideLabel
          noBottomMargin
          variant="secondary"
          loading={isLoadingLGA}
          loadingText="Loading local governments..."
          disabled={!value.stateId}
          options={[
            { label: "Local Government Area", value: "" },
            ...(localGovernments ?? []).map((item) => ({
              label: item.name,
              value: item.id,
            })),
          ]}
          value={value.lgaId}
          onChange={({ target }) => onChange({ lgaId: target.value })}
        />
        <Input
          label="Area/Neighbourhood"
          hideLabel
          placeholder="Area/Neighbourhood"
          value={value.area}
          onChange={(event) => onChange({ area: event.target.value })}
        />
      </Container>
    </FilterPanel>
  );
};
