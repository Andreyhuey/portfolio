export const skills = [
  {
    title: "Communication",
    description:
      "Interacting effectively with other developers, as well as with non-technical stakeholders. This includes being able to explain technical concepts in a clear and concise way, as well as being able to understand and respond to feedback.",
    extra:
      "Building a personal connection with people: developers & non-technical stakeholders in order to understand their taste from their personalities and be able to deliver on their proposed requirements is crucial and this is done through proper communication and comprehension",
  },
  {
    title: "Problem-solving",
    description:
      "ability to solve problems independently. This includes being able to identify the root cause of a problem, as well as being able to come up with creative solutions.",
  },
  {
    title: "Continuous learning",
    description:
      "The field of web development is constantly evolving so i endeavour to learn new technologies and techniques on an ongoing basis.",
  },
  {
    title: "Pragmatism",
    description:
      "The ability of writing practical units, functions and components code in an organized and reusable model",
  },
];

export const services = [
  {
    id: 0,
    name: "API Integration",
    description:
      "Utilizing external application programming interfaces within web applications to leverage existing functionalities and data from other systems.",
    link: "Learn More",
  },

  {
    id: 1,
    name: "Backend-as-a-service",
    description:
      "helping businesses build and deploy their applications quickly and easily by providing a number of benefits including: Reduced development time, Increased scalability & Enhanced security",
    link: "Learn More",
  },
  {
    id: 2,
    name: "Design To Code",
    description:
      "Translating UI/UX design's visual elements, layout, and user interactions into code to create a functional and visually appealing web interface.",
    link: "Learn More",
  },
  {
    id: 3,
    name: "State Management",
    description:
      "Managing and storing data used across different parts of a web application. Ensuring that all components have access to the most up-to-date and consistent data, enabling them to work together effectively.",
    link: "Learn More",
  },
];

//project Images
import marvel from "../assets/marvelverse-home.png";
import vortexGlide from "../assets/vortexglide.png";
import socialTract from "../assets/social-tract.png";
import analytics from "../assets/analytics.png";
import evobank from "../assets/evobank-home.png";
import medilifi from "../assets/medilifi.png";
import bookstore from "../assets/bookstore.png";
import mockapi from "../assets/mock-api.png";
import animevault from "../assets/animevault.png";

export const projects = [
  {
    title: "MarvelVerse",
    description:
      "Marvel's vast collection of characters, comics, creators, events, series and stories.",
    image: marvel,
    tools: ["React", "TailwindCSS", "Redux-toolkit"],
    tags: "API Integration, State Management",
    type: ["Front End", "API"],
    source: "https://github.com/Andreyhuey/marvelverse",
    visit: "https://marvel-verse-app.netlify.app/events",
    figma: "",
    id: 1,
  },
  {
    title: "VortexGlide",
    description: "A Landing page for a gaming website advertising services for interested clients",
    image: vortexGlide,
    tools: ["NextJs", "TypeScript", "TailwindCSS"],
    tags: "Design To Code",
    type: ["Front End"],
    source: "https://github.com/Andreyhuey/vortexglide",
    visit: "https://vortexglide.vercel.app/",
    figma:
      "https://www.figma.com/file/fm9xqw2T54wNs5vecNhHiK/Gaming-Platform---Web-Design-(Community)?type=design&node-id=1-4&mode=design&t=Pn0YTD86r5CsZ95s-0",
    id: 2,
  },
  {
    title: "SocialTract",
    description:
      "A Landing page for a social & corporate domain for connecting with people all around the world",
    image: socialTract,
    tools: ["Nextjs", "TypeScript", "TailwindCSS"],
    tags: "Design To Code",
    type: ["Front End"],
    source: "https://github.com/Andreyhuey/social-tract",
    visit: "https://social-tract.vercel.app/",
    figma:
      "https://www.figma.com/file/hPQBhpRoTo77PGwV3tJhJ8/Tract-Social-Web-%26-Responsive?type=design&node-id=1-5318&mode=design&t=KFBCrvXM5FoBWADD-0",
    id: 3,
  },
  {
    title: "Analytics",
    description:
      "A business intelligence domain for data mining, process analysis, performance benchmarking and descriptive analytics",
    image: analytics,
    tools: ["Nextjs", "TypeScript", "TailwindCSS"],
    tags: "Design to Code",
    type: ["Front End"],
    source: "https://github.com/Andreyhuey/analytics",
    visit: "https://analytics-tan.vercel.app",
    figma:
      "https://www.figma.com/file/hPQBhpRoTo77PGwV3tJhJ8/Tract-Social-Web-%26-Responsive?type=design&node-id=1-5318&mode=design&t=KFBCrvXM5FoBWADD-0",
    id: 4,
  },

  {
    title: "Evobank",
    description: "A landing page for a banking web application",
    image: evobank,
    tools: ["React", "TypeScript", "TailwindCSS"],
    type: ["Front End"],
    tags: "Design to Code, API Integration",
    source: "https://github.com/Andreyhuey/evobank",
    visit: "https://evob.vercel.app/",
    figma: "",
    id: 5,
  },
  {
    title: "Medilifi",
    description: "My final year thesis centerd around a light fidelity patient monitoring device that monitors the vitals (temperature, heart rate and oxygen saturation levels) of a patient",
    image: medilifi,
    tools: ["Firebase", "ReduxToolkit", "TypeScript", "TailwindCSS"],
    type: ["Front End", "API", "Back End", "Hardware"],
    tags: "Design to Code, API Integration",
    source: "https://github.com/Andreyhuey/medilifi",
    visit: "https://medilifi.vercel.app/",
    figma: "",
    id: 6,
  },
  {
    title: "Mock-Api",
    description:
      "A node.js based solution tailored for front-end developers seeking rapid and dependable mock API services. designed to bridge the gap between UI development and back-end readiness.",
    image: mockapi,
    tools: [
      "node.js",
      "fakerjs",
      "fs",
      "json-schema",
      "json-schema-faker",
      "json-server",
    ],
    type: ["API", "Back End"],
    tags: "Design to Code, API Integration",
    source: "https://github.com/andreyhuey/mock-api",
    visit: "https://github.com/andreyhuey/mock-api",
    id: 7,
  },
  {
    title: "Bookstore",
    description:
      "A web based project built with MongoDB, Express.js, React & Node.js (M.E.R.N) that enables users to list, add, update, and delete books",
    image: bookstore,
    tools: ["node.js", "express", "mongodb", "react", "TailwindCSS"],
    type: ["Front End", "API", "Back End"],
    tags: "Design to Code, API Integration",
    source: "https://github.com/Andreyhuey/bookstore",
    visit: "https://bookstore-frontend-taupe.vercel.app/",
    id: 8,
  },
  {
    title: "Anime Vault",
    description:
      "A modern Next 14 Server Side App built with Server Actions, Infinite Scroll & Framer Motion Animations developed during my nextjs dev journey",
    image: animevault,
    tools: ["TypeScript", "TailwindCSS", "Nextjs"],
    type: ["Front End", "API"],
    tags: "Dev Journey, API Integration",
    source: "https://github.com/Andreyhuey/anime_vault",
    visit: "https://anime-vault-seven-mu.vercel.app/",
    id: 9,
  },
];

