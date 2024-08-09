import React from 'react';
import './InfoCard.css';

const InfoCard = ({ src, title, text, list }) => {

    return (
        <div className="card">
            <img className="card-image" src={src} alt={title} />
            <div className="card-text">
                <h1 className="title">{title}</h1>
                <p className="paragraph">{text}</p>
                <div className="tech-list">
                    {list.map((item, index) => (
                        <div key={index} className="tech-item">
                            {item}
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default InfoCard;
