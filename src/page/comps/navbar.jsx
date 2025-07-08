import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "contact"];
      const scrollY = window.scrollY + 100;

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
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-sm">
      <div className="mx-auto max-w-3xl px-6 py-4">
        <nav className="flex items-center justify-between">
          <ul className="flex gap-6">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`relative font-bold text-sm tracking-wide uppercase transition 
                  ${
                    active === id
                      ? "text-amber-400"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {label}
               
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] w-full bg-amber-400 transition-transform duration-300 ease-in-out scale-x-0 ${
                      active === id ? "scale-x-100" : "hover:scale-x-100"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
