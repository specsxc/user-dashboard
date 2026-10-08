import "./index.css";
import SearchUsers from "./components/SearchUsers";
import FilterUsers from "./components/FilterUsers";
import Header from "./components/Header";
import UsersList from "./components/UsersList";
import useFetchUsers from "./hooks/useUsers";
import { Outlet } from "react-router";
import { useState } from "react";
import type { Status } from "./types/types";

function App() {
  const { users, setUsers, loading } = useFetchUsers();
  const [search, setSearch] = useState<string>("");
  const [status, setStatus] = useState<Status>("all");

  const filteredUsers = users.filter((user) => {
    const query = search.toLowerCase().trim();
    const searchMatch = user.name.toLowerCase().includes(query);
    const statusMatch = status === "all" ? true : user.status === status;
    return searchMatch && statusMatch;
  });
  return (
    <div className="flex flex-col p-2">
      <Header></Header>
      <SearchUsers search={search} setSearch={setSearch}></SearchUsers>
      <FilterUsers status={status} setStatus={setStatus}></FilterUsers>
      <UsersList
        users={filteredUsers}
        setUsers={setUsers}
        loading={loading}
      ></UsersList>
      <Outlet context={users} />
    </div>
  );
}

export default App;
