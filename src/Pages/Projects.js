import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { projects } from "../Data/Data";
import ProjectCard from "../Components/ProjectCard/ProjectCard";
import "./Projects.css";

const Projects = () => {
    useEffect(() => {
        AOS.init({ duration: 700, easing: "ease-out-cubic", once: true, offset: 60 });
    }, []);

    return (
        <section className="projects-section" id="projects">
            <div className="projects-bg" aria-hidden="true" />
            <div className="projects-inner">
                <h2 className="projects-title" data-aos="fade-up">
                    <span className="grad">Project Showcase</span>
                    <span className="sparkle" aria-hidden="true" />
                </h2>

                <div className="projects-grid" role="list">
                    {projects?.map((project, idx) => (
                        <ProjectCard
                            key={project?.title ?? idx}
                            idx={idx}
                            src={project.image}
                            title={project.title}
                            subtitle={project.subtitle}
                            text={project.description}
                            list={project.techStack}
                            githubLink={project.github_link}
                            websiteLink={project.website_link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
