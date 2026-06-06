import { type Project } from "../../types/project";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const statusColor =
    project.status === "active"
      ? "text-green-400"
      : project.status === "paused"
      ? "text-yellow-400"
      : "text-gray-400";

  return (
    <div className="p-6 rounded-2xl bg-slate-900/40 border border-cyan-500/20 hover:border-cyan-400 transition">

      <div className="flex justify-between items-start">

        <h3 className="text-xl font-bold">
          {project.name}
        </h3>

        <span className={`text-sm ${statusColor}`}>
          {project.status.toUpperCase()}
        </span>

      </div>

      <p className="text-slate-400 mt-2">
        {project.description}
      </p>

      <div className="mt-4 text-cyan-400 font-bold">
        ${project.budget}
      </div>

    </div>
  );
}