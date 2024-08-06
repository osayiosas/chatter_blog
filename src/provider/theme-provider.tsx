"use Client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import * as React from "react";

export default function NextThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
}
