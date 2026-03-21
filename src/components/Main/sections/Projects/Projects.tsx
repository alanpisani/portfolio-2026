import { motion } from "framer-motion";

import { projectsData } from "./data";
import "./Projects.css";
import Project from "./components/Project";

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="projects">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: .7 }}
        >
          Proyectos
        </motion.h2>
        <motion.div
          className="projects-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {projectsData.map((project, index) => (
            <Project
              key={index}
              name={project.name}
              simple_description={project.simple_description}
              img={project.img}
              href={project.href}
              github_href={project.github_href}
              techs={project.techs}
              descargable={project.descargable}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
