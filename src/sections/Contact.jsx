import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { AdminContext } from "../context/AdminContext";

function Contact() {
  const { sendMessage } = useContext(AdminContext);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const result = await sendMessage(formData);

    setLoading(false);

    if (result.success) {
      alert("Message Sent Successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      alert(result.message);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#0f172a] text-white py-24 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-4"
        >
          Contact <span className="text-cyan-400">Me</span>
        </motion.h2>

        <p className="text-center text-gray-400 mb-16">
          Have a project or opportunity? Let's connect.
        </p>

        <div className="grid lg:grid-cols-2 gap-14">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold">
              Let's Talk
            </h3>

            <p className="text-gray-400 leading-8">
              Feel free to contact me for freelance work,
              internships or full-time opportunities.
              I'll get back to you as soon as possible.
            </p>

            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400 text-2xl" />
                <span>roy613900@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-cyan-400 text-2xl" />
                <span>+91 7679362260</span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
                <span>Siliguri, West Bengal</span>
              </div>

            </div>

            <div className="flex gap-6 pt-6">

              <a
                href="https://github.com/amanroypeak"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800 p-4 rounded-full hover:bg-cyan-500 transition"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/amanroydev"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800 p-4 rounded-full hover:bg-cyan-500 transition"
              >
                <FaLinkedin size={24} />
              </a>

            </div>
          </motion.div>

          {/* Right Side */}
          <motion.form
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className="bg-slate-800 p-8 rounded-2xl shadow-xl space-y-6"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-slate-900 p-4 rounded-lg outline-none border border-slate-700 focus:border-cyan-400"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-slate-900 p-4 rounded-lg outline-none border border-slate-700 focus:border-cyan-400"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-slate-900 p-4 rounded-lg outline-none border border-slate-700 focus:border-cyan-400"
              required
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-slate-900 p-4 rounded-lg outline-none border border-slate-700 focus:border-cyan-400 resize-none"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-500 hover:bg-cyan-600 disabled:bg-cyan-700 transition py-4 rounded-lg font-semibold text-lg"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </motion.form>

        </div>
      </div>
    </section>
  );
}

export default Contact;