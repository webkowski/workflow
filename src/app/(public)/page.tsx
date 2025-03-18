import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] place-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex w-full flex-col items-center gap-8 sm:items-start">
        <h1 className="mx-auto">plan, execute, reward</h1>
        {user && (
          <div className="flex flex-col gap-4">
            <p>Welcome back, {user.email}!</p>
            <Link href="dashboard">
              <Button>Go to Dashboard</Button>
            </Link>
          </div>
        )}
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6 text-xs">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://webkowski.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Handcrafted by webkowski.com 🚀
        </a>
      </footer>
    </div>
  );
}
