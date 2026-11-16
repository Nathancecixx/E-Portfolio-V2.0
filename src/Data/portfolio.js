import forge from '../Resources/Images/Forge_Demo.png';
import driveAware from '../Resources/Images/DriveAware_Demo.png';
import openMind from '../Resources/Images/OneMind_Demo.png';
import secureKicks from '../Resources/Images/SneakerShop_Demo.png';
import encrypterizer from '../Resources/Images/Encrypterizer_Demo.png';
import ufc from '../Resources/Images/UFC_Demo.png';
import elo from '../Resources/Images/EloEngineer_Demo.png';
import bitNByte from '../Resources/Images/BitNByte_Demo.png';
import wizard from '../Resources/Images/LilWizDemo.png';
import boxing from '../Resources/Images/BoxPong_Demo.png';

// To add a project: add an entry here. `category` must be one of the filters after "All".
// Thumbnails are cropped to 16:9. Set showWhole: true if a screenshot is a different shape and gets cut off.
export const filters = ['All', 'Software', 'Games'];

export const portfolioProjects = [
  { id: 'forge', title: 'Forge', category: 'Software', context: 'Personal project', description: 'A fitness tracker I host on my own server. It logs meals, workouts and body weight, pulls in Apple Health data, and has an AI coach that runs on a local model.', tech: ['Python', 'FastAPI', 'PostgreSQL', 'JavaScript', 'Local LLM'], image: forge },
  { id: 'open-mind', title: 'Open Mind', category: 'Software', context: 'ConnHacks 2025 hackathon', description: 'A chat app built in C and C++ with a threaded TCP server and a Raylib interface. Our team made it for the UN goal on peace and justice.', tech: ['C', 'C++', 'TCP/IP', 'Multithreading', 'Raylib'], image: openMind, showWhole: true, github: 'https://github.com/nathancecixx/OpenMind', website: 'https://conhacks.ca/', websiteLabel: 'Hackathon site' },
  { id: 'secure-kicks', title: 'Secure Kicks', category: 'Software', context: 'Personal project', description: 'A sneaker store running on a web server I wrote in C++ with CROW. It runs in Docker and builds with CMake.', tech: ['C++', 'CROW', 'Docker', 'CMake', 'JavaScript'], image: secureKicks, github: 'https://github.com/Nathancecixx/SecureKicks' },
  { id: 'drive-aware', title: 'Drive Aware', category: 'Software', context: 'Class team project', description: 'A mobile app that tracks driving habits, built with classmates. React Native on the front, a Python and Flask API with SQLite behind it. We ran it in sprints on Azure Boards.', tech: ['React Native', 'Python', 'Flask', 'SQLite'], image: driveAware, github: 'https://github.com/Nathancecixx/Group5F24Backend' },
  { id: 'encrypterizer', title: 'Encrypterizer', category: 'Software', context: 'First-year team project', description: 'A command-line file encryption tool built with three teammates. We wrote the tests first and built it one module at a time.', tech: ['C', 'C++', 'Unit testing'], image: encrypterizer, github: 'https://github.com/Nathancecixx/Encrypterizer' },
  { id: 'elo-engineer', title: 'Elo Engineer', category: 'Software', context: 'Personal project', description: 'A Discord bot for gaming servers with player stats, music playback and a squad builder.', tech: ['Python', 'discord.py'], image: elo, github: 'https://github.com/Nathancecixx/EloEngineer' },
  { id: 'ufc-stats', title: 'UFC Stats Hub', category: 'Software', context: 'Personal project', description: 'A site for UFC fighter stats and upcoming events. React and Material UI, pulling data from a REST API.', tech: ['React', 'Material UI', 'REST API'], image: ufc, website: 'https://ufc-stats-hub.vercel.app/' },
  { id: 'boxing', title: 'PingPong Boxing (VR Game)', category: 'Games', context: 'VARLab game jam, winter 2025', description: 'Ping pong crossed with boxing, in VR. Built with a team in Unity, C# and Blender.', tech: ['Unity', 'C#', 'Blender'], image: boxing },
  { id: 'little-wizard', title: 'Little Wizard', category: 'Games', context: 'VARLab game jam, fall 2024', description: 'A four-day jam with six classmates. I was the only one who had used Godot before, so I got the team up to speed on it.', tech: ['Godot', 'GDScript', 'Aseprite'], image: wizard, website: 'https://nathanceci.itch.io/little-wizard', websiteLabel: 'Play on itch.io' },
  { id: 'bitnbyte', title: 'BitNByte', category: 'Games', context: 'VARLab game jam, winter 2024', description: 'My first game jam. Nine of us learned Godot from scratch and shipped a game in four days.', tech: ['Godot', 'GDScript', 'C#'], image: bitNByte, website: 'https://gareth-simplestudios.itch.io/bit-and-byte', websiteLabel: 'Play on itch.io' },
];
