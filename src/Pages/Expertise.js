
import React from 'react'
import InfoCard from "../Components/InfoCard/InfoCard";

import { skills } from "../Data/Skills";

import "./Expertise.css"

const Expertise = () => {
    return (
        <div className="expertise-section">

            <h1 className="expertise-title">My Expertise</h1>

            <div className="card-container">

                {skills.map((skill) => (
                    <InfoCard classname="card" src={skill.image} title={skill.title} text={skill.description}/>
                ))}

            </div>
        </div>
    );
};

export default Expertise;