import type { UserItemProps } from "../types/types";

export default function UserItem({ userItem }: UserItemProps) {
  return (
    <div className="my-2 border border-white p-2">
      <h2>{userItem.name}</h2>
      <p>{userItem.email}</p>
      <p>Status: {userItem.status}</p>
      <button>View details</button>
    </div>
  );
}
