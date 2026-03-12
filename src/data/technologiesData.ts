import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiBootstrap,
  SiReact,
  SiDotnet,
  SiSpringboot,
  SiPython,
  SiFastapi,
  SiMysql,
  SiSqlite,
  SiGit,
  SiGithub,
  SiPostman,
  SiSwagger,
} from "react-icons/si";

import { TbBrandCSharp } from "react-icons/tb";
import { FaJava } from "react-icons/fa";

export const technologiesData = [
  {
    branch: "Backend",
    techs: [
      {
        icon: SiDotnet,
        name: ".NET",
        background_color: "#512BD4",
        color: "var(--text-white)",
      },
      {
        icon: TbBrandCSharp,
        name: "C#",
        background_color: "#9179E4",
        color: "var(--text-white)",
      },
      {
        icon: SiMysql,
        name: "MySQL",
        background_color: "#00758F",
        color: "var(--text-white)",
      },
      {
        icon: SiSqlite,
        name: "Sqlite",
        background_color: "#90D4F4",
        color: "var(--text)",
      },
    ],
  },
  {
    branch: "Frontend",
    techs: [
      {
        icon: SiReact,
        name: "React",
        background_color: "#0081A3",
        color: "var(--text-white)",
      },
      {
        icon: SiHtml5,
        name: "HTML5",
        background_color: "#EC6231",
        color: "var(--text)",
      },
      {
        icon: SiCss,
        name: "CSS3",
        background_color: "#264DE4",
        color: "var(--text-white)",
      },
      {
        icon: SiJavascript,
        name: "Javascript",
        background_color: "#F0DB4F",
        color: "var(--text)",
      },
      {
        icon: SiTypescript,
        name: "Typescript",
        background_color: "#3178C6",
        color: "var(--text-white)",
      },
      {
        icon: SiBootstrap,
        name: "Bootstrap",
        background_color: "#553C7B",
        color: "var(--text-white)",
      },
    ],
  },
  {
    branch: "Herramientas",
    techs: [
      {
        icon: SiGit,
        name: "Git",
        background_color: "#f14e32",
        color: "var(--text-white)",
      },
      {
        icon: SiGithub,
        name: "GitHub",
        background_color: "#000",
        color: "var(--text-white)",
      },

      {
        icon: SiPostman,
        name: "Postman",
        background_color: "#FF6C37",
        color: "var(--text-white)",
      },
      {
        icon: SiSwagger,
        name: "Swagger",
        background_color: "#85EA2D",
        color: "var(--text)",
      },
    ],
  },

  {
    branch: "Explorados",
    techs: [
      {
        icon: SiSpringboot,
        name: "Springboot",
        background_color: "#6DB33F",
        color: "var(--text-white)",
      },
      {
        icon: FaJava,
        name: "Java",
        background_color: "#ED8B00",
        color: "var(--text)",
      },
      {
        icon: SiFastapi,
        name: "FastAPI",
        background_color: "#05998b",
        color: "var(--text-white)",
      },
      {
        icon: SiPython,
        name: "Python",
        background_color: "#306998",
        color: "var(--text-white)",
      },
    ],
  },
];
