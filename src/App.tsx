import { projects } from "./data/projects";
import ProjectCard from "./components/ProjectCard";
import YaviPlaceholder from "./components/YaviPlaceholder";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Cory — Portafolio</h1>
      </header>

      <section className="projects">
        <h2>Proyectos</h2>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>

      <YaviPlaceholder />
    </div>
  );
}

export default App;