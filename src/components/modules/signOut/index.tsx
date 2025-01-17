"use client"

import Button from "@/components/base/button";
import { createClient } from "@/utils/supabase/client"

export default function SignOutModule() {
  const signOut = async () => {
    await createClient().auth.signOut();
    window.location.reload();
  }
  
  return (
    <Button onClick={signOut}>Sign out</Button>
  )
}