import { Checkbox, Container, Radio } from "@repo/ui";

type Option = { label: string; value: string };

const optionClass =
  "rounded-lg bg-background p-3 w-full cursor-pointer";

export const RadioOptionGrid = ({
  options,
  value,
  onChange,
  columns = 3,
}: {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  columns?: 2 | 3;
}) => (
  <Container className={`grid gap-2 ${columns === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
    {options.map((option) => (
      <Container
        key={option.value}
        className={optionClass}
        onClick={() => onChange(option.value)}
      >
        <Radio
          checked={value === option.value}
          onChange={() => onChange(option.value)}
          label={option.label}
          className="pointer-events-none gap-2"
        />
      </Container>
    ))}
  </Container>
);

export const CheckboxOptionGrid = ({
  options,
  values,
  onToggle,
  columns = 2,
}: {
  options: Option[];
  values: string[];
  onToggle: (value: string) => void;
  columns?: 2 | 3;
}) => (
  <Container className={`grid gap-2 ${columns === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
    {options.map((option) => (
      <Container
        key={option.value}
        className={optionClass}
        onClick={() => onToggle(option.value)}
      >
        <Checkbox
          checked={values.includes(option.value)}
          onChange={() => onToggle(option.value)}
          label={option.label}
          className="pointer-events-none gap-2"
        />
      </Container>
    ))}
  </Container>
);
