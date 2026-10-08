export type User = {
  id: number;
  name: string;
  email: string;
  gender: "female" | "male";
  status: "active" | "inactive";
};

export type UsersListProps = {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  loading: boolean;
};

export type UserItemProps = {
  userItem: User;
};
