export default function Skeleton({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`animate-pulse bg-slate-800/40 rounded-xl ${className}`}
    />
  );
}