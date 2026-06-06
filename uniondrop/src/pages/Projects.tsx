import { useState } from "react";

type Project = {
  id: string;
  title: string;
  type: string;
  status: "Pending" | "In Progress" | "Completed";
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [showModal, setShowModal] = useState(false);

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");

  const createProject = () => {
    if (!title.trim() || !type.trim()) return;

    const newProject: Project = {
      id: crypto.randomUUID(),
      title,
      type,
      status: "Pending",
    };

    setProjects((prev) => [newProject, ...prev]);

    setTitle("");
    setType("");
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-black text-cyan-400">
            Projects
          </h1>

          <p className="text-slate-400 mt-2">
            Manage and track all active client projects.
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="
            px-5
            py-3
            bg-cyan-500
            text-black
            font-bold
            rounded-xl
            hover:scale-105
            transition
          "
        >
          New Project
        </button>
      </div>

      {/* EMPTY STATE */}
      {projects.length === 0 && (
        <div
          className="
            border
            border-cyan-500/10
            rounded-3xl
            p-12
            text-center
            bg-slate-950/50
          "
        >
          <h2 className="text-2xl font-bold text-cyan-400">
            No Projects Yet
          </h2>

          <p className="text-slate-400 mt-4">
            Create your first project to begin tracking work.
          </p>
        </div>
      )}

      {/* PROJECT GRID */}
      {projects.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {projects.map((project) => (
            <div
              key={project.id}
              className="
                p-6
                rounded-3xl
                border
                border-cyan-500/10
                bg-slate-950/60
                backdrop-blur-xl
              "
            >
              <h3 className="text-xl font-bold text-cyan-400">
                {project.title}
              </h3>

              <p className="text-slate-400 mt-2">
                Type: {project.type}
              </p>

              <div className="mt-4">
                <span
                  className="
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    border
                    border-cyan-500/20
                    text-cyan-300
                  "
                >
                  {project.status}
                </span>
              </div>
            </div>
          ))}

        </div>
      )}

      {/* CREATE PROJECT MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">

          <div
            className="
              w-full
              max-w-lg
              bg-slate-950
              border
              border-cyan-500/20
              rounded-3xl
              p-8
            "
          >
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">
              Create New Project
            </h2>

            <div className="space-y-4">

              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Project Name"
                className="
                  w-full
                  p-4
                  rounded-xl
                  bg-black
                  border
                  border-cyan-500/10
                  outline-none
                "
              />

              <input
                value={type}
                onChange={(e) => setType(e.target.value)}
                placeholder="Project Type"
                className="
                  w-full
                  p-4
                  rounded-xl
                  bg-black
                  border
                  border-cyan-500/10
                  outline-none
                "
              />

            </div>

            <div className="flex gap-4 mt-8">

              <button
                onClick={createProject}
                className="
                  flex-1
                  py-3
                  bg-cyan-500
                  text-black
                  font-bold
                  rounded-xl
                "
              >
                Create
              </button>

              <button
                onClick={() => setShowModal(false)}
                className="
                  flex-1
                  py-3
                  border
                  border-cyan-500/20
                  rounded-xl
                "
              >
                Cancel
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}