
import React from 'react'
import InfoCard from "../Components/InfoCard/InfoCard";

import { skills } from "../Data/Skills";

import "./Expertise.css"

import github_logo from "../Resources/Icons/GithubLogo.png";
import c_logo from "../Resources/Icons/C_Logo.png";
import cpp_logo from "../Resources/Icons/cpp_logo.png";
import py_logo from "../Resources/Icons/py_logo.png";
import ubuntu_logo from "../Resources/Icons/Ubuntu_Logo.png";
import java_logo from "../Resources/Icons/java_logo.png";

const Expertise = () => {
    return (
        <div className="expertise-section">

            <h1 className="expertise-title">My Technologies</h1>


            <div className="tech-section">
                <div className="tech-card" key="c">
                    <img className="tech-logo" src={c_logo} alt='C logo'/>
                </div>
                <div className="tech-card" key="cpp">
                    <img className="tech-logo" src={cpp_logo} alt='C++ logo'/>
                </div>
                <div className="tech-card" key="python">
                    <img className="tech-logo" src={py_logo} alt='Python logo'/>
                </div>
                <div className="tech-card" key="ubuntu">
                    <img className="tech-logo" src={ubuntu_logo} alt='Python logo'/>
                </div>
                <div className="tech-card" key="java">
                    <img className="tech-logo" src={java_logo} alt='Python logo'/>
                </div>
                <div className="tech-card" key="github">
                    <img className="tech-logo" src={github_logo} alt='GitHub logo'/>
                </div>
            </div>



            <h1 className="expertise-title">My Expertise</h1>

            <div className="card-container">

                {skills.map((skill) => (
                    <InfoCard classname="card"
                              src={skill.image}
                              title={skill.title}
                              text={skill.description}
                              list={skill.techStack}/>
                ))}

            </div>
        </div>
    );
};

export default Expertise;