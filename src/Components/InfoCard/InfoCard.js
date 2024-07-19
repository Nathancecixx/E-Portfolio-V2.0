import React from 'react';
import './InfoCard.css';

const InfoCard = ({ src, title, text }) => {

    return (
        <div className="card">
            <img className="card-image" src={src} alt={title} />
            <div className="card-text">
                <h1 className="title">{title}</h1>
                <p className="paragraph">{text}</p>
            </div>
        </div>
    );
};

export default InfoCard;
