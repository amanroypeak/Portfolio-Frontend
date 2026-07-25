import { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext";

function AddProjectModal({ isOpen, onClose }) {
  const { addProject } = useContext(AdminContext);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    github: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await addProject(formData);

    if (result.success) {
      alert("Project Added Successfully");

      setFormData({
        title: "",
        description: "",
        github: "",
      });

      onClose();
    } else {
      alert(result.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div className="bg-slate-800 w-full max-w-lg rounded-xl p-6">

        <h2 className="text-2xl font-bold text-white mb-6">
          Add Project
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 rounded bg-slate-700 text-white"
          />

          <textarea
            name="description"
            placeholder="Project Description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 rounded bg-slate-700 text-white resize-none"
          />

          <input
            type="url"
            name="github"
            placeholder="GitHub Repository Link"
            value={formData.github}
            onChange={handleChange}
            className="w-full p-3 rounded bg-slate-700 text-white"
          />

          <div className="flex gap-3 mt-6">

            <button
              type="submit"
              className="flex-1 bg-cyan-500 hover:bg-cyan-600 py-3 rounded text-white"
            >
              Add Project
            </button>

            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-red-500 hover:bg-red-600 py-3 rounded text-white"
            >
              Cancel
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}

export default AddProjectModal;