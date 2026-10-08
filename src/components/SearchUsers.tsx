import type { SearchUsersProps } from "../types/types";

export default function SearchUsers({ search, setSearch }: SearchUsersProps) {
  return (
    <div>
      <label>
        <input
          type="text"
          className="rounded-2xl bg-white px-2 py-1 text-black placeholder:text-gray-400"
          name="name"
          placeholder="user-name"
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          required
        />
      </label>
    </div>
  );
}
