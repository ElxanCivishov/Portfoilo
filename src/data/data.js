// client
import client1 from "../images/logo-1-color.png";
import client2 from "../images/logo-2-color.png";
import client3 from "../images/logo-3-color.png";
import client4 from "../images/logo-4-color.png";
import client5 from "../images/logo-5-color.png";
import client6 from "../images/logo-6-color.png";

// service
import dev from "../images/icon-dev.svg";
import app from "../images/icon-app.svg";

// portfolio
import project1 from "../images/project-1.jpg";
import project2 from "../images/project-2.png";
import project4 from "../images/project-4.png";
import project7 from "../images/project-7.png";
import project8 from "../images/project-8.jpg";
import project9 from "../images/project-9.png";

export const profile = {
  photo: "",
  fullName: "Elkhan Civishov",
  job: "Frontend Developer",
  email: "elxan.civihsov2000@gmail.com",
  phone: "0516944685",
  date: "2000-12-18",
  location: "Baku, Azerbaijan",
};

export const about = [
  {
    id: 1,
    text: "I'm Frontend Engineer. In this direction, I am interested in new technologies, I study them, apply them and gather experience.",
  },
  {
    id: 2,
    text: "Every time I get a successful result from what I do, it gives me even more pleasure. My knowledge and experience in this field is increasing day by day. l'm sure l can add a lot to your company and team as l continue to learn.",
  },
];

export const clients = [client1, client2, client3, client4, client5, client6];

export const service = [
  {
    id: 1,
    img: dev,
    title: "Web development",
    content: "High-quality development of sites at the professional level.",
  },
  {
    id: 2,
    img: app,
    title: "Responsive web design",
    content: "Responsive web design for all devices and browsers.",
  },
];

export const resumeData = [
  {
    id: 1,
    title: "Education",
    content: [
      {
        id: 1,
        title: "Azerbaijan State Oil and Industry University",
        date: "2018 — 2022",
        content: "System Engineering",
      },
      {
        id: 2,
        title: "Azerbaijan Technical University",
        date: "202 — 2024",
        content: "Information protection and security",
      },
    ],
  },
  {
    id: 2,
    title: "Experience",
    content: [
      {
        id: 1,
        title: "Sara Invest",
        date: "2022.07.03 — 2023.05.01",
        content: `Help support legacy projects.      
          Write clean, maintainable and efficient code.
          Developing fully functional, optimized websites. with a beautiful user interface.
          Improved code quality and performance of web apps by code refactoring.
          Produced website compatible with multi browser.
          Manage SEO and change server-side rendering.
          Payment System.
          `,
      },
      {
        id: 2,
        title: "Sara Invest Internship",
        date: "2022.06.01 — 2022.07.03",
        content: `To acquire team working skills.
          Mastering the Agile Principle.
          Solving problems on deployed websites.
          Creating new websites for use.
          `,
      },
    ],
  },
];

export const skills = [
  {
    id: 1,
    title: "HTML",
    degre: "90",
  },
  {
    id: 2,
    title: "CSS / SCSS / SASS",
    degre: "90",
  },
  {
    id: 3,
    title: "JavaScript",
    degre: "70",
  },
  {
    id: 4,
    title: "jQuery",
    degre: "70",
  },
  {
    id: 5,
    title: "TypeScript",
    degre: "70",
  },
  {
    id: 6,
    title: "React",
    degre: "70",
  },
  {
    id: 7,
    title: "Redux & Redux Toolkit",
    degre: "70",
  },
  {
    id: 8,
    title: "React Query",
    degre: "70",
  },
  {
    id: 9,
    title: "Formik, React-Hook-Form, Yup",
    degre: "70",
  },
  {
    id: 10,
    title: "Git version control",
    degre: "70",
  },
  {
    id: 11,
    title: "Figma, Trello",
    degre: "70",
  },
  {
    id: 12,
    title: "Tailwind css",
    degre: "70",
  },
  {
    id: 13,
    title: "Bootsrap, MUI, Ant design",
    degre: "70",
  },
  {
    id: 14,
    title: "Ms Sql, Mongo DB",
    degre: "70",
  },
  {
    id: 15,
    title: "Node js, Express, REST Api",
    degre: "70",
  },
  {
    id: 16,
    title: "Webpack, Micro frontends",
    degre: "70",
  },
];

export const projects = [
  {
    id: 1,
    img: project1,
    title: "Finance",
    url: "",
    content: "Web Development",
  },
  {
    id: 2,
    img: project2,
    title: "Orizon",
    url: "",
    content: "Web Development",
  },

  {
    id: 4,
    img: project4,
    title: "Brawlhalla",
    url: "",
    content: "Applications",
  },

  {
    id: 7,
    img: project7,
    title: "Summary",
    url: "",
    content: "Web Development",
  },
  {
    id: 8,
    img: project8,
    title: "Task Manager",
    url: "8",
    content: "Applications",
  },
  {
    id: 9,
    img: project9,
    title: "Arrival",
    url: "9",
    content: "Web Development",
  },
];
