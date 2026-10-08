import type { FilterUsersProps } from "../types/types";

export default function FilterUsers({ status, setStatus }: FilterUsersProps) {
  return (
    <div className="my-2 flex gap-3">
      <button
        onClick={() => setStatus("all")}
        className={`cursor-pointer rounded-2xl border border-white px-3 py-1 hover:text-blue-600 ${status === "all" && "border-blue-600 text-blue-600"}`}
      >
        All
      </button>
      <button
        onClick={() => setStatus("active")}
        className={`cursor-pointer rounded-2xl border border-white px-3 py-1 hover:text-blue-600 ${status === "active" && "border-blue-600 text-blue-600"}`}
      >
        Active
      </button>
      <button
        onClick={() => setStatus("inactive")}
        className={`cursor-pointer rounded-2xl border border-white px-3 py-1 hover:text-blue-600 ${status === "inactive" && "border-blue-600 text-blue-600"}`}
      >
        Inactive
      </button>
    </div>
  );
}
