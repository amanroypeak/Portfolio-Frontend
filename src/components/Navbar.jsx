import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentId = entry.target.id;
            setActiveSection(currentId);

  
            window.history.replaceState(null, "", `#${currentId}`);
          }
        });
      },
      {
        threshold: 0.4, 
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  
  const handleNavClick = (id) => {
    setMenuOpen(false);
    setActiveSection(id);
    navigate(`/#${id}`);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-[#0f172a]/90 backdrop-blur-md text-white z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3 md:py-5">

          {/* Logo */}
          <h1
            className="text-2xl md:text-3xl font-bold text-cyan-400 cursor-pointer"
            onClick={() => handleNavClick("home")}
          >
            Aman
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 font-semibold">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`cursor-pointer transition ${
                    activeSection === link.id
                      ? "text-cyan-400 font-bold border-b-2 border-cyan-400 pb-1"
                      : "hover:text-cyan-400 text-gray-300"
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(true)}
          >
            <HiMenuAlt3 />
          </button>

        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-[#0f172a] text-white z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setMenuOpen(false)} className="text-4xl">
            <HiX />
          </button>
        </div>

        <ul className="flex flex-col items-center gap-10 text-xl font-semibold mt-10">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavClick(link.id)}
                className={`cursor-pointer transition ${
                  activeSection === link.id ? "text-cyan-400" : "hover:text-cyan-400 text-gray-300"
                }`}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;