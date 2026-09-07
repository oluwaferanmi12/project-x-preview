import { SearchIcon } from "@repo/icons";
import { Container } from "@repo/ui";

type MessagesSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export const MessagesSearch = ({ value, onChange }: MessagesSearchProps) => (
  <Container className="max-w-md rounded-xl">
    <label className="relative block">
      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2">
        <SearchIcon className="text-secondary" />
      </span>

      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search..."
        className="h-10 md:h-12 w-full rounded-xl border border-line bg-surface pl-10 pr-4 text-sm text-primary outline-none transition focus:border-p300"
      />
    </label>
  </Container>
);
