import { SearchIcon } from "@repo/icons";
import { Container } from "@repo/ui";

type ReviewsSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export const ReviewsSearch = ({ value, onChange }: ReviewsSearchProps) => (
  <Container className="mb-5 max-w-md rounded-xl shadow-md">
    <label className="relative block">
      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2">
        <SearchIcon className="text-secondary" />
      </span>

      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search property..."
        className="h-11 w-full rounded-xl border border-line bg-surface pl-10 pr-4 text-sm text-primary outline-none transition focus:border-p300"
      />
    </label>
  </Container>
);
