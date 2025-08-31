import React from "react";
import "./Footer.css";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer" aria-label="Site footer">
            <div className="footer-inner">
                <p className="footer-text">
                    Loosely designed in <span className="text-highlight">Adobe XD</span> and
                    written using the <span className="text-highlight">CLion IDE</span> by{" "}
                    <span className="name-fx">Nathan Ceci</span>. Built with{" "}
                    <span className="text-highlight">JavaScript</span> +
                    <span className="text-highlight"> React</span>, deployed on{" "}
                    <span className="text-highlight">Vercel</span>.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
