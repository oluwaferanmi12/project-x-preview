"use client";

import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState, type ReactNode } from "react";
import { useToast } from "@repo/ui";

type ReactQueryProviderProps = {
  children: ReactNode;
};

const getErrorMessage = (error: unknown): string => {
  if (error && typeof error === "object") {
    const message = (error as { message?: unknown }).message;
    if (Array.isArray(message)) return message.join(", ");
    if (typeof message === "string" && message.trim()) return message;
  }
  if (error instanceof Error && error.message) return error.message;
  return "Something went wrong. Please try again.";
};

export function ReactQueryProvider({ children }: ReactQueryProviderProps) {
  const { show } = useToast();

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 1,
          },
          mutations: {
            retry: 0,
          },
        },
        queryCache: new QueryCache({
          onError: (error, query) => {
            if (query.meta?.silent) return;
            show(
              (query.meta?.errorTitle as string | undefined) ??
                "Something went wrong",
              getErrorMessage(error),
              "error",
            );
          },
        }),
        mutationCache: new MutationCache({
          onError: (error, _variables, _context, mutation) => {
            if (mutation.meta?.silent) return;
            show(
              (mutation.meta?.errorTitle as string | undefined) ??
                "Something went wrong",
              getErrorMessage(error),
              "error",
            );
          },
        }),
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
