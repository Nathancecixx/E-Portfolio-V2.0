import { projects } from "../Data/Data";
import ProjectCard from "../Components/ProjectCard/ProjectCard";
import React from "react";
import "./Projects.css";

const Projects = () => {
    return (
        <div className="projects-section">
            <h1 className="projects-title">Project Showcase</h1>

            <div className="projects-card-container">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        src={project.image}
                        title={project.title}
                        subtitle={project.subtitle}
                        text={project.description}
                        list={project.techStack}
                        githubLink={project.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
