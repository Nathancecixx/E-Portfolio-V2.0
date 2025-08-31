import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { gamejams } from "../Data/Data";
import ProjectCard from "../Components/ProjectCard/ProjectCard";
import "./Gamejam.css";

const Gamejam = () => {
    useEffect(() => {
        AOS.init({ duration: 700, easing: "ease-out-cubic", once: true, offset: 60 });
    }, []);

    return (
        <section className="jam-section" id="gamejams">
            <div className="jam-bg" aria-hidden="true" />
            <div className="jam-inner">
                <h2 className="jam-title" data-aos="fade-up">
                    <span className="grad">Game Jams</span>
                    <span className="sparkle" aria-hidden="true" />
                </h2>

                <div className="jam-grid" role="list">
                    {[...gamejams].reverse().map((jam, idx) => (
                        <ProjectCard
                            key={jam?.title ?? idx}
                            idx={idx}
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
        </section>
    );
};

export default Gamejam;
