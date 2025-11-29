import { Button } from "@/components/ui/button";
import { FaGithub, FaExternalLinkAlt} from "react-icons/fa";

export default function PCard({ project }) {
  return (
    <article className="glass-card group flex flex-col md:flex-row overflow-hidden hover-glow">
      {/* Image */}
      <div className="md:w-2/5 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <img
          src={project.image}
          alt={project.title || "Project Image"}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="md:w-3/5 p-6 sm:p-8 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
            {project.title}
          </h3>

          <p className="mt-3 text-gray-300 leading-relaxed">
            {project.description}
          </p>

          {project.stack?.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-lg border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-3">
          {project.demo && project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-amber-400 text-black font-semibold hover:bg-amber-500 transition-all flex items-center gap-2"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          )}

          {project.codeLink && (
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-white/5 text-white font-semibold border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <FaGithub />
              View Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
