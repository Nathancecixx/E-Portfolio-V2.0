import OOP_Logo from "../Resources/Icons/OOP.png";
import DSA from "../Resources/Icons/D&A.png";
import Handshake from "../Resources/Icons/Handshake.png";
import Devify_Demo from "../Resources/Images/Devify_Demo.png"
import Encrypterizer_Demo from "../Resources/Images/Encrypterizer_Demo.png"
import EloEngineer_Demo from "../Resources/Images/EloEngineer_Demo.png"
import BitNByte_Demo from "../Resources/Images/BitNByte_Demo.png"
import Notify_Demo from "../Resources/Images/Notify_Demo.PNG"
import UFC_Demo from "../Resources/Images/UFC_Demo.png"
import Recipe_Demo from "../Resources/Images/Recipe_Demo.png"
import LilWiz_Demo from "../Resources/Images/LilWizDemo.png"
import BoxPong_Demo from "../Resources/Images/BoxPong_Demo.png"
import OpenMind_Demo from "../Resources/Images/OneMind_Demo.png"
import DriveAware from "../Resources/Images/DriveAware_Demo.png"


export const skills = [
    {
        id: "1",
        title: "Object-Oriented Programming (OOP)",
        subtitle: "",
        description:
            "From the very beginning of my programming journey, I have built a strong foundation in Object-Oriented Programming (OOP). My first language was Java, which introduced me to core OOP principles such as encapsulation, inheritance, polymorphism, and abstraction. Over the years, I have expanded my expertise by applying these concepts in C++, and C#, strengthening my ability to design scalable, maintainable, and modular software solutions.",
        image: OOP_Logo,
        techStack: ['C++', 'Java', "Python", "C#"]
    },
    {
        id: "2",
        title: "Networking Fundamentals",
        subtitle: "",
        description:
            "I have hands-on experience in network design, configuration, and troubleshooting. My work includes subnetting for optimized IP allocation, configuring routers and switches, and implementing secure network architectures. I have also worked with firewalls, VPN's, and proxies to enhance security and efficiency in network environments.",
        image: DSA,
        techStack: ['C', 'C++', "TCP/IP", "UDP/IP", "OSI Stack"]
    },
    {
        id: "3",
        title: "Team Oriented Work",
        subtitle: "React and Firebase",
        description:
            "During the time ive been in school I have had the opportunity to experience plenty of group work through projects. I worked with range of people on a wide variety of problems in C ranging from triangle and different shape classifiers, basic file encryption software, or even an implementation of the machine learning K Nearest Neighbors algorithm (K-NN). Each of these ventures where vastly successful being great opportunities to learn.",
        image: Handshake,
        techStack: ['Github', 'Azure', "Teams", "Sprint Methodology"]
    },
];

export const projects = [
    {
        id: "1",
        title: "Drive Aware",
        subtitle: "Effortless Tracking for Safer, Smarter Driving",
        description:
            "In collaboration with a team of classmates, we developed Drive Aware using agile sprint methodologies, leveraging Azure Boards for project management. The project involved comprehensive systems analysis and design, including the creation of various diagrams such as sequence diagrams, use case diagrams, and more, to ensure a well-structured and efficient development process.",
        image: DriveAware,
        github_link: "https://github.com/Nathancecixx/Group5F24",
        website_link: "",
        techStack: ['Javascript', 'React Native', 'Python', 'Flask', 'SQLite']
    },
    {
        id: "2",
        title: "Elo Engineer",
        subtitle: "Discord bot for gaming servers",
        description:
            "Elo Engineer is a multifaceted Discord bot designed to enhance the gaming experience within a community. This project involved building a bot capable of delivering a range of functionalities, from tracking and displaying player stats to providing server management tools. Developed as an open-source project and hosted on GitHub, Elo Engineer leverages Python for its core logic and Discord.py for seamless integration with Discord servers. The bot includes commands for game-related statistics, music playback, and squad management, making it an essential tool for gaming communities. Elo Engineer was developed with a focus on scalability and customization, allowing server administrators to tailor its features to their community’s specific needs. This project reflects my commitment to creating robust and useful tools for online communities.",
        image: EloEngineer_Demo,
        github_link: "https://github.com/Nathancecixx/EloEngineer",
        website_link: "",
        techStack: ['Python', 'Discord API']
    },
    {
        id: "3",
        title: "UFC Stats Hub",
        subtitle: "React website to display UFC statistics",
        description:
            "As a hobby project I decided to create my take on a UFC stat website. I have a backend REST api that I can request a range of different stats and info from.  For the frontend, I used React JS along with the Material UI library to achieve a responsive, polished, and consistent user experience.",
        image: UFC_Demo,
        github_link: "",
        website_link: "https://ufcstats.ca",
        techStack: ['Javascript', 'React', 'Material UI']
    },
    {
        id: "4",
        title: "Encrypterizer",
        subtitle: "Basic CLI file encryption",
        description:
            "During my first year in college, I collaborated with three teammates on a challenging project to create a Command-Line Interface (CLI) application as part of a Team-Based Software Development course. We followed the Software Development Life Cycle (SDLC) from start to finish. Our process began with planning high-level modules, which we then methodically implemented using Test-Driven Development (TDD). This approach allowed us to build the application iteratively, ensuring that each component was thoroughly tested and reliable. We concluded the project with a comprehensive set of robust unit tests, reflecting our commitment to quality and precision throughout the development process.",
        image: Encrypterizer_Demo,
        github_link: "https://github.com/Nathancecixx/Encrypterizer",
        website_link: "",
        techStack: ['C', 'C++', 'Github']
    },
    {
        id: "5",
        title: "Open Mind",
        subtitle: "ConnHacks 2025 Hackathon Submission",
        description:
            "",
        image: OpenMind_Demo,
        github_link: "https://github.com/nathancecixx/OpenMind",
        website_link: "https://conhacks.ca/",
        techStack: ['C', 'C++', 'RayLib']
    },
];


export const gamejams = [
    {
        id: "1",
        title: "BitNByte",
        subtitle: "VARLab GameJam Winter 2024",
        description:
            "During my first year in college, I collaborated with eight classmates on a challenging game jam hosted by Conestoga Collages Virtual and Augmented Reality Lab or VARLab. The jam lasted four days during our winter break and was a challenging task having to learn the Godot Game Engine from scratch. Luckily I had a great team of developers who were able to collaboratively teach each other, making some friends along the way.",
        image: BitNByte_Demo,
        github_link: "",
        website_link: "https://gareth-simplestudios.itch.io/bit-and-byte",
        techStack: ['Godot', 'GDScript', 'C#']
    },
    {
        id: "2",
        title: "Little Wizard",
        subtitle: "VARLab GameJam fall 2024",
        description:
            "In my second year at Conestoga College, I joined six classmates for an intensive four-day game jam hosted by the college's Virtual and Augmented Reality Lab (VARLab) during study week. As the only team member with prior experience in Godot and GDScript, I took the lead in introducing these tools, and thanks to my teammates' eagerness to learn, we quickly found our rhythm. Together, we overcame the challenge and crafted a project we’re genuinely proud of.",
        image: LilWiz_Demo,
        github_link: "",
        website_link: "https://nathanceci.itch.io/little-wizard",
        techStack: ['Godot', 'GdScript', 'Asprite']
    },
    {
        id: "3",
        title: "PingPong Boxing (VR Game)",
        subtitle: "VARLab GameJam winter 2025",
        description:
            "",
        image: BoxPong_Demo,
        github_link: "",
        website_link: "",
        techStack: ['Unity', 'C#', 'Blender']
    },
];
