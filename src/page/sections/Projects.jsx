import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import inboxAI from "./../../assets/projectsimages/inboxbig.png";
import iotlab from "./../../assets/projectsimages/iot.png";
import sanned from "./../../assets/projectsimages/sanned.png";
import streamous from "./../../assets/projectsimages/streaminplat.png";
import techstore from "./../../assets/projectsimages/techstore.png";
import nextech from "./../../assets/projectsimages/nextech.png";
import loney from "./../../assets/projectsimages/LONEY.png";

const ProjectsArr = [
  {
    PId: 111,
    image: iotlab,
    title: "IOT Lab",
    category: "Full-Stack",
    description:
      "IOTLAB - A web Platform for: IOT Students , IOT Enthusiats and Self-LearnersIf you want to start in iot or hone your skills , but you don't have access to hardware part this is for you.",
    stack: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL", "Peer.js", "Socket.io", "Arduino-Cli"],
    demo: false,
    codeLink: "https://github.com/Ayoubslh/IOTLAB",
  },
  {
    PId: 222,
    image: inboxAI,
    title: "InboxAI",
    category: "AI/ML",
    description:
      "A smart email assistant powered by AI, designed to help you manage emails more efficiently using the LangChain framework for AI Agent development. We implemented two main agents: Email Processing Agent: Categorizes, prioritizes, and summarizes your emails to ensure you focus on what matters most. Reply Suggestion Agent: Generates intelligent email responses, saving you time and effort.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Langchain.js"],
    demo: false,
    codeLink: "https://github.com/Ayoubslh/InboxAI",
  },
  {
    PId: 333,
    image: streamous,
    title: "Streamous",
    category: "Web",
    description: "A simple movie platform that allows users to view and read about Movies.",
    stack: ["HTML", "CSS", "Javascript", "TMDB API"],
    demo: true,
    demoLink: "https://ayoubslh.github.io/MovieApp",
    codeLink: "https://github.com/Ayoubslh/MovieApp",
  },
  {
    PId: 444,
    image: techstore,
    title: "TechStore",
    category: "Full-Stack",
    description:
      "An e-commerce website and mobile app that allows users to buy and sell tech products. Users can create an account, browse products, add items to their cart, and checkout securely. (mobile app repo:storemobile , backend repo: E-Shop )",
    stack: ["React", "React Native", "Node.js", "Express.js", "MongoDB"],
    demo: true,
    demoLink: "https://hptecs.vercel.app/",
    codeLink: "https://github.com/Ayoubslh/StoreWeb",
  },
  {
    PId: 555,
    image: sanned,
    title: "Sanned",
    category: "Mobile",
    description:
      "A humanitarian mobile apps that allows users in crisis area to request or offer help , offlline first app with online sync when connection is available. Also the possibility of viewing location and offering donations to people in need.",
    stack: ["React Native", "Expo", "WatermelonDB"],
    demo: true,
    demoLink:
      "https://drive.google.com/file/d/1T3W6jQNqGaR0KSkDeT6aAflZq0_77DEl/view?usp=drivesdk",
    codeLink: "https://github.com/Ayoubslh/Sanned",
  },
  {
    PId: 666,
    image: nextech,
    title: "NexTech",
    category: "Web",
    description:
      "Nextech squad official website , a tech community that aims to help developers and tech enthusiasts to grow their skills and knowledge through workshops, articles, and projects.",
    stack: ["React", "Taiwlind"],
    demo: true,
    demoLink: "https://nextechsquad.netlify.app",
    codeLink: "https://github.com/Ayoubslh/Nextech",
  },
  {
    PId: 777,
    image: loney,
    title: "Loney",
    category: "Mobile",
    description:
      "Loan management system that helps users to manage their personal loans effectively. Users can track their loan amounts, interest rates, payment schedules, and remaining balances all in one place.",
    stack: ["React Native", "Nativewinde"],
    demo: true,
    demoLink:
      "https://mega.nz/file/eMtnETob#_rrTg4sgR0pekDluWioRMD-f3o7mHAFL7-Ik2aQ3Kow",
    codeLink: "https://github.com/Ayoubslh/LMS",
  },
];

