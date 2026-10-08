import type { SearchUsersProps } from "../types/types";

export default function SearchUsers({ search, setSearch }: SearchUsersProps) {
  return (
    <div className="m-2">
      <label className="flex">
        <input
          type="text"
          className="flex-1 rounded-2xl bg-white px-3 py-1 text-black placeholder:text-gray-400"
          name="name"
          placeholder="Search users.."
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          required
        />
      </label>
    </div>
  );
}
