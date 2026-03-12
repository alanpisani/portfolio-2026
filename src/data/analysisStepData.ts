export const analysisStepData = [
  {
    title: "Relevamiento",
    description:
      "Antes de comenzar el desarrollo, intento comprender el problema desde la perspectiva del usuario o del negocio. A través de entrevistas o conversaciones iniciales, identifico qué se necesita resolver, quiénes interactúan con el sistema y cuáles son las operaciones principales que debe soportar. Esta etapa me permite definir los casos de uso y teneruna base clara antes de avanzar al modelado.",
  },
  {
    title: "Modelado",
    description:
      "Una vez comprendido el problema, identifico las entidades principales del dominio y cómo se relacionan entre sí. Este proceso permite estructurar la información del sistema y definir un modelo claro antes de comenzar la implementación. Para ello, utilizo modelos conceptuales como diagramas de entidades-relación o diagramas de clases.",
  },
  {
    title: "Arquitectura",
    description:
      "A partir del modelo del sistema, defino la arquitectura técnica. Habitualmente desarrollo el backend como una API REST independiente y un frontend que consume sus endpoints. Esta separación permite mantener responsabilidades claras entre la lógica del sistema y la interfaz, además de facilitar la evolución o escalabilidad de cada componente.",
  },
  {
    title: "Implementación",
    description:
      "Con la estructura del sistema definida, paso al desarrollo. El backend implementa la lógica de negocio, las validaciones y los endpoints de la API, mientras que el frontend consume estos servicios para construir la interfaz y gestionar la interacción con el usuario.",
  },
  {
    title: "Despliegue e iteración",
    description:
      "El sistema se publica y continúa evolucionando a través de iteraciones. Nuevas funcionalidades o mejoras se incorporan progresivamente, permitiendo ajustar el modelo inicial y adaptar el sistema a necesidades que aparecen durante su uso.",
  },
];
