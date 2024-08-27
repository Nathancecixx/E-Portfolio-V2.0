import React from 'react';
import InfoCard from "../Components/InfoCard/InfoCard";
import "./Expertise.css";
import { skills } from "../Data/Data";

const Expertise = ({ darkMode }) => {
    return (
        <div className="expertise-section">
            <h1 className="expertise-title">My Expertise</h1>
            <div className="card-container">
                {skills.map((skill) => (
                    <div className="card-wrapper">
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
