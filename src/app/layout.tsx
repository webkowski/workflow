import { ThemeProvider } from "@/components/base/themeProvider";
import "./globals.css";
import SignOutModule from "@/components/modules/signOut";
import { createClient } from "@/utils/supabase/server";
import { ModeToggle } from "@/components/modules/modeToggle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workflow",
  description: "Workflow app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html
      suppressHydrationWarning
      lang="en"
    >
      <body>
        <ThemeProvider
          disableTransitionOnChange
          enableSystem
          attribute="class"
          defaultTheme="system"
        >
          <div className="absolute right-0 top-0 p-4">
            <ModeToggle />
          </div>
          {user && <SignOutModule />}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
