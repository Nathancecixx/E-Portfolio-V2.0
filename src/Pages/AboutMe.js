
import React from 'react'
import "./AboutMe.css"
import useTheme from "../Components/Hooks/ThemeHook";
import AboutMe_Icon_Light from "../Resources/Icons/AboutMe_Icon_Light.png";
import AboutMe_Icon_Dark from "../Resources/Icons/AboutMe_Icon_Dark.png";


const AboutMe = ({ darkMode }) => {

    return (
        <div className="about-me-section">
            <div className="paragraph-section">
                <div className="paragraph-text">
                    {darkMode ? (
                        <img className="paragraph-image" src={AboutMe_Icon_Dark} alt={"Coding Student Logo"}/>
                    ) : (
                        <img className="paragraph-image" src={AboutMe_Icon_Light} alt={"Coding Student Logo"}/>
                    )}
                    <h1 className="h1">About Me</h1>
                    <p className="p1">My journey into computer science began in 2020 with an introductory programming class in high school, where I quickly discovered my passion for technology. Despite challenges in other subjects, my dedication led me to complete an additional year of high school to meet university requirements. This determination paid off, and I am now in my second year of the Bachelor of Computer Science program at Conestoga College. I'm continually exploring the ever-evolving world of technology, driven by a deep curiosity and commitment to learning.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;