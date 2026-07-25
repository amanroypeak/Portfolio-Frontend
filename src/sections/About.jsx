import React from 'react'

import { motion } from "framer-motion";
import Amandp from "../assets/Amandp.jpeg";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-32 lg:py-20  bg-[#0f172a] text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center"
        >
          <img
            src={Amandp}
            alt="Aman Roy"
            className="w-72 h-72 md:w-96 md:h-96 rounded-2xl object-cover border-4 border-cyan-400 shadow-[0_0_30px_#22d3ee]"
          />
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h4 className="text-cyan-400 text-xl font-semibold mb-2">
            About Me
          </h4>

          <h2 className="text-5xl font-bold mb-6">
            Who am I?
          </h2>

          <p className="text-gray-400 leading-8 text-lg">
            I'm <span className="text-cyan-400 font-semibold">Aman Roy</span>,
             a passionate MERN Stack Developer focused
             on building modern, responsive, and scalable web applications.
             I enjoy transforming ideas into real-world solutions using technologies
              like React, Node.js, Express.js, and MongoDB.
          </p>

          <p className="text-gray-400 leading-8 text-lg mt-6">
           I am passionate about learning new technologies, solving coding challenges,
            and continuously improving my development skills.
            My goal is to create applications that deliver seamless
             user experiences while solving meaningful real-world problems.
          </p>

          {/* Info */}
          <div className="grid grid-cols-2 gap-6 mt-10">

            <div>
              <h3 className="text-cyan-400 font-semibold">Name</h3>
              <p>Aman Roy</p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-semibold">Location</h3>
              <p>West Bengal, India</p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-semibold">Email</h3>
              <p>roy613900@gmail.com</p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-semibold">Availability</h3>
              <p>Open to Work</p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;
