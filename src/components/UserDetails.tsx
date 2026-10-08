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
        if (!res.ok) throw new Error("Wystąpił błąd");
        const data = await res.json();
        setUser(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [userid]);

  if (loading)
    return <div className="m-4 text-center text-2xl">Loading...</div>;
  if (!user)
    return <div className="m-4 text-center text-2xl">User not found</div>;
  return (
    <div className="p-2">
      <h1 className="my-4 border-b border-white pb-2 text-2xl">User Details</h1>
      <div className="mx-2 my-2 rounded-2xl border border-white px-4 py-4">
        <h2 className="text-lg">{user.name}</h2>
        <p>{user.email}</p>
        <p>Gender: {user.gender}</p>
        <p className="mb-2">
          Status:{" "}
          <span
            className={
              user.status === "active" ? "text-green-600" : "text-red-700"
            }
          >
            {user.status}
          </span>
        </p>
        <NavLink to="/" className="font-semibold hover:text-blue-600">
          [ ← Back ]
        </NavLink>
      </div>
    </div>
  );
}
