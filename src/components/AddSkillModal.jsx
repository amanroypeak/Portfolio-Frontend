import { useContext, useState } from "react";
import Select from "react-select";
import { AdminContext } from "../context/AdminContext";

function AddSkillModal({ isOpen, onClose }) {
  const { addSkill } = useContext(AdminContext);

  const [formData, setFormData] = useState({
    name: "",
    icon: "",
    color: "",
  });

  const iconOptions = [
    { value: "FaHtml5", label: "HTML" },
    { value: "FaCss3Alt", label: "CSS" },
    { value: "FaJs", label: "JavaScript" },
    { value: "FaReact", label: "React" },
    { value: "FaNodeJs", label: "Node.js" },
    { value: "FaGitAlt", label: "Git" },
    { value: "FaGithub", label: "GitHub" },
    { value: "SiTailwindcss", label: "Tailwind" },
    { value: "SiExpress", label: "Express" },
    { value: "SiMongodb", label: "MongoDB" },
    { value: "SiPostman", label: "Postman" },
    { value: "SiDotnet", label: ".NET" },
  ];

  const colorOptions = [
    { value: "text-orange-500", label: "Orange" },
    { value: "text-blue-500", label: "Blue" },
    { value: "text-yellow-400", label: "Yellow" },
    { value: "text-cyan-400", label: "Cyan" },
    { value: "text-green-500", label: "Green" },
    { value: "text-purple-500", label: "Purple" },
    { value: "text-white", label: "White" },
    { value: "text-gray-300", label: "Gray" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#334155",
      border: "none",
      boxShadow: "none",
      minHeight: "48px",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#334155",
      zIndex: 9999,
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: 180,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#06b6d4" : "#334155",
      color: "#fff",
      cursor: "pointer",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#fff",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#cbd5e1",
    }),
    input: (provided) => ({
      ...provided,
      color: "#fff",
    }),
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await addSkill(formData);

    if (result.success) {
      alert("Skill Added Successfully");

      setFormData({
        name: "",
        icon: "",
        color: "",
      });

      onClose();
    } else {
      alert(result.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 px-4">
      <div className="bg-slate-800 w-full max-w-md rounded-xl p-6">

        <h2 className="text-2xl font-bold text-white mb-6">
          Add Skill
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Skill Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-slate-700 text-white outline-none"
          />

          <Select
            options={iconOptions}
            placeholder="Select Icon"
            value={iconOptions.find(
              (option) => option.value === formData.icon
            )}
            onChange={(selected) =>
              setFormData({
                ...formData,
                icon: selected.value,
              })
            }
            styles={customStyles}
          />

          <Select
            options={colorOptions}
            placeholder="Select Color"
            value={colorOptions.find(
              (option) => option.value === formData.color
            )}
            onChange={(selected) =>
              setFormData({
                ...formData,
                color: selected.value,
              })
            }
            styles={customStyles}
          />

          <div className="flex gap-3 mt-6">

            <button
              type="submit"
              className="flex-1 bg-cyan-500 hover:bg-cyan-600 py-3 rounded text-white"
            >
              Add Skill
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

export default AddSkillModal;