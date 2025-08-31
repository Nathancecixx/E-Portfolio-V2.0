import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 700,
            once: true,
            easing: "ease-out-cubic",
        });
    }, []);

    const scrollToNextSection = () => {
        const el = document.getElementById("about-me");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <section className="hero" aria-label="Intro">
            {/* Animated aurora blobs */}
            <div className="aurora" aria-hidden="true">
                <span />
                <span />
                <span />
            </div>

            {/* Subtle grid overlay */}
            <div className="grid-overlay" aria-hidden="true" />

            <div className="hero__inner" data-aos="fade-up">
                <p className="eyebrow">Full Stack Developer • C / C++ • Builder</p>

                <h1 className="headline">
                    Nathan Ceci
                    <span className="sparkle" aria-hidden="true">✦</span>
                </h1>

                <p className="subheadline">
                    I design & build high-performance Web apps.
                </p>

                <div className="cta">
                    <a href="#projects" className="btn btn--primary">View Projects</a>
                    <a href="#contact" className="btn btn--ghost">Contact Me</a>
                </div>
            </div>

            <button className="scroll" onClick={scrollToNextSection} aria-label="Scroll to About">
                <span className="scroll__text">Scroll</span>
                <span className="scroll__chev">▼</span>
            </button>
        </section>
    );
};

export default Home;
