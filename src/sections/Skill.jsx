import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiDotnet,
} from "react-icons/si";

import { AdminContext } from "../context/AdminContext";
import AddSkillModal from "../components/AddSkillModal";

function Skill() {
  const { skills, isAdmin, deleteSkill } = useContext(AdminContext);

  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();

  const icons = {
    FaHtml5: <FaHtml5 />,
    FaCss3Alt: <FaCss3Alt />,
    FaJs: <FaJs />,
    FaReact: <FaReact />,
    FaNodeJs: <FaNodeJs />,
    FaGitAlt: <FaGitAlt />,
    FaGithub: <FaGithub />,
    SiTailwindcss: <SiTailwindcss />,
    SiExpress: <SiExpress />,
    SiMongodb: <SiMongodb />,
    SiPostman: <SiPostman />,
    SiDotnet: <SiDotnet />,
  };

  const handleAddSkill = () => {
    if (!isAdmin) {
      navigate("/login");
      return;
    }

    setOpenModal(true);
  };

  const handleDeleteSkill = async (id) => {
    if (!isAdmin) {
      navigate("/login");
      return;
    }

    const result = await deleteSkill(id);

    if (!result.success) {
      alert(result.message);
    }
  };

  return (
    <>
      <section
        id="skills"
        className="min-h-screen bg-[#0f172a] text-white py-24 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-center mb-4"
          >
            My <span className="text-cyan-400">Skills</span>
          </motion.h2>

          <p className="text-center text-gray-400 mb-14">
            Technologies and tools I use to build modern web applications.
          </p>

          <div className="flex justify-between items-center mb-10">
            <h3 className="text-3xl font-semibold text-cyan-400">
              Skills
            </h3>

            <button
              onClick={handleAddSkill}
              className="bg-cyan-500 hover:bg-cyan-600 transition px-5 py-2 rounded-lg font-medium"
            >
              + Add Skill
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map((skill) => (
              <motion.div
                key={skill._id}
                whileHover={{ scale: 1.08, y: -8 }}
                className="group relative bg-slate-800 rounded-2xl p-8 flex flex-col items-center shadow-lg hover:shadow-cyan-500/30 transition"
              >
                <button
                  onClick={() => handleDeleteSkill(skill._id)}
                  className="
                             absolute top-3 right-3
                            bg-red-500 hover:bg-red-600
                            text-white text-sm px-2 py-1 rounded-md transition

                             opacity-100 visible
                             md:opacity-0 md:invisible
                            md:group-hover:opacity-100
                              md:group-hover:visible
                                                     "
                >
                  Delete
                </button>

                <div className={`text-6xl ${skill.color}`}>
                  {icons[skill.icon]}
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AddSkillModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
}

export default Skill;