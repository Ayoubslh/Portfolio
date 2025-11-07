import { Button } from "@/components/ui/button";
import { FaGithub, FaExternalLinkAlt} from "react-icons/fa";

export default function PCard({ project }) {
  return (
    <article className="group flex flex-col  md:flex-row items-stretch bg-white dark:bg-zinc-900 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-zinc-800">
      {/* Image - fixed to the real image size (400x300) on the left */}
      <div className="flex-shrink-0 h-full  bg-gradient-to-br from-white to-white dark:from-zinc-800 dark:to-zinc-900 relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title || "Project Image"}
          width="400"
          height="300"
          loading="lazy"
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content - right side */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-4">
            {project.description}
          </p>

          {project.stack?.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech, i) => (
                <span
                  key={i}
                  className="inline-flex items-center px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="mt-4 flex gap-3">
          {project.demo && project.demoLink && (
            <Button
              size="sm"
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md hover:shadow-lg transition-all duration-200"
              onClick={() => window.open(project.demoLink, "_blank", "noopener,noreferrer")}
            >
              <FaExternalLinkAlt className="w-3 h-3 mr-2" />
              Live Demo
            </Button>
          )}

          {project.codeLink && (
            <Button
              size="sm"
              variant="outline"
              className="flex-1 border-gray-300 dark:border-zinc-600 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all duration-200"
              onClick={() => window.open(project.codeLink, "_blank", "noopener,noreferrer")}
            >
              <FaGithub className="w-3 h-3 mr-2" />
              Code
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
