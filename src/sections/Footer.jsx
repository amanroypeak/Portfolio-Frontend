import React, { useContext } from "react";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { AdminContext } from "../context/AdminContext";

function Footer() {
  const { isAdmin, logout } = useContext(AdminContext);

  const handleLogout = () => {
    logout();
    alert("Logged Out Successfully");
  };

  return (
    <footer className="bg-[#020617] text-gray-400 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-cyan-400">
            Aman Roy
          </h2>

          <p className="mt-2 text-sm">
            MERN Stack Developer | Building modern web applications.
          </p>

          <p className="mt-4 text-xs text-gray-500">
            © {new Date().getFullYear()} Aman Roy. All Rights Reserved.
          </p>
        </div>

        {/* Center */}
        <div className="flex items-center gap-6">

          <a
            href="https://github.com/amanroypeak"
            target="_blank"
            rel="noreferrer"
            className="text-2xl hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/amanroydev"
            target="_blank"
            rel="noreferrer"
            className="text-2xl hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>

          {isAdmin && (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition"
            >
              Logout
            </button>
          )}

        </div>

        {/* Right */}
        <a
          href="#home"
          className="bg-cyan-500 hover:bg-cyan-600 p-3 rounded-full transition"
        >
          <FaArrowUp className="text-white" />
        </a>

      </div>
    </footer>
  );
}

export default Footer;