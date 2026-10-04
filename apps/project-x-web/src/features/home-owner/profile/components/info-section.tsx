import type { ReactNode } from "react";
import { EditIcon } from "@repo/icons";
import { Button, Container, Text } from "@repo/ui";

export function InfoSection({
  title,
  onEdit,
  children,
}: {
  title: string;
  onEdit?: () => void;
  children: ReactNode;
}) {
  return (
    <Container
      as="section"
      className="rounded-2xl border border-line bg-surface px-5 pt-3 pb-5 last:pb-10"
    >
      <Container
        as="header"
        className="flex min-h-9 items-center justify-between border-b border-line pb-2"
      >
        <Text as="h2" variant="body-xs" className="m-0 font-medium">
          {title}
        </Text>
        {onEdit && (
          <Button
            type="button"
            variant="muted"
            shorter
            leftIcon={<EditIcon size={14} className="text-primary" />}
            onClick={onEdit}
            className="flex items-center gap-1.5 rounded-md bg-muted px-2 py-1 text-xs [&_svg]:size-3.5"
          >
            Edit
          </Button>
        )}
      </Container>
      <Container
        as="dl"
        className="mt-[22px] mb-0 grid grid-cols-3 gap-x-6 gap-y-7 max-[640px]:grid-cols-2"
      >
        {children}
      </Container>
    </Container>
  );
}
