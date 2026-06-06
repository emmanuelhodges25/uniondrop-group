interface InputProps {
  type?: string;
  placeholder?: string;
  label?: string;
}

export default function Input({
  type = "text",
  placeholder,
  label,
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm text-slate-300">
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        className="
          px-4
          py-3
          rounded-xl
          bg-slate-900/60
          border
          border-cyan-500/20
          focus:border-cyan-400
          outline-none
          text-white
        "
      />
    </div>
  );
}