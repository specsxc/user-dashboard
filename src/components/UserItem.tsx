import type { UserItemProps } from "../types/types";
import { NavLink } from "react-router";

export default function UserItem({ userItem }: UserItemProps) {
  return (
    <div className="my-2 rounded-2xl border border-white px-4 py-4">
      <h2 className="text-lg">{userItem.name}</h2>
      <p>{userItem.email}</p>
      <p className="mb-2">
        Status:{" "}
        <span
          className={
            userItem.status === "active" ? "text-green-600" : "text-red-700"
          }
        >
          {userItem.status}
        </span>
      </p>
      <NavLink
        to={`/user/${userItem.id}`}
        className="font-semibold underline hover:text-blue-600"
      >
        View details
      </NavLink>
    </div>
  );
}
