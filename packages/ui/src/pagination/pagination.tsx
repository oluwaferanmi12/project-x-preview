"use client";

import { Container } from "../container";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  return (
    <Container className="mt-8 flex items-center justify-center gap-2">
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        const isActive = currentPage === page;

        return (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-medium transition-colors ${
              isActive
                ? "bg-p300 text-inverted"
                : "bg-transparent text-secondary hover:bg-p50 hover:text-p300"
            }`}
          >
            {page}
          </button>
        );
      })}
    </Container>
  );
};

export type { PaginationProps };