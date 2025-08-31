import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import InfoCard from "../Components/InfoCard/InfoCard";
import "./Expertise.css";
import { skills } from "../Data/Data";

const Expertise = ({ darkMode }) => {
    useEffect(() => {
        AOS.init({ duration: 700, easing: "ease-out-cubic", once: true, offset: 60 });
    }, []);

    return (
        <section
            className="expertise-section"
            id="expertise"
            data-theme={darkMode ? "dark" : "light"}
        >
            <div className="expertise-bg" aria-hidden="true" />
            <div className="expertise-inner">
                <h2 className="expertise-title" data-aos="fade-up">
                    <span className="grad">My Expertise</span>
                    <span className="sparkle" aria-hidden="true" />
                </h2>

                <div className="card-grid" role="list">
                    {skills?.map((skill, index) => (
                        <article
                            className="exp-card"
                            key={skill?.title ?? index}
                            role="listitem"
                            data-aos="zoom-in"
                            data-aos-delay={`${index * 90}`}
                            aria-label={`${skill.title} card`}
                            tabIndex={0}
                        >
                            {/* Lift/hover is applied to inner to avoid backdrop-filter + transform bugs */}
                            <div className="exp-card__inner">
                                <InfoCard
                                    src={skill.image}
                                    title={skill.title}
                                    text={skill.description}
                                    list={skill.techStack}
                                />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
