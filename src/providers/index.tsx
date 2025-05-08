import { AuthProvider } from "./AuthProvider";
import { ThemeProvider } from "./ThemProvider";

export default function Providers({
  children,
}: Readonly<React.PropsWithChildren>) {
  return (
    <ThemeProvider>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
}
