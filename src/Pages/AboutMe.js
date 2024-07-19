
import React from 'react'
import "./AboutMe.css"
import InfoCard from "../Components/InfoCard/InfoCard";
import C_Logo from "../Resources/Icons/C_Logo.png";

const AboutMe = () => {
    return (
        <div className="about-me-section">

            <h1 className="h1">About Me</h1>

            <p className="p1">My journey into the world of comp sci began in 2020 when I was in grade 10. Faced with choosing elective courses for the first time, my interest in computers led me to enroll in an introductory computer programming class. We explored basic logic using a Scratch-like language to create a mini game, which was enough to spark my fascination. Throughout the rest of high school, I took every computer course available, learning everything from the fundamentals of object-oriented programming (OOP) with Java to wiring breadboards and building basic robots.</p>
            <p className="p2">Although I loved the computer courses, I continued to struggle applying myself in other subjects. This view gradually shifted as I progressed through high school, but by the time grade 12 was over, it was too late to meet the required courses and marks for many universities. Determined to pursue this new passion, I decided to take an additional year (grade 12+) to complete the necessary calculus course. This extra year allowed me to mature, gain the knowledge I needed, and confirm my commitment to a career in technology. During this time I delved deeper into the subject exploring various technologies beyond the software and language covered in school.</p>
            <p className="p3">My hard work paid off when I was accepted into Conestoga Collage's 4 year Bachelor of Computer Science program. Now in my second year, I continues to dive deeper down the consonantly changing rabbit hole of known as comp sci.</p>

        </div>
    );
};

export default AboutMe;