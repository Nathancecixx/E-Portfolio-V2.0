import React, { useState } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ src, title, subtitle, text, list, githubLink, websiteLink }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="project-card" data-aos="fade-right">
            <img className="project-card-image" src={src} alt={title}/>
            <div className="project-card-text" data-aos="fade-left">
                <h1 className="project-title">{title}</h1>
                <p1 className="project-subtitle">{subtitle}</p1>
                <div className="project-tech-list">
                    {list.map((item, index) => (
                        <div key={index} className="project-tech-item">
                            {item}
                        </div>
                    ))}
                </div>

                <div className="link-container">
                    {githubLink && (
                        <a
                            href={githubLink}
                            className="github-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on GitHub
                        </a>
                    )}

                    {websiteLink && (
                        <a
                            href={websiteLink}
                            className="github-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Visit Website
                        </a>
                    )}
                </div>

                <button className="dropdown-button" onClick={toggleDropdown}>
                    {isOpen ? "Hide ▲" : " Read More ▼"}
                </button>
                {isOpen && (
                    <div className="project-description">
                        <p className="project-paragraph">{text}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
