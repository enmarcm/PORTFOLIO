import bootstrap from "/certificates/bootstrap.jpg"
import java from "/certificates/java.jpg"
import c from "/certificates/c.jpg"
import canvas from "/certificates/canvas.jpg"
import hacking from "/certificates/hacking.jpg"
import react from "/certificates/react.jpg"

export enum INFO_DATA {
  PHONE = "+58 412 170 4005",
  EMAIL = "theenmanuel123@gmail.com",
  NAME = "Enmanuel Colina",
  HOME_DESCRIPTION = "I'm a passionate Computer Engineer specialized in full stack development and project management. I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.",
  ABOUT_ME = "Computer Engineer (Summa Cum Laude, August 2025) with work experience as a FullStack Developer. Passionate about creating interactive, scalable, and visually appealing solutions for digital experiences. I enjoy exploring new technologies and staying updated on the latest trends, always seeking to improve my skills and apply best practices in my projects.",
}

export const IMGS = [
  { src: bootstrap, alt: "Bootstrap Certificate" },
  { src: java, alt: "Java Certificate" },
  { src: c, alt: "C Certificate" },
  { src: canvas, alt: "Canvas Certificate" },
  { src: hacking, alt: "Hacking Certificate" },
  { src: react, alt: "React Certificate" },
]

export const EDUCATION = {
  degree: "Computer Engineer",
  mention: "Summa Cum Laude",
  graduationDate: "August 2025",
  period: "2021 - 2025",
  university: "Universidad Rafael Urdaneta (URU)",
}

export const EXPERIENCE = [
  {
    id: 1,
    title: "FullStack Developer",
    company: "Freelance / Various",
    startDate: "May 2021",
    endDate: "August 2025",
    duration: "4 years",
    description:
      "Desarrollé e implementé aplicaciones web y móviles utilizando tecnologías modernas.",
    technologies: [
      "React",
      "React Native",
      "Tailwind CSS",
      "Material UI",
      "Rust",
      "SQL Server",
      "MySQL",
      "Express.js",
      "Express Validator",
      "Redis",
      "Axios",
      "TanStack Query",
    ],
    highlights: [
      "Implementé interfaces web responsivas con React y Tailwind CSS",
      "Desarrollé aplicaciones móviles con React Native",
      "Trabajé con tecnologías backend incluyendo Express.js y gestión de bases de datos",
      "Gestión y despliegue de servidores (DevOps)",
      "Diseño y gestión de bases de datos (SQL Server, MySQL)",
    ],
  },
  {
    id: 2,
    title: "Project Manager",
    company: "Alkosto - Department of Technology and Innovation",
    startDate: "October 2025",
    endDate: "Present",
    duration: "Current",
    description:
      "Lidero proyectos de tecnología e innovación, coordinando equipos multidisciplinarios y asegurando la entrega exitosa de proyectos.",
    technologies: ["Gestión de Proyectos", "Liderazgo de Equipos", "Metodologías Ágiles"],
    highlights: [
      "Planificación y ejecución de proyectos",
      "Coordinación y liderazgo de equipos",
      "Gestión de stakeholders",
      "Gestión y mitigación de riesgos",
    ],
  },
]
