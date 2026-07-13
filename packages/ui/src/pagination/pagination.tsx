"use client";

import { Button } from "../button";
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
          <Button
            key={page}
            onClick={() => onPageChange(page)}
            as="button"
            // variant="transparent"
            className={` ${
             isActive
               ? "bg-s300 px-6 text-inverted hover:bg-s300"
               : "bg-transparent text-secondary hover:bg-s50 hover:text-s300"
           } `}
          >
            {page}
          </Button>
        );
      })}
    </Container>
  );
};

export type { PaginationProps };