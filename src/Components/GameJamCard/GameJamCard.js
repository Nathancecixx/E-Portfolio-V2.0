import React from "react";
import "./GameJamCard.css";

const GameJamCard = ({ jam, index }) => {
    return (
        <div
            className={`timeline-item fade-in ${index % 2 === 0 ? "left" : "right"}`}
        >
            <div className="content">
                {/* Display the image at the top (or wherever you’d like) */}
                <img src={jam.image} alt={jam.title} className="project-image" />

                {/* Optional timestamp if you have jam.date:
            <small className="timestamp">{jam.date}</small>
        */}
                <h2>{jam.title}</h2>
                <h3>{jam.subtitle}</h3>
                <p>{jam.description}</p>

                {/* Tech stack as a simple list */}
                <div className="project-tech-list">
                    {jam.techStack?.map((item, idx) => (
                        <div key={idx} className="project-tech-item">
                            {item}
                        </div>
                    ))}
                </div>

                <div className="links">
                    {jam.github_link && (
                        <a
                            href={jam.github_link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    )}
                    {jam.website_link && (
                        <a
                            href={jam.website_link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Website
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GameJamCard;
