import React from "react";
import "./InfoCard.css";

const InfoCard = ({ src, title, text, list = [] }) => {
    return (
        <div className="card">
            {src ? (
                <img className="card-image" src={src} alt={title} loading="lazy" />
            ) : null}

            <div className="card-text">
                {title && <h3 className="title">{title}</h3>}
                {text && <p className="paragraph">{text}</p>}

                {Array.isArray(list) && list.length > 0 && (
                    <div className="tech-list" role="list">
                        {list.map((item, i) => (
                            <div
                                key={`${title || "tech"}-${i}`}
                                className="tech-item"
                                role="listitem"
                                aria-label={String(item)}
                                tabIndex={0}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default InfoCard;
