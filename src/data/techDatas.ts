import angular from "../assets/techs/angular.svg"
import aws from "../assets/techs/aws.png"
import csharp from "../assets/techs/csharp.svg"
import css from "../assets/techs/css.png"
import express from "../assets/techs/express.svg"
import figma from "../assets/techs/figma.png"
import git from "../assets/techs/git.png"
import html from "../assets/techs/html.png"
import ionic from "../assets/techs/ionic.svg"
import java from "../assets/techs/java.png"
import js from "../assets/techs/js.png"
import mongodb from "../assets/techs/mongodb.svg"
import nodejs from "../assets/techs/nodejs.png"
import postgres from "../assets/techs/postgrest.png"
import python from "../assets/techs/python.png"
import react from "../assets/techs/react.png"
import socketio from "../assets/techs/socketio.png"
import tailwind from "../assets/techs/tailwind.png"
import ts from "../assets/techs/ts.svg"
import mysql from "../assets/techs/mysql.png" // Placeholder
import sqlserver from "../assets/techs/sqlserver.png" // Placeholder
import redis from "../assets/techs/redis.png" // Placeholder
import axios from "../assets/techs/axios.png" // Placeholder
import tanstackquery from "../assets/techs/tanstackquery.png" // Placeholder
import expressvalidator from "../assets/techs/expressvalidator.svg" // Placeholder
import materialui from "../assets/techs/materialui.png" // Placeholder

export const TECHS = [
  // Frontend
  {
    name: "JAVASCRIPT",
    img: js,
    category: "frontend",
  },
  {
    name: "TYPESCRIPT",
    img: ts,
    category: "frontend",
  },
  {
    name: "REACT",
    img: react,
    category: "frontend",
  },
  {
    name: "ANGULAR",
    img: angular,
    category: "frontend",
  },
  {
    name: "TAILWINDCSS",
    img: tailwind,
    category: "frontend",
  },
  {
    name: "MATERIAL UI",
    img: materialui,
    category: "frontend",
  },

  // Mobile
  {
    name: "REACT NATIVE",
    img: react,
    category: "mobile",
  },
  {
    name: "IONIC",
    img: ionic,
    category: "mobile",
  },

  // Backend
  {
    name: "NODEJS",
    img: nodejs,
    category: "backend",
  },
  {
    name: "EXPRESS",
    img: express,
    category: "backend",
  },
  {
    name: "RUST",
    img: aws, // Placeholder
    category: "backend",
  },
  {
    name: "SOCKET IO",
    img: socketio,
    category: "backend",
  },
  {
    name: "EXPRESS VALIDATOR",
    img: expressvalidator, // Placeholder
    category: "backend",
  },

  // Languages
  {
    name: "PYTHON",
    img: python,
    category: "languages",
  },
  {
    name: "JAVA",
    img: java,
    category: "languages",
  },
  {
    name: "C#",
    img: csharp,
    category: "languages",
  },
  {
    name: "HTML",
    img: html,
    category: "languages",
  },
  {
    name: "CSS",
    img: css,
    category: "languages",
  },

  // Databases
  {
    name: "MONGODB",
    img: mongodb,
    category: "databases",
  },
  {
    name: "POSTGRESQL",
    img: postgres,
    category: "databases",
  },
  {
    name: "MYSQL",
    img: mysql, // Placeholder
    category: "databases",
  },
  {
    name: "SQL SERVER",
    img: sqlserver, // Placeholder
    category: "databases",
  },

  // Tools & DevOps
  {
    name: "GIT",
    img: git,
    category: "tools",
  },
  {
    name: "FIGMA",
    img: figma,
    category: "tools",
  },
  {
    name: "AWS",
    img: aws,
    category: "devops",
  },
  {
    name: "REDIS",
    img: redis,
    category: "tools",
  },
  {
    name: "AXIOS",
    img: axios,
    category: "tools",
  },
  {
    name: "TANSTACK QUERY",
    img: tanstackquery,
    category: "tools",
  },
]

// Function helper para obtener tecnologías por categoría
export const getTechsByCategory = (category: string) => {
  return TECHS.filter((tech) => tech.category === category)
}

// Array de categorías ordenadas
export const TECH_CATEGORIES = ["frontend", "backend", "mobile", "languages", "databases", "tools", "devops"]
