import type { User, UsersListProps } from "../types/types";
import UserItem from "./UserItem";

export default function UsersList({ users, loading }: UsersListProps) {
  if (loading) return <div className="text-center">Loading..</div>;
  if (!users || users.length === 0)
    return <div className="text-center">User not found</div>;
  return (
    <div className="mx-2 flex flex-col gap-1">
      {users.map((user: User) => (
        <UserItem key={user.id} userItem={user}></UserItem>
      ))}
    </div>
  );
}
