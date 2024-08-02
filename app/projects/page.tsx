import ProjectCard from "@/components/projectCard";
import { MyData } from "@/data/data";

export default function ProjectsPage() {
  const projects = MyData.myProjects;
  return (
    <div className="container mx-auto px-4">
      <h1 className="mb-8 text-3xl font-bold">My Projects</h1>
      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
