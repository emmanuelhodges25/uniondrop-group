import { useState } from "react";

type Project = {
  id: string;
  title: string;
  type: string;
  status: "pending" | "in-progress" | "completed";
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    title: "",
    type: "",
  });

  const createProject = () => {
    if (!form.title || !form.type) return;

    const newProject: Project = {
      id: crypto.randomUUID(),
      title: form.title,
      type: form.type,
      status: "pending",
    };

    setProjects([newProject, ...projects]);

    setForm({ title: "", type: "" });
    setOpen(false);
  };

  return (
    <div className="relative">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-black">
          Projects
        </h1>

        <button
          onClick={() => setOpen(true)}
          className="
            px-4 py-2
            bg-cyan-500
            text-black
            font-bold
            rounded-xl
          "
        >
          New Project
        </button>

      </div>

      {/* EMPTY STATE */}
      {projects.length === 0 && (
        <div className="
          p-10
          border border-cyan-500/10
          rounded-2xl
          bg-slate-950/60
          text-center
        ">
          <h2 className="text-xl font-bold text-cyan-400">
            No Projects Yet
          </h2>

          <p className="text-slate-400 mt-2">
            Create your first project to get started.
          </p>
        </div>
      )}

      {/* PROJECT LIST */}
      <div className="grid md:grid-cols-2 gap-6 mt-6">

        {projects.map((project) => (
          <div
            key={project.id}
            className="
              p-6
              rounded-2xl
              bg-slate-950/60
              border border-cyan-500/10
            "
          >
            <h3 className="text-xl font-bold text-cyan-400">
              {project.title}
            </h3>

            <p className="text-slate-400 mt-2">
              Type: {project.type}
            </p>

            <p className="text-sm text-slate-500 mt-3">
              Status: {project.status}
            </p>
          </div>
        ))}

      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">

          <div className="
            w-full max-w-md
            bg-slate-950
            border border-cyan-500/20
            rounded-2xl
            p-6
          ">

            <h2 className="text-xl font-bold text-cyan-400 mb-4">
              Create New Project
            </h2>

            <input
              className="w-full p-3 mb-3 rounded-xl bg-black border border-cyan-500/10"
              placeholder="Project Title"
              value={form.title}
              onChange={(e) =>
                setForm({ ...form, title: e.target.value })
              }
            />

            <input
              className="w-full p-3 mb-4 rounded-xl bg-black border border-cyan-500/10"
              placeholder="Project Type (e.g SaaS, Website, API)"
              value={form.type}
              onChange={(e) =>
                setForm({ ...form, type: e.target.value })
              }
            />

            <div className="flex gap-3">

              <button
                onClick={createProject}
                className="
                  flex-1
                  bg-cyan-500
                  text-black
                  font-bold
                  py-2
                  rounded-xl
                "
              >
                Create
              </button>

              <button
                onClick={() => setOpen(false)}
                className="
                  flex-1
                  border border-cyan-500/20
                  text-slate-300
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