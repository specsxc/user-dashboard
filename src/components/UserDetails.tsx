import { useParams, NavLink } from "react-router";
import { useEffect, useState } from "react";
import type { User } from "../types/types";

export default function UserDetails() {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);
  const { userid } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://gorest.co.in/public/v2/users/${userid}`,
          {
            headers: {
              Accept: "application/json",
            },
          },
        );
        if (!res) throw new Error("Błąd");
        const data = await res.json();
        if (!data) throw new Error("Brak danych");
        setUser(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [userid]);

  console.log(user);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>Brak danych</div>;
  return (
    <div>
      <h1>User Details</h1>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Gender: {user.gender}</p>
      <p>Status: {user.status}</p>
      <NavLink to="/">[ ← Back ]</NavLink>
    </div>
  );
}
