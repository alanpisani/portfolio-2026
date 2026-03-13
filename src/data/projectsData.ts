import img from "../assets/img/project-1.webp";
import img2 from "../assets/img/project-3.webp";
import img3 from "../assets/img/project-3.webp";

import dotnet from "../assets/img/icons/dotnet.svg";
import mysql from "../assets/img/icons/mysql.png";
import react from "../assets/img/icons/react.svg";
import ts from "../assets/img/icons/ts.svg";
import flutter from "../assets/img/icons/flutter.svg";
import html from "../assets/img/icons/html.svg";
import css from "../assets/img/icons/css.svg";
import js from "../assets/img/icons/js.svg";
import bootstrap from "../assets/img/icons/bootstrap.svg";

import type { projectDataType } from "../types/projectDataType";

export const projectsData: projectDataType[] = [
  {
    name: "Sistema de gestión de turnos",
    simple_description:
      "Un turnero totalmente funcional. Desde el lado del paciente se pueden solicitar, consultar y cancelar turnos. Desde los profesionales, se pueden atender turnos, llevar control, etc.",
    img: img,
    github_href: "https://github.com/alanpisani/turnero",
    href: "https://alanpisani.com.ar/turnero",
    techs: [
      {
        name: ".NET",
        icon: dotnet,
      },
      {
        name: "MySQL",
        icon: mysql,
      },
      {
        name: "React",
        icon: react,
      },
      {
        name: "TypeScript",
        icon: ts,
      },
    ],
  },
  {
    name: "Plataforma de juegos mobile",
    simple_description:
      "¡Variedad de minijuegos en una sola app para celular: Piedra-papel-tijera, juegos matematicos, sopa de letras, juego de memoria, entre otros!",
    img: img2,
    github_href: "https://github.com/alanpisani/seminario-2",
    href: "/apk/app-release.rar",
    techs: [
      {
        name: "Flutter",
        icon: flutter,
      },
      {
        name: "MySQL",
        icon: mysql,
      },
    ],
    descargable: true,
  },
  {
    name: "Simulación de E-commerce",
    simple_description:
      "Mi primera web, realizada en 2022. Simulación de interfaz de e-commerce enfocada en el diseño y la estructura de una tienda online de productos hechos a impresión 3D. El proyecto explora la organización de productos, navegación, fichas de producto y flujo visual de compra desde el punto de vista de la experiencia de usuario.",
    img: img3,
    github_href: "https://github.com/alanpisani/coshita-3D",
    href: "https://alanpisani.github.io/coshita-3D/",
    techs: [
      {
        name: "HTML5",
        icon: html,
      },
      {
        name: "CSS3",
        icon: css,
      },
      {
        name: "Javascript",
        icon: js,
      },
      {
        name: "Bootstrap",
        icon: bootstrap,
      },
    ],
  },
];
