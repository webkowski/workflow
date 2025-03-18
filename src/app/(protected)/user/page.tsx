import { createClient } from "@/utils/supabase/server";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <pre className="max-h-64 overflow-auto rounded border p-3 font-mono text-xs">{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
