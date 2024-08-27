import OOP_Logo from "../Resources/Icons/OOP.png";
import DSA from "../Resources/Icons/D&A.png";
import Handshake from "../Resources/Icons/Handshake.png";
import Devify_Demo from "../Resources/Images/Devify_Demo.png"
import Encrypterizer_Demo from "../Resources/Images/Encrypterizer_Demo.png"
import EloEngineer_Demo from "../Resources/Images/EloEngineer_Demo.png"

export const skills = [
    {
        id: "1",
        title: "Object Oriented Programming (OOP)",
        subtitle: "MERN Stack",
        description:
            "One of the best data I have in my arsenal is my familiarity with the Object Oriented approach to programming. Right from the jump I learned to program with these concepts as in grade 10 my first real language was java. Over the years I have increased my familiarity with not only java, but the OOP concept itself with other languages such as C++, and C#",
        image: OOP_Logo,
        techStack: ['C++', 'Java']
    },
    {
        id: "2",
        title: "Data Structures and Algorithms",
        subtitle: "React and Python",
        description:
            "I was introduced to data structures and algorithms during my first year of college. Since then I have researched and implemented plenty of different algorithms from basic sorting, to Huffman's Encoding for file compression.",
        image: DSA,
        techStack: ['C', 'C++', "Python"]
    },
    {
        id: "3",
        title: "Team Oriented Work",
        subtitle: "React and Firebase",
        description:
            "During the time ive been in school I have had the opportunity to experience plenty of group work through projects. I worked with range of people on a wide variety of problems in C ranging from triangle and different shape classifiers, basic file encryption software, or even an implementation of the machine learning K Nearest Neighbors algorithm (K-NN). Each of these ventures where vastly successful being great opportunities to learn.",
        image: Handshake,
        techStack: ['C', 'C++', "Machine Learning"]
    },
];

export const projects = [
    {
        id: "1",
        title: "Devify",
        subtitle: "Discord Server Team Development Kit",
        description:
            "In collaboration with a fellow classmate, I developed Devify, a full-stack Discord bot application aimed at transforming Discord servers into optimal communication hubs for development teams. The front-end website, built using React and hosted on Vercel, offers users a streamlined interface to access the bot's features. The backend API server, developed with Python and Flask, was hosted on Heroku alongside the bot itself. Devify is designed to enhance team collaboration with a range of helpful commands and server management features, all tailored to meet the needs of development teams. The system also utilizes a robust database to store server-specific data, ensuring customized functionality and seamless operation across different servers. This project not only demonstrated our technical skills but also our commitment to creating tools that facilitate effective teamwork and communication.",
        image: Devify_Demo,
        link: "https://github.com/Nathancecixx/Devify_Bot",
        techStack: ['Python', 'Flask', 'Javascript', 'React', 'MongoDB', 'Discord API']
    },
    {
        id: "2",
        title: "Elo Engineer",
        subtitle: "Discord bot for gaming servers",
        description:
            "Elo Engineer is a multifaceted Discord bot designed to enhance the gaming experience within a community. This project involved building a bot capable of delivering a range of functionalities, from tracking and displaying player stats to providing server management tools. Developed as an open-source project and hosted on GitHub, Elo Engineer leverages Python for its core logic and Discord.py for seamless integration with Discord servers. The bot includes commands for game-related statistics, music playback, and squad management, making it an essential tool for gaming communities. Elo Engineer was developed with a focus on scalability and customization, allowing server administrators to tailor its features to their community’s specific needs. This project reflects my commitment to creating robust and useful tools for online communities.",
        image: EloEngineer_Demo,
        link: "https://github.com/Nathancecixx/EloEngineer",
        techStack: ['Python', 'Discord API']
    },
    {
        id: "3",
        title: "Encrypterizer",
        subtitle: "Basic CLI file encryption",
        description:
            "During my first year in college, I collaborated with three teammates on a challenging project to create a Command-Line Interface (CLI) application as part of a Team-Based Software Development course. We followed the Software Development Life Cycle (SDLC) from start to finish. Our process began with planning high-level modules, which we then methodically implemented using Test-Driven Development (TDD). This approach allowed us to build the application iteratively, ensuring that each component was thoroughly tested and reliable. We concluded the project with a comprehensive set of robust unit tests, reflecting our commitment to quality and precision throughout the development process.",
        image: Encrypterizer_Demo,
        link: "https://github.com/Nathancecixx/Encrypterizer",
        techStack: ['C', 'C++', 'Github']
    },
    {
        id: "4",
        title: "Notify",
        subtitle: "Basic GUI Note Taking Reminder App",
        description:
            "During my first year in college, I collaborated with three teammates on a challenging project to create a Command-Line Interface (CLI) application as part of a Team-Based Software Development course. We followed the Software Development Life Cycle (SDLC) from start to finish. Our process began with planning high-level modules, which we then methodically implemented using Test-Driven Development (TDD). This approach allowed us to build the application iteratively, ensuring that each component was thoroughly tested and reliable. We concluded the project with a comprehensive set of robust unit tests, reflecting our commitment to quality and precision throughout the development process.",
        image: Encrypterizer_Demo,
        link: "https://github.com/Nathancecixx/Notify",
        techStack: ['C', 'C++', 'Github']
    },
    {
        id: "5",
        title: "Recipe Book",
        subtitle: "Basic CLI file encryption",
        description:
            "During my first year in college, I collaborated with three teammates on a challenging project to create a Command-Line Interface (CLI) application as part of a Team-Based Software Development course. We followed the Software Development Life Cycle (SDLC) from start to finish. Our process began with planning high-level modules, which we then methodically implemented using Test-Driven Development (TDD). This approach allowed us to build the application iteratively, ensuring that each component was thoroughly tested and reliable. We concluded the project with a comprehensive set of robust unit tests, reflecting our commitment to quality and precision throughout the development process.",
        image: Encrypterizer_Demo,
        link: "https://github.com/Nathancecixx/Encrypterizer",
        techStack: ['C', 'C++', 'Github']
    },
    {
        id: "6",
        title: "Encrypterizer",
        subtitle: "Basic CLI file encryption",
        description:
            "During my first year in college, I collaborated with three teammates on a challenging project to create a Command-Line Interface (CLI) application as part of a Team-Based Software Development course. We followed the Software Development Life Cycle (SDLC) from start to finish. Our process began with planning high-level modules, which we then methodically implemented using Test-Driven Development (TDD). This approach allowed us to build the application iteratively, ensuring that each component was thoroughly tested and reliable. We concluded the project with a comprehensive set of robust unit tests, reflecting our commitment to quality and precision throughout the development process.",
        image: Encrypterizer_Demo,
        link: "https://github.com/Nathancecixx/Encrypterizer",
        techStack: ['C', 'C++', 'Github']
    }
];