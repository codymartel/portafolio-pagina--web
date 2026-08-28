import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p>{project.year}</p>
      <div className="tech-list">
        {project.tech.map((t) => (
          <span key={t} className="tech-tag">{t}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;