import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "contact"];
      const scrollY = window.scrollY + 100;

      setScrolled(window.scrollY > 50);

      for (const id of sections) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollY) {
          setActive(id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "Home" },
    { id: "projects", label: "Work" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-gray-950/90 backdrop-blur-lg border-b border-white/10 shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#about" className="text-2xl font-black">
            <span className="text-white">AS</span>
            <span className="text-amber-400">.</span>
          </a>

          {/* Nav Links */}
          <ul className="flex items-center gap-8">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`font-medium text-sm transition-colors ${
                    active === id
                      ? "text-amber-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
