export default function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="
        px-6 py-3
        rounded-xl
        bg-cyan-500
        text-black
        font-bold
        hover:scale-[1.02]
        transition
        duration-300
        active:scale-95
      "
    >
      {children}
    </button>
  );
}