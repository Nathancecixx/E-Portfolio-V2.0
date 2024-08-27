import React from 'react';
import "./AboutMe.css";
import useTheme from "../Components/Hooks/ThemeHook";
import AboutMe_Icon_Light from "../Resources/Icons/AboutMe_Icon_Light.png";
import AboutMe_Icon_Dark from "../Resources/Icons/AboutMe_Icon_Dark.png";

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

const AboutMe = ({ darkMode }) => {
    return (
        <div className="about-me-section">
            <div className="paragraph-section">
                <h1 className="about-me-title">About Me</h1>
                {darkMode ? (
                    <img className="paragraph-image" src={AboutMe_Icon_Dark} alt={"Coding Student Logo"}/>
                ) : (
                    <img className="paragraph-image" src={AboutMe_Icon_Light} alt={"Coding Student Logo"}/>
                )}
                <p className="paragraph-text">
                    My journey into computer science began in 2020 with an introductory programming class in high school, where I quickly discovered my passion for technology. Despite challenges in other subjects, my dedication led me to complete an additional year of high school to meet university requirements. This determination paid off, and I am now in my second year of the Bachelor of Computer Science program at Conestoga College. I'm continually exploring the ever-evolving world of technology, driven by a deep curiosity and commitment to learning.
                </p>
            </div>

            <h1 className="tech-title">My Technologies</h1>
            <div className="tech-section">
                {Object.keys(logos).map((tech) => (
                    <div className="tech-card" key={tech}>
                        <img className="tech-logo" src={darkMode ? logos[tech].dark : logos[tech].light} alt={`${tech} logo`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutMe;
