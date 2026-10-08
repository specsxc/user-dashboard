import "./index.css";
import SearchUsers from "./components/SearchUsers";
import FilterUsers from "./components/FilterUsers";
import Header from "./components/Header";
import UsersList from "./components/UsersList";
import useFetchUsers from "./hooks/useUsers";

function App() {
  const { users, setUsers, loading } = useFetchUsers();
  console.log(users);
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
    </div>
  );
}

export default App;
