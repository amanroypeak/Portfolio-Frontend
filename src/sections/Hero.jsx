import React from 'react'
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Amandp2 from "../assets/Amandp2.png";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen py-20 md:py-32 bg-[#0f172a] text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 w-full"
        >
          <p className="text-xl text-gray-400 mb-3">
            Hello, I'm 👋
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-5 leading-tight">
            Aman <span className="text-cyan-400">Roy</span>
          </h1>

          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              2000,
              "React Developer",
              2000,
              "Full Stack Developer",
              2000,
            ]}
            wrapper="h2"
            speed={40}
            repeat={Infinity}
            className="text-2xl md:text-4xl font-semibold text-cyan-400"
          />

          <p className="text-gray-400 text-lg leading-8 mt-6 max-w-xl">
            Passionate Full Stack Developer with expertise in building modern, scalable,
            and responsive web applications using React, Node.js, Express.js, and MongoDB.
            Skilled in developing efficient, user-centric solutions with clean, maintainable code.
            Committed to solving real-world problems through continuous learning, strong problem-solving abilities,
            and best development practices.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 md:gap-5 mt-8 flex-wrap">
            <a
              href="/resume.pdf"
              download
              className="bg-cyan-500 hover:bg-cyan-600 transition duration-300 px-7 py-3 rounded-lg font-semibold shadow-lg text-center"
            >
              Download Resume
            </a>

            <a
              href="https://github.com/amanroypeak"
              target="_blank"
              rel="noreferrer"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300 px-7 py-3 rounded-lg font-semibold inline-block text-center"
            >
              View Projects
            </a>
          </div>

          {/* Social Icons - Fixed margin & added mb-6 to prevent sticking at screen bottom */}
          <div className="flex items-center gap-6 mt-8 mb-6 text-3xl">
            <a
              href="https://github.com/amanroypeak"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/amanroydev/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=roy613900@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition duration-300"
              aria-label="Send Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center w-full"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-[420px] md:h-[420px]">

            {/* Glow */}
            <div className="absolute inset-0 bg-yellow-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>

            {/* Image */}
            <img
              src={Amandp2}
              alt="Aman Roy"
              className="relative w-full h-full rounded-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;