// tool images

import html from "../assets/tools/html.svg"
import bootstrap from "../assets/tools/bootstrap.svg";
import tailwind from "../assets/tools/tailwindcss.svg";
import firebase from "../assets/tools/firebase.svg";
import git from "../assets/tools/git.svg";
import github from "../assets/tools/github.svg";
import mysql from "../assets/tools/mysql.svg";
import postgres from "../assets/tools/postgres.svg";
import mongodb from "../assets/tools/mongodb.svg"
import expressjs from "../assets/tools/expressjs.svg"
import react from "../assets/tools/react.svg";
import node from "../assets/tools/nodejs.svg"
import nextjs from "../assets/tools/nextjs.svg"
import graphql from "../assets/tools/graphql.svg"
import prisma from "../assets/tools/prisma.svg"
import docker from "../assets/tools/docker.svg"
import redux from "../assets/tools/redux.svg"
import wordpress from "../assets/tools/wordpress.svg"
import php from "../assets/tools/php.svg"
import python from "../assets/tools/python.svg"
import flask from "../assets/tools/flask.svg"
import django from "../assets/tools/django.svg"
import typescript from "../assets/tools/typescript.svg"
import visualstudio from "../assets/tools/visual-studio.svg"
// import sanity from "../assets/tools/sanity.svg";

export const tools = [
  {
    title: "HTML5",
    image: html,
  },
  {
    title: "Bootstrap",
    image: bootstrap,
  },
  {
    title: "TailwindCSS",
    image: tailwind,
  },
  {
    title: "Git",
    image: git,
  },
  {
    title: "Github",
    image: github,
  },
  {
    title: "GraphQl",
    image: graphql,
  },
  {
    title: "Prisma",
    image: prisma,
  },
  {
    title: "Mysql",
    image: mysql,
  },
  {
    title: "postgres",
    image: postgres,
  },
  {
    title: "MongoDb",
    image: mongodb,
  },
  {
    title: "Express",
    image: expressjs,
  },
  {
    title: "React",
    image: react,
  },
  {
    title: "NodeJs",
    image: node,
  },
  {
    title: "NextJs",
    image: nextjs,
  },
  {
    title: "TypeScript",
    image: typescript,
  },
  {
    title: "Docker",
    image: docker,
  },
  {
    title: "ReduxToolkit",
    image: redux,
  },
  {
    title: "PHP",
    image: php,
  },
  {
    title: "Wordpress",
    image: wordpress,
  },
  {
    title: "Python",
    image: python,
  },
  {
    title: "Flask",
    image: flask,
  },
  {
    title: "Django",
    image: django,
  },
  {
    title: "Firebase",
    image: firebase,
  },
  {
    title: "Visual Studio",
    image: visualstudio,
  },
];
