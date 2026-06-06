type ProjectCardProps = {
  title: string;
  type: string;
  status: string;
};

export default function ProjectCard({
  title,
  type,
  status,
}: ProjectCardProps) {
  return (
    <div
      className="
        p-6
        rounded-2xl
        bg-slate-950/60
        border border-cyan-500/10
      "
    >
      <h3 className="text-xl font-bold text-cyan-400">
        {title}
      </h3>

      <p className="text-slate-400 mt-2">
        Type: {type}
      </p>

      <p className="text-slate-500 text-sm mt-3">
        Status: {status}
      </p>
    </div>
  );
}