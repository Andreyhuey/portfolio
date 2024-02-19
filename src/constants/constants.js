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

export const projects = [
  {
    title: "MarvelVerse",
    description:
      "Marvel's vast collection of characters, comics, creators, events, series and stories.",
    image: marvel,
    tags: ["React", "TailwindCSS", "Redux-toolkit"],
    type: "API Integration, State Management",
    source: "https://github.com/Andreyhuey/marvelverse",
    visit: "https://marvel-verse-app.netlify.app/events",
    id: 0,
  },
  {
    title: "VortexGlide",
    description: "A gaming website advertising services for interested clients",
    image: vortexGlide,
    tags: ["NextJs", "TypeScript", "TailwindCSS"],
    type: "Design To Code",
    source: "https://github.com/Andreyhuey/vortexglide",
    visit: "https://vortexglide.vercel.app/",
    figma:
      "https://www.figma.com/file/fm9xqw2T54wNs5vecNhHiK/Gaming-Platform---Web-Design-(Community)?type=design&node-id=1-4&mode=design&t=Pn0YTD86r5CsZ95s-0",
    id: 1,
  },
  {
    title: "SocialTract",
    description:
      "A social & corporate domain for connecting with people all around the world",
    image: socialTract,
    tags: ["Nextjs", "TypeScript", "TailwindCSS"],
    type: "Design To Code",
    source: "https://github.com/Andreyhuey/social-tract",
    visit: "https://social-tract.vercel.app/",
    figma:
      "https://www.figma.com/file/hPQBhpRoTo77PGwV3tJhJ8/Tract-Social-Web-%26-Responsive?type=design&node-id=1-5318&mode=design&t=KFBCrvXM5FoBWADD-0",
    id: 2,
  },
  {
    title: "Analytics",
    description:
      "A business intelligence domain for data mining, process analysis, performance benchmarking and descriptive analytics",
    image: analytics,
    tags: ["Nextjs", "TypeScript", "TailwindCSS"],
    type: "Design to Code",
    source: "https://github.com/Andreyhuey/analytics",
    visit: "https://analytics-tan.vercel.app",
    figma:
      "https://www.figma.com/file/hPQBhpRoTo77PGwV3tJhJ8/Tract-Social-Web-%26-Responsive?type=design&node-id=1-5318&mode=design&t=KFBCrvXM5FoBWADD-0",
    id: 3,
  },

  {
    title: "Evobank",
    description: "",
    image: evobank,
    tags: ["React", "TypeScript", "TailwindCSS"],
    type: "Design to Code, API Integration",
    source: "https://github.com",
    visit: "https://evob.vercel.app/",
    id: 3,
  },
  {
    title: "Medilifi",
    description: "",
    image: medilifi,
    tags: ["React", "Firebase", "ReduxToolkit", "TypeScript", "TailwindCSS"],
    type: "Design to Code, API Integration",
    source: "https://github.com",
    visit: "https://medilifi.vercel.app/",
    id: 3,
  },
];

// tool images
import api from "../assets/tools/api.png";
import bootstrap from "../assets/tools/bootstrap.png";
import firebase from "../assets/tools/firebase.svg";
import git from "../assets/tools/git.png";
import github from "../assets/tools/github.png";
import react from "../assets/tools/react.png";
import sanity from "../assets/tools/sanity.svg";
import tailwind from "../assets/tools/tailwind.png";

export const tools = [
  {
    title: "API",
    image: api,
  },
  {
    title: "Bootstrap",
    image: bootstrap,
  },
  {
    title: "Firebase",
    image: firebase,
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
    title: "React",
    image: react,
  },
  {
    title: "ReduxToolkit",
    image: "../assets/react.png",
  },
  {
    title: "Express",
    image: "",
  },
  {
    title: "NodeJs",
    image: "",
  },
  { title: "Vercel", image: "" },
  {
    title: "MongoDb",
    image: "",
  },
  {
    title: "Postman",
    image: "",
  },
  {
    title: "PHP",
    image: "",
  },
  {
    title: "Hostinger",
    image: "",
  },
  {
    title: "RapidApi",
    image: "",
  },
  {
    title: "EmailJs",
    image: "",
  },
  {
    title: "CRUD",
    image: "",
  },
  {
    title: "GraphQl",
    image: "",
  },
  {
    title: "NextJs",
    image: "../assets/react.png",
  },
  {
    title: "Sanity",
    image: sanity,
  },
  {
    title: "TailwindCSS",
    image: tailwind,
  },
  {
    title: "TypeScript",
    image: "../assets/tailwind.png",
  },
];
