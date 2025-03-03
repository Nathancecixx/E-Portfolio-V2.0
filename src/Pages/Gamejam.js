import React from "react";
import { gamejams } from "../Data/Data";
import "./Gamejam.css";
import ProjectCard from "../Components/ProjectCard/ProjectCard";


const Gamejam = () => {
    return (
        <div className="jam-section">
            <h1 className="jam-title">Gamejam's</h1>
            <div className="projects-card-container">
                {[...gamejams].reverse().map((jam, index) => (
                    <ProjectCard
                        key={index}
                        src={jam.image}
                        title={jam.title}
                        subtitle={jam.subtitle}
                        text={jam.description}
                        list={jam.techStack}
                        githubLink={jam.github_link}
                        websiteLink={jam.website_link}
                    />
                ))}
            </div>
        </div>
    );
};

export default Gamejam;
