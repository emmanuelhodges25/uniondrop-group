export default function SearchBar() {
  return (
    <div className="w-full max-w-md">

      <input
        type="text"
        placeholder="Search..."
        className="
          w-full
          px-4
          py-3
          rounded-xl
          bg-slate-900/50
          border
          border-cyan-500/20
          outline-none
        "
      />

    </div>
  );
}