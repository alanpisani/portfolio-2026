import "./Technologies.css";
import { motion } from "framer-motion";

const techStack = {
  frontend: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Bootstrap"],
  backend: [".NET", "ASP.NET Core", "C#", "REST APIs", "Entity Framework"],
  database: ["SQL Server", "MySQL", "PostgreSQL"],
  tools: ["Git", "GitHub", "Docker", "Postman"],
};

export default function Technologies() {
  return (
    <motion.section
      className="tech-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="tech-container">
        <h2>Tecnologías</h2>

        <div className="tech-grid">
          <div className="tech-card">
            <h3>Frontend</h3>
            <ul>
              {techStack.frontend.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>

          <div className="tech-card">
            <h3>Backend</h3>
            <ul>
              {techStack.backend.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>

          <div className="tech-card">
            <h3>Base de datos</h3>
            <ul>
              {techStack.database.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>

          <div className="tech-card">
            <h3>Herramientas</h3>
            <ul>
              {techStack.tools.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
