import "./globals.css";
import SignOutModule from "@/components/modules/signOut";
import { createClient } from "@/utils/supabase/server";
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
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {user && <SignOutModule />}
        {children}
      </body>
    </html>
  );
}
