import { useEffect, useState } from "react";
import type { User } from "../types/types";

export default function useUsers() {
  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://gorest.co.in/public/v2/users", {
          headers: {
            Accept: "application/json",
          },
        });
        if (!res.ok) throw new Error("Wystąpił błąd z API");
        const data = await res.json();
        setUsers(data);
      } catch (e) {
        console.error(e);
        setError("Failed to load users");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { users, setUsers, loading, error };
}
