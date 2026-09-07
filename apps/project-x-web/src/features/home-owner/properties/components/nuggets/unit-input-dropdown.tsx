import { Container } from "@repo/ui";
import { Select } from "@repo/ui";


type Unit = "currency" | "percent";

type Option = {
    label: string;
    value: string;
};

interface InputDropdownProps {
    unit: Unit;
    currency?: string;
    currencies?: Option[];
    onChange: (value: { unit: Unit; currency?: string }) => void;
}


export const UnitInputDropdown = ({
    unit,
    currency = "NGN",
    currencies = [],
    onChange,
}: InputDropdownProps) => {
    const options: Option[] =
        unit === "percent"
            ? [{ label: "%", value: "percent" }]
            : currencies.length
                ? currencies
                : [{ label: "₦", value: "NGN" }];

    return (
        <Container className="h-full w-20">
            <Select
                label=""
                value={unit === "percent" ? "percent" : currency}
                variant="secondary"
                onChange={(e) => {
                    const value = e.target.value;

                    if (value === "percent") {
                        onChange({ unit: "percent" });
                    } else {
                        onChange({ unit: "currency", currency: value });
                    }
                }}
                options={options}
                noBottomMargin
            />
        </Container>
    );
};