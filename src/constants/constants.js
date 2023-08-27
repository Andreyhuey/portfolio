// Images
import marvel from "../assets/marvel.png";
import vortexGlide from "../assets/vortexglide.png";
import socialTract from "../assets/localhost_3000.png";
import img1 from "../assets/portfolio-img1.png";
import img2 from "../assets/portfolio-img2.png";
import img3 from "../assets/portfolio-img3.png";

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
    image: img2,
    tags: ["Nextjs", "TypeScript", "TailwindCSS"],
    type: "Design to Code",
    source: "https://github.com/Andreyhuey/analytics",
    visit: "https://analytics-tan.vercel.app",
    figma:
      "https://www.figma.com/file/hPQBhpRoTo77PGwV3tJhJ8/Tract-Social-Web-%26-Responsive?type=design&node-id=1-5318&mode=design&t=KFBCrvXM5FoBWADD-0",
    id: 3,
  },
  // {
  //   title: "Oranghis",
  //   description:
  //     "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
  //   image: img3,
  //   tags: ["React", "JavaScript", "Bootstrap"],
  //   type: "Design to Code, API Integration",
  //   source: "https://github.com",
  //   visit: "https://google.com",
  //   id: 3,
  // },
  // {
  //   title: "E-Commerce",
  //   description:
  //     "While building it you're going to learn many advanced React & JavaScript topics, as well as how to use Stripe for card transactions. On top of that, at the end of the video, you will have this unique and complex webshop app that you will be able to add to your portfolio. And trust me, e-commerce applications are impressive.",
  //   image: img2,
  //   type: "Design to Code",
  //   tags: ["React", "NextJs", "Sanity"],
  //   source: "https://github.com",
  //   visit: "https://google.com",
  //   id: 1,
  // },
  // {
  //   title: "Dashboard",
  //   description:
  //     "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
  //   image: img3,
  //   tags: ["React", "TailwindCss", "Redux"],
  //   type: "Design to Code",
  //   source: "https://github.com",
  //   visit: "https://google.com",
  //   id: 2,
  // },
  // {
  //   title: "Crypto",
  //   description:
  //     "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
  //   image: img1,
  //   tags: ["React", "Redux", "RapidAPI"],
  //   type: "Design to Code",
  //   source: "https://github.com",
  //   visit: "https://google.com",
  //   id: 3,
  // },
];

export const technologies = [
  {
    title: "API",
    image: "../assets/api.png",
  },
  {
    title: "Bootstrap",
    image: "../assets/bootstrap.png",
  },
  {
    title: "Firebase",
    image: "../assets/firebase.svg",
  },
  {
    title: "Git",
    image: "../assets/git.png",
  },
  {
    title: "Github",
    image: "../assets/github.png",
  },
  {
    title: "React",
    image: "../assets/react.png",
  },
  {
    title: "Sanity",
    image: "../assets/sanity.svg",
  },
  {
    title: "TailwindCSS",
    image: "../assets/tailwind.png",
  },
];
