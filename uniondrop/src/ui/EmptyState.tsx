interface Props {
  title: string;
  description: string;
}

export default function EmptyState({
  title,
  description,
}: Props) {
  return (
    <div className="p-12 text-center rounded-3xl border border-cyan-500/20 bg-slate-900/30">

      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      <p className="text-slate-400 mt-3">
        {description}
      </p>

    </div>
  );
}