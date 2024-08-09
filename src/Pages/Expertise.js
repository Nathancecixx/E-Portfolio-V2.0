import React from 'react';
import InfoCard from "../Components/InfoCard/InfoCard";
import { skills } from "../Data/Skills";
import "./Expertise.css";

// Image imports
import github_logo_light from "../Resources/Icons/Github_Logo_Light.png";
import c_logo_light from "../Resources/Icons/C_Logo_Light.png";
import cpp_logo_light from "../Resources/Icons/cpp_logo_Light.png";
import py_logo_light from "../Resources/Icons/py_logo_Light.png";
import ubuntu_logo_light from "../Resources/Icons/Ubuntu_Logo_Light.png";
import java_logo_light from "../Resources/Icons/Java_Logo_Light.png";

import github_logo_dark from "../Resources/Icons/Github_Logo_Dark.png";
import c_logo_dark from "../Resources/Icons/C_Logo_Dark.png";
import cpp_logo_dark from "../Resources/Icons/cpp_logo_Dark.png";
import py_logo_dark from "../Resources/Icons/py_logo_Dark.png";
import ubuntu_logo_dark from "../Resources/Icons/Ubuntu_Logo_Dark.png";
import java_logo_dark from "../Resources/Icons/Java_Logo_Dark.png";

// Mapping object for logos
const logos = {
    c: { light: c_logo_light, dark: c_logo_dark },
    cpp: { light: cpp_logo_light, dark: cpp_logo_dark },
    python: { light: py_logo_light, dark: py_logo_dark },
    ubuntu: { light: ubuntu_logo_light, dark: ubuntu_logo_dark },
    java: { light: java_logo_light, dark: java_logo_dark },
    github: { light: github_logo_light, dark: github_logo_dark }
};

const Expertise = ({ darkMode }) => {
    return (
        <div className="expertise-section">
            <h1 className="expertise-title">My Technologies</h1>
            <div className="tech-section">
                {Object.keys(logos).map((tech) => (
                    <div className="tech-card" key={tech}>
                        <img className="tech-logo" src={darkMode ? logos[tech].dark : logos[tech].light} alt={`${tech} logo`} />
                    </div>
                ))}
            </div>

            <h1 className="expertise-title">My Expertise</h1>
            <div className="card-container">
                {skills.map((skill) => (
                    <InfoCard
                        classname="card"
                        src={skill.image}
                        title={skill.title}
                        text={skill.description}
                        list={skill.techStack}
                    />
                ))}
            </div>
        </div>
    );
};

export default Expertise;
