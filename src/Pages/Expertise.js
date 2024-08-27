import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import InfoCard from "../Components/InfoCard/InfoCard";
import "./Expertise.css";
import { skills } from "../Data/Data";

const Expertise = ({ darkMode }) => {
    return (
        <div className="expertise-section">
            <h1 className="expertise-title" data-aos="fade-up">My Expertise</h1>
            <div className="card-container">
                {skills.map((skill, index) => (
                    <div className="card-wrapper" key={index} data-aos="zoom-in" data-aos-delay={`${index * 100}`}>
                        <InfoCard
                            src={skill.image}
                            title={skill.title}
                            text={skill.description}
                            list={skill.techStack}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Expertise;
