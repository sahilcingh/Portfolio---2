import { codeclause, sparks, oasis } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    pricewise,
    snapgram,
    react,
    summiz,
    tailwindcss,
    threads
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Full Stack Web Developer",
        company_name: "Sparks Foundation",
        icon: sparks ,
        iconBg: "#accbe1",
        date: "December 2022 - January 2023",
        points: [
            "Developing and maintaining web applications using Front end web developing skills and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Development Intern",
        company_name: "CodeClause",
        icon: codeclause,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies. Named as ZenWeather",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Oasis InfoByte",
        icon: oasis,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/sahilcingh',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sahil-singh-941067211/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Portfolio Website',
        description: 'Developed a website showing my skillset and experiences. It uses Three JS and Node Js frameworks to make it so attractive',
        link: 'https://github.com/sahilcingh/Portfolio---2',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Rock or Mine detection using SONAR Data',
        description: 'This project implements a machine learning model to classify objects as either rocks or mines using SONAR data. The model is built using Logistic Regression and developed in Python with Google Colaboratory.',
        link: 'https://github.com/sahilcingh/Rock-or-Mine-Prediction-using-SONAR-Data',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'ZenWeather',
        description: 'Built a Weather forecast application which uses Open Weather API to provide the weather forecast for the next 5 Days.',
        link: 'https://github.com/sahilcingh/CodeClauseInternship_ZenWeather.git',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Loan Prediction Using DS',
        description: 'A machine learning model that uses Data Science concepts like Naive Bayes algorithm, with a impressive accuracy rate. ',
        link: 'https://github.com/sahilcingh/LoanPredictionusingDS',
    }
];