import React, { useMemo, useRef, useEffect, useState } from "react";
import "./ProjectCard.css";

/** Observe visibility once, then stop */
function useInViewOnce(options = { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.15 }) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (!ref.current || inView) return;
        const el = ref.current;

        const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                obs.unobserve(el);
            }
        }, options);

        obs.observe(el);
        return () => obs.disconnect();
    }, [inView, options]);

    return [ref, inView];
}

const ProjectCard = ({
                         idx = 0,
                         src,
                         title,
                         subtitle,
                         text,
                         list = [],
                         githubLink,
                         websiteLink,
                     }) => {
    const [isOpen, setIsOpen] = useState(false);
    const descId = useMemo(() => {
        const slug = String(title || "project").toLowerCase().replace(/[^a-z0-9]+/g, "-");
        return `proj-desc-${idx}-${slug}`;
    }, [idx, title]);

    const [cardRef, isVisible] = useInViewOnce();

    return (
        <article
            ref={cardRef}
            className={`project-card ${isOpen ? "is-open" : ""} ${isVisible ? "is-visible" : ""}`}
            role="listitem"
            aria-labelledby={`${descId}-title`}
            tabIndex={0}
        >
            <div
                className="project-card__inner"
                /* staggered reveal per index */
                style={{ animationDelay: `${idx * 80}ms` }}
            >
                {src && (
                    <figure className="project-media">
                        <img
                            src={src}
                            alt={title || "Project cover"}
                            loading="lazy"
                            className="project-card-image"
                        />
                    </figure>
                )}

                <div className="project-card-text">
                    {title && (
                        <h3 className="project-title" id={`${descId}-title`}>
                            {title}
                        </h3>
                    )}
                    {subtitle && <p className="project-subtitle">{subtitle}</p>}

                    {Array.isArray(list) && list.length > 0 && (
                        <div className="project-tech-list" role="list" aria-label="Tech stack">
                            {list.map((item, i) => (
                                <div key={`${title || "tech"}-${i}`} className="project-tech-item" role="listitem">
                                    {item}
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="link-row">
                        {githubLink && (
                            <a
                                href={githubLink}
                                className="btn btn--ghost"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Open ${title} on GitHub`}
                            >
                                View on GitHub
                            </a>
                        )}
                        {websiteLink && (
                            <a
                                href={websiteLink}
                                className="btn btn--primary"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Open ${title} website`}
                            >
                                Visit Website
                            </a>
                        )}
                    </div>

                    <button
                        className="dropdown-button"
                        onClick={() => setIsOpen(v => !v)}
                        aria-expanded={isOpen}
                        aria-controls={descId}
                    >
                        {isOpen ? "Hide ▲" : "Read More ▼"}
                    </button>

                    <div className="project-description" id={descId}>
                        {text && <p className="project-paragraph">{text}</p>}
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;
