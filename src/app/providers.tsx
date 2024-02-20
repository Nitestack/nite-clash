"use client";

import { type PropsWithChildren } from "react";

import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

export function Providers({ children }: PropsWithChildren) {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="dark" attribute="class">
          <NextUIProvider>{children}</NextUIProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
