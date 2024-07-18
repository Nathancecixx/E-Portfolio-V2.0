import React from 'react';
import './InfoCard.css';

const InfoCard = ({ src, title, text , styles}) => {
    return (
        <div className="card" style={styles}>
            <img className="image" src={src} alt={title} />
            <h1 className="title">{title}</h1>
            <p className="paragraph">{text}</p>
        </div>
    );
};

export default InfoCard;
