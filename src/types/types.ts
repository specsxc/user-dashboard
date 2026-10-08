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

export type SearchUsersProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export type Status = "all" | "active" | "inactive";

export type FilterUsersProps = {
  status: Status;
  setStatus: React.Dispatch<React.SetStateAction<Status>>;
};