const categories = [
  { name: "All Projects", count: ProjectsArr.length },
  { name: "Full-Stack", count: ProjectsArr.filter(p => p.category === "Full-Stack").length },
  { name: "Mobile", count: ProjectsArr.filter(p => p.category === "Mobile").length },
  { name: "Web", count: ProjectsArr.filter(p => p.category === "Web").length },
  { name: "AI/ML", count: ProjectsArr.filter(p => p.category === "AI/ML").length },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState(ProjectsArr[0]);

  const filteredProjects = activeCategory === "All Projects" 
    ? ProjectsArr 
    : ProjectsArr.filter(project => project.category === activeCategory);

  // Update selected project when filtering
  const handleCategoryChange = (categoryName) => {
    setActiveCategory(categoryName);
    const filtered = categoryName === "All Projects" 
      ? ProjectsArr 
      : ProjectsArr.filter(p => p.category === categoryName);
    if (filtered.length > 0) {
      setSelectedProject(filtered[0]);
    }
  };

  return (
    <section id="projects" className="section-spacing bg-gray-950">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">
            A showcase of my work combining full-stack development and creative solutions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => handleCategoryChange(category.name)}
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                activeCategory === category.name
                  ? "bg-gradient-to-r from-amber-400 to-amber-500 text-black shadow-lg shadow-amber-500/20"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {category.name}
              <span className={`ml-1.5 text-xs px-1.5 py-0.5 rounded ${
                activeCategory === category.name 
                  ? "bg-black/20" 
                  : "bg-white/10"
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Split View Layout */}
        <div className="grid lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
          {/* Left: Project List */}
          <div className="lg:col-span-4 space-y-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
            {filteredProjects.map((project) => (
              <button
                key={project.PId}
                onClick={() => setSelectedProject(project)}
                className={`w-full text-left group transition-all ${
                  selectedProject.PId === project.PId
                    ? "scale-[1.02]"
                    : "hover:scale-[1.01]"
                }`}
              >
                <div className={`glass-card p-3 flex gap-3 items-center transition-all ${
                  selectedProject.PId === project.PId
                    ? "border-2 border-amber-400 shadow-lg shadow-amber-500/20"
                    : "border border-white/10 hover:border-white/20"
                }`}>
                  {/* Thumbnail */}
                  <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    {selectedProject.PId === project.PId && (
                      <div className="absolute inset-0 bg-amber-400/20 border-2 border-amber-400"></div>
                    )}
                  </div>
                  
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-bold text-sm mb-1 truncate ${
                      selectedProject.PId === project.PId
                        ? "text-amber-400"
                        : "text-white group-hover:text-amber-400"
                    }`}>
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">
                      {project.category}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Project Details */}
          <div className="lg:col-span-8">
            <div className="glass-card p-6 space-y-6">
              {/* Project Image */}
              <div className="relative rounded-xl overflow-hidden aspect-video bg-gray-900">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-3xl font-black text-white mb-2">
                      {selectedProject.title}
                    </h3>
                    <span className="inline-block px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold uppercase">
                      {selectedProject.category}
                    </span>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2 flex-shrink-0">
                    {selectedProject.demo && selectedProject.demoLink && (
                      <a
                        href={selectedProject.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold hover:from-amber-500 hover:to-amber-600 transition-all flex items-center gap-2 text-sm"
                      >
                        <FaExternalLinkAlt />
                        Demo
                      </a>
                    )}
                    <a
                      href={selectedProject.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-amber-400/50 transition-all flex items-center gap-2 text-sm"
                    >
                      <FaGithub />
                      Code
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-white font-semibold mb-3 text-sm">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-400 text-xs hover:text-white hover:border-amber-400/50 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
