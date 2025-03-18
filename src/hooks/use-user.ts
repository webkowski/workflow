"use client";
import { useState, useEffect } from "react";
import { type User } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/client";

const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const supabase = await createClient();
        const { data, error } = await supabase.auth.getUser();
        if (error) throw error;
        setUser(data.user);
      } catch (err: unknown) {
        // eslint-disable-next-line no-console
        console.error(err);
        setError("Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, loading, error };
};

export default useUser;
