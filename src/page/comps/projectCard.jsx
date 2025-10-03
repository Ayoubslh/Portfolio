import { Button } from "@/components/ui/button";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function PCard({ project }) {
  return (
    <div className="group relative bg-white dark:bg-zinc-900 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-zinc-700 hover:border-blue-300 dark:hover:border-blue-600">
      {/* Image Container - No scaling, preserve original dimensions */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title || "Project Image"}
          className="w-full h-auto max-h-[300px] object-contain bg-gradient-to-br from-gray-50 to-gray-100 dark:from-zinc-800 dark:to-zinc-900"
          loading="lazy"
        />
        
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick action buttons overlay */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          {project.demo && (
            <button className="p-2 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-200">
              <FaExternalLinkAlt className="w-3 h-3" />
            </button>
          )}
          <button className="p-2 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-200">
            <FaGithub className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        {project.stack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          {project.demo && (
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
            <Button 
              size="sm"
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md hover:shadow-lg transition-all duration-300"
              
            >
              <FaExternalLinkAlt className="w-3 h-3 mr-2" />
              Live Demo
            </Button>
            </a>
          )}
          
          <Button 
            size="sm"
            variant="outline"
            className="flex-1 border-gray-300 dark:border-zinc-600 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all duration-300"
          >
            <FaGithub className="w-3 h-3 mr-2" />
            Code
          </Button>
        </div>
      </div>
    </div>
  );
}
