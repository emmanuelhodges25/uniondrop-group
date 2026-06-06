import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CreateProjectModal({ open, onClose }: Props) {
  const [name, setName] = useState("");

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="w-full max-w-md p-6 rounded-2xl bg-slate-900 border border-cyan-500/20"
      >

        <h2 className="text-2xl font-bold mb-4">
          Create Project
        </h2>

        <input
          className="w-full p-3 rounded bg-slate-800 mb-4"
          placeholder="Project Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="flex gap-3">

          <button className="flex-1 bg-cyan-500 text-black font-bold py-2 rounded">
            Create
          </button>

          <button
            onClick={onClose}
            className="flex-1 border border-cyan-500 py-2 rounded"
          >
            Cancel
          </button>

        </div>

      </motion.div>

    </div>
  );
}