import type { User, UsersListProps } from "../types/types";
import UserItem from "./UserItem";

export default function UsersList({ users, loading }: UsersListProps) {
  if (loading) return <div>Loading..</div>;
  if (!users || users.length === 0) return <div>Brak danych</div>;
  return (
    <div>
      {users.map((user: User) => (
        <UserItem key={user.id} userItem={user}></UserItem>
      ))}
    </div>
  );
}
