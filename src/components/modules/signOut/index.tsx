"use client";

import { LogOut } from "lucide-react";
import { createClient } from "@/utils/supabase/client";

export default function SignOutModule() {
  const signOut = async () => {
    await createClient().auth.signOut();
    window.location.reload();
  };

  return (
    <button
      className="flex items-center gap-2"
      onClick={signOut}
    >
      <LogOut />
      Log out
    </button>
  );
}
