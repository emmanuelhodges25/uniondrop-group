import { projects } from "../data/projects";
import ProjectCard from "../components/dashboard/ProjectCard";

export default function Projects() {
  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-4xl font-bold">
          Projects
        </h1>
        <p className="text-slate-400 mt-2">
          Manage your UnionDrop client projects
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-6">

        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

      </div>

    </div>
  );
}