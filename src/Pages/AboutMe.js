import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./AboutMe.css";
import useTheme from "../Components/Hooks/ThemeHook";

// Light/Dark About Me Images
import AboutMe_Icon_Light from "../Resources/Icons/AboutMe_Icon_Light.png";
import AboutMe_Icon_Dark from "../Resources/Icons/AboutMe_Icon_Dark.png";

// Technology Logos (Light)
import github_logo_light from "../Resources/Icons/Github_Logo_Light.png";
import c_logo_light from "../Resources/Icons/C_Logo_Light.png";
import cpp_logo_light from "../Resources/Icons/cpp_logo_Light.png";
import py_logo_light from "../Resources/Icons/py_logo_Light.png";
import ubuntu_logo_light from "../Resources/Icons/Ubuntu_Logo_Light.png";
import java_logo_light from "../Resources/Icons/Java_Logo_Light.png";

// Technology Logos (Dark)
import github_logo_dark from "../Resources/Icons/Github_Logo_Dark.png";
import c_logo_dark from "../Resources/Icons/C_Logo_Dark.png";
import cpp_logo_dark from "../Resources/Icons/cpp_logo_Dark.png";
import py_logo_dark from "../Resources/Icons/py_logo_Dark.png";
import ubuntu_logo_dark from "../Resources/Icons/Ubuntu_Logo_Dark.png";
import java_logo_dark from "../Resources/Icons/Java_Logo_Dark.png";

// Mapping object for logos
const logos = {
    c: { light: c_logo_light, dark: c_logo_dark, level: "Intermediate" },
    cpp: { light: cpp_logo_light, dark: cpp_logo_dark, level: "Intermediate" },
    python: { light: py_logo_light, dark: py_logo_dark, level: "Intermediate" },
    ubuntu: { light: ubuntu_logo_light, dark: ubuntu_logo_dark, level: "Comfortable" },
    java: { light: java_logo_light, dark: java_logo_dark, level: "Beginner" },
    github: { light: github_logo_light, dark: github_logo_dark, level: "Expert" },
};

const AboutMe = ({ darkMode }) => {
    React.useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="about-me-section">
            <div className="paragraph-section" data-aos="fade-up">
                <h1 className="about-me-title">About Me</h1>
                {darkMode ? (
                    <img
                        className="paragraph-image"
                        src={AboutMe_Icon_Dark}
                        alt={"Coding Student Logo"}
                        data-aos="fade-left"
                    />
                ) : (
                    <img
                        className="paragraph-image"
                        src={AboutMe_Icon_Light}
                        alt={"Coding Student Logo"}
                        data-aos="fade-right"
                    />
                )}

                {/* INTRO TEXT */}
                <div className="paragraph-text" data-aos="fade-up">
                    <ul className="about-me-bullets" data-aos="fade-up">
                        <li>Passionate about technology and problem-solving</li>
                        <li>Proficient in C, C++, Python, and more</li>
                        <li>Hands-on experience with GitHub and Linux environments</li>
                        <li>Constantly learning new frameworks and libraries</li>
                    </ul>
                </div>

                {/* BULLET POINTS FOR QUICK SCANNING */}

                {/* CTA BUTTON */}
                <a
                    href="mailto:Nceci6042@conestogac.on.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button"
                    data-aos="fade-up"
                >
                    Get In Touch
                </a>
            </div>

            {/* TECHNOLOGIES SECTION */}
            <h1 className="tech-title" data-aos="fade-up">
                My Technologies
            </h1>
            <div className="tech-section">
                {Object.keys(logos).map((tech, index) => (
                    <div className="card-section" key={tech}>
                        <div
                            className="tech-card"
                            data-aos="zoom-in"
                            data-aos-delay={index * 100} // AOS delay instead of inline style
                            title={`Proficiency: ${logos[tech].level}`}
                        >
                            <img
                                className="tech-logo"
                                src={darkMode ? logos[tech].dark : logos[tech].light}
                                alt={`${tech} logo`}
                            />
                        </div>
                        <div
                            className="tech-name"
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                        >
                            <h5 className="name">{tech}</h5>
                        </div>
                    </div>
                ))}
        </div>
        </div>
    );
};

export default AboutMe;
