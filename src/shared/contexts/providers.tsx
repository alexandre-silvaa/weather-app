import { ThemeProvider } from "@emotion/react";
import { PropsWithChildren } from "react";
import { theme } from "../themes/theme";
import { CssBaseline } from "@mui/material";

export default function Providers({ children }: Readonly<PropsWithChildren>) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
