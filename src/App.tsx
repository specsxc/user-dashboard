import "./index.css";
import SearchUsers from "./components/SearchUsers";
import FilterUsers from "./components/FilterUsers";
import Header from "./components/Header";
import UsersList from "./components/UsersList";
import useFetchUsers from "./hooks/useUsers";
import { Outlet } from "react-router";

function App() {
  const { users, setUsers, loading } = useFetchUsers();
  return (
    <div className="p-2">
      <Header></Header>
      <SearchUsers></SearchUsers>
      <FilterUsers></FilterUsers>
      <UsersList
        users={users}
        setUsers={setUsers}
        loading={loading}
      ></UsersList>
      <Outlet context={users} />
    </div>
  );
}

export default App;
