import { Button } from "@/components/ui/button";
export default function PCard({ project }) {
  return (
    <div className="h-[500px] dark:bg-zinc-900 rounded-lg shadow-lg flex flex-col text-center overflow-hidden">
      {/* Image: half height */}
      <img
        src={project.image}
        alt={project.title || "Project Image"}
        className="w-full h-1/2 object-cover"
      />

      {/* Content: the remaining half */}
      <div className="flex flex-col justify-between flex-1 px-4 py-3 gap-2">
        <h2 className="text-lg font-semibold">{project.title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">{project.description}</p>

        {project.stack.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mt-auto">
            {project.stack.map((tech, index) => (
              <span
                key={index}
                className="text-xs bg-gray-200 dark:bg-zinc-800 text-gray-700 dark:text-white px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex justify-center gap-2 mt-auto">
          <Button variant="default">Demo</Button>
          <Button variant="outline">Source Code</Button>
        </div>
      </div>
    </div>
  );
}
