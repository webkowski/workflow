import type { Metadata } from "next";
import "./globals.css";
import SignOutModule from "@/components/modules/signOut";
import { createClient } from "@/utils/supabase/server";

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
      <body
        className="antialiased text-white bg-black"
      >
        {user && <SignOutModule />}
        {children}
      </body>
    </html>
  );
}
