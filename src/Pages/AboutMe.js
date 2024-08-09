
import React from 'react'
import "./AboutMe.css"
import InfoCard from "../Components/InfoCard/InfoCard";
import C_Logo from "../Resources/Icons/C_Logo.png";
import CodingStudent from "../Resources/Icons/AboutMeIcon.png";
const AboutMe = () => {
    return (
        <div className="about-me-section">
            <div className="paragraph-section">
                <div className="paragraph-text">
                    <img className="paragraph-image" src={CodingStudent} alt={"Coding Student Logo"}/>
                    <h1 className="h1">About Me</h1>
                    <p className="p1">My journey into computer science began in 2020 with an introductory programming class in high school, where I quickly discovered my passion for technology. Despite challenges in other subjects, my dedication led me to complete an additional year of high school to meet university requirements. This determination paid off, and I am now in my second year of the Bachelor of Computer Science program at Conestoga College. I'm continually exploring the ever-evolving world of technology, driven by a deep curiosity and commitment to learning.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;