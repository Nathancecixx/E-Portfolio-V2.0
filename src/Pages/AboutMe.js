import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutMe.css";

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
    c:      { light: c_logo_light,      dark: c_logo_dark,      level: "Encrypterizer",     link: "https://github.com/Nathancecixx/Encrypterizer" },
    cpp:    { light: cpp_logo_light,    dark: cpp_logo_dark,    level: "OpenMind",          link: "https://github.com/Nathancecixx/OpenMind" },
    python: { light: py_logo_light,     dark: py_logo_dark,     level: "DriveAware",        link: "https://github.com/Nathancecixx/Group5F24Backend" },
    java:   { light: java_logo_light,   dark: java_logo_dark,   level: "Subject-Observer",  link: "https://github.com/Nathancecixx/Subject-Observer-Java" },
    github: { light: github_logo_light, dark: github_logo_dark, level: "Expert",            link: "https://github.com/Nathancecixx" },
    ubuntu: { light: ubuntu_logo_light, dark: ubuntu_logo_dark, level: "Comfortable",       link: "https://ubuntu.com/" },
};

const AboutMe = ({ darkMode }) => {
    useEffect(() => {
        AOS.init({ duration: 700, once: true, easing: "ease-out-cubic" });
    }, []);

    return (
        <section id="about-me" className="about-me-section" aria-labelledby="about-title">
            {/* soft aurora backdrop */}
            <div className="about-aurora" aria-hidden="true">
                <span />
                <span />
            </div>

            <div className="about-container">
                <h1 id="about-title" className="about-me-title" data-aos="fade-up">
                    About <span className="grad-text">Me</span>
                </h1>

                <div className="about-grid">
                    <div className="about-visual" data-aos="fade-right">
                        <img
                            className="about-image"
                            src={darkMode ? AboutMe_Icon_Dark : AboutMe_Icon_Light}
                            alt="Developer avatar"
                            draggable="false"
                        />
                    </div>

                    <div className="about-card" data-aos="fade-left">
                        <ul className="about-me-bullets">
                            <li>Passionate about technology and problem-solving.</li>
                            <li>Proficient in C, C++, Python, Java & more.</li>
                            <li>Hands-on with GitHub and Linux environments.</li>
                            <li>Constantly learning modern frameworks & libraries.</li>
                        </ul>

                        {/* In-page anchor; no new tab so mobile sizing stays consistent */}
                        <a
                            href="#contact"
                            className="btn btn--primary about-cta"
                            data-aos="zoom-in"
                            data-aos-delay="100"
                        >
                            Get In Touch
                        </a>
                    </div>
                </div>

                <h2 className="tech-title" data-aos="fade-up">My Technologies</h2>

                <div className="tech-grid">
                    {Object.keys(logos).map((tech, i) => (
                        <a
                            key={tech}
                            href={logos[tech].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="tech-card"
                            title={logos[tech].level}
                            data-aos="zoom-in"
                            data-aos-delay={80 + i * 80}
                            aria-label={`${tech} – ${logos[tech].level}`}
                        >
                            <span className="tech-border" aria-hidden="true" />
                            <img
                                className="tech-logo"
                                src={darkMode ? logos[tech].dark : logos[tech].light}
                                alt={`${tech} logo`}
                                draggable="false"
                            />
                            <span className="tech-chip">{tech}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
