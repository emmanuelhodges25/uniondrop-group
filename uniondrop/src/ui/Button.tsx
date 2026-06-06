interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit";
}

export default function Button({
  children,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      className="
        w-full
        px-6
        py-3
        rounded-xl
        bg-cyan-500
        hover:bg-cyan-400
        text-black
        font-bold
        transition
      "
    >
      {children}
    </button>
  );
}