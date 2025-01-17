import { createClient } from "@/utils/supabase/server";
// import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex w-full flex-1 flex-col gap-12">
      <div className="flex flex-col items-start gap-2">
        <pre className="max-h-64 overflow-auto rounded border p-3 font-mono text-xs">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
  );
}
