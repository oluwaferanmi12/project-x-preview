"use client";

import { Button } from "../button";
import { Container } from "../container";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  align?: "start" | "center";
};

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  align = "center",
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  return (
    <Container className={`mt-8 flex items-center gap-2 ${align === "start" ? "justify-start" : "justify-center"}`}>
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        const isActive = currentPage === page;

        return (
          <Button
            key={page}
            onClick={() => onPageChange(page)}
            as="button"
            // variant="transparent"
            className={` text-sm ${
              isActive
               ? "bg-s300 rounded-lg w-[48px] h-[32px] px-4 md:px-6 text-inverted hover:bg-s300"
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