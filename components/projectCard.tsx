import { ProjectData } from "@/types/ProjectData";

interface ProjectCardProps {
  project: ProjectData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="duration-600 max-w-sm transform overflow-hidden rounded shadow-lg transition-all hover:scale-105 hover:bg-gray-100 hover:shadow-xl dark:shadow-violet-900 dark:hover:bg-gray-800">
      <img
        className="h-48 w-full object-cover transition-transform duration-300"
        src={project.image}
        alt={project.name}
      />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100">
          {project.name}
        </div>
        <p className="text-base text-gray-700 dark:text-gray-300">
          {project.description}
        </p>
      </div>
      <div className="px-6 pb-2 pt-4">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700 dark:bg-gray-700 dark:text-gray-200"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="px-6 pb-4">
        <a
          href={project.link}
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white transition-colors duration-300 hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
