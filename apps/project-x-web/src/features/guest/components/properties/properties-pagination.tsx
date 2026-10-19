"use client";

import { ArrowLeft, ArrowRight } from "@repo/icons";
import { Button, Container, Text } from "@repo/ui";

const VISIBLE_PAGES = 4;

export const PropertiesPagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => {
  const start = Math.max(
    1,
    Math.min(currentPage - 1, totalPages - VISIBLE_PAGES + 1),
  );
  const pages = Array.from(
    { length: Math.min(VISIBLE_PAGES, totalPages) },
    (_, index) => start + index,
  );

  return (
    <Container className="mt-10 flex flex-col-reverse items-center gap-4 border-t border-line pt-4 md:flex-row md:justify-between">
      <Text variant="body-xs" tone="primary">
        Page {currentPage} of {totalPages}
      </Text>
      <Container className="flex items-center gap-2">
        <Button
          variant="transparent"
          shorter
          aria-label="Previous page"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="text-s300"
        >
          <ArrowLeft size={16} />
        </Button>
        {pages.map((page) => (
          <Button
            key={page}
            shorter
            variant={page === currentPage ? "secondary" : "transparent"}
            aria-label={`Page ${page}`}
            onClick={() => onPageChange(page)}
            className="!h-8 !w-12 !px-0 text-sm"
          >
            {page}
          </Button>
        ))}
        <Button
          variant="transparent"
          shorter
          aria-label="Next page"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="text-s300"
        >
          <ArrowRight size={16} />
        </Button>
      </Container>
    </Container>
  );
};
