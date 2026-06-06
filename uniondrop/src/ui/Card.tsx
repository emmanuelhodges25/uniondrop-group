interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div
      className="
      bg-slate-900/50
      backdrop-blur-md
      border
      border-cyan-500/20
      rounded-2xl
      p-6
      "
    >
      {children}
    </div>
  );
}