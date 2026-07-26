import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaTrash, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { AdminContext } from "../context/AdminContext";
import AddProjectModal from "../components/AddProjectModal";

function Projects() {
  const {
    projects,
    isAdmin,
    deleteProject,loadingProjects
  } = useContext(AdminContext);

  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();

  const handleAddProject = () => {
    if (!isAdmin) {
      navigate("/login");
      return;
    }

    setOpenModal(true);
  };

  const handleDeleteProject = async (id) => {
    if (!isAdmin) {
      navigate("/login");
      return;
    }

    const result = await deleteProject(id);

    if (!result.success) {
      alert(result.message);
    }
  };

  if (loadingProjects) {
  return (
    <>
      <section
        id="projects"
        className="min-h-screen bg-[#0f172a] text-white py-24 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-6">

          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-center mb-4"
          >
            My <span className="text-cyan-400">Projects</span>
          </motion.h2>

          <p className="text-center text-gray-400 mb-14">
            Some of the projects I've built using modern web technologies.
          </p>

          <div className="flex justify-end mb-10">
            <button
              disabled
              className="flex items-center gap-2 bg-cyan-500 px-5 py-2 rounded-lg font-semibold opacity-60 cursor-not-allowed"
            >
              <FaPlus />
              Add Project
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-2xl shadow-lg p-6 min-h-[380px] animate-pulse"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-40 h-7 bg-slate-700 rounded"></div>

                  <div className="w-10 h-10 bg-slate-700 rounded-lg"></div>
                </div>

                <div className="space-y-3">
                  <div className="w-full h-4 bg-slate-700 rounded"></div>
                  <div className="w-full h-4 bg-slate-700 rounded"></div>
                  <div className="w-4/5 h-4 bg-slate-700 rounded"></div>
                </div>

                <div className="mt-20 w-28 h-11 bg-slate-700 rounded-lg"></div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <AddProjectModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
}

  return (
    <>
      <section
        id="projects"
        className="min-h-screen bg-[#0f172a] text-white py-24 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-6">

          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-center mb-4"
          >
            My <span className="text-cyan-400">Projects</span>
          </motion.h2>

          <p className="text-center text-gray-400 mb-14">
            Some of the projects I've built using modern web technologies.
          </p>

          <div className="flex justify-end mb-10">
            <button
              onClick={handleAddProject}
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg font-semibold transition"
            >
              <FaPlus />
              Add Project
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project._id}
                whileHover={{ scale: 1.03, y: -8 }}
                className="bg-slate-800 rounded-2xl shadow-lg hover:shadow-cyan-500/30 p-6 flex flex-col min-h-[380px]"
              >
                <div className="flex justify-between items-start mb-4 gap-4">
                  <h3 className="text-2xl font-bold leading-tight">
                    {project.title}
                  </h3>

                  <button
                    onClick={() => handleDeleteProject(project._id)}
                    className="bg-red-500 hover:bg-red-600 p-3 rounded-lg transition flex-shrink-0"
                  >
                    <FaTrash />
                  </button>
                </div>

                <p className="text-gray-400 mb-6 flex-grow">
                  {project.description}
                </p>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex items-center gap-2 bg-slate-700 hover:bg-cyan-500 px-4 py-3 rounded-lg transition w-fit"
                >
                  <FaGithub />
                  GitHub
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AddProjectModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
}

export default Projects;