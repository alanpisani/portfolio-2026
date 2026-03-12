import AboutMe from "../components/Main/sections/AboutMe/AboutMe";
import Hero from "../components/Main/sections/Hero/Hero";
import Projects from "../components/Main/sections/Projects/Projects";
import SystemsAnalysis from "../components/Main/sections/SystemsAnalysis/SystemsAnalysis";
import Technologies from "../components/Main/sections/Technologies/Technologies";

interface headerNavDataType {
  name: string;
  component: React.ComponentType;
}

export const headerNavData: headerNavDataType[] = [
  {
    name: "Inicio",
    component: Hero,
  },
  {
    name: "Sobre mí",
    component: AboutMe,
  },
  {
    name: "Proyectos",
    component: Projects,
  },
  {
    name: "Tecnologías",
    component: Technologies,
  },
  {
    name: "Análisis de sistemas",
    component: SystemsAnalysis,
  },
];
