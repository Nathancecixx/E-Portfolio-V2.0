import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import Footer from "./Pages/Footer";
import Projects from "./Pages/Projects";
import Gamejams from "./Pages/Gamejam";
import Expertise from "./Pages/Expertise";
import Contact from "./Pages/Contact";
import useDarkMode from "./Components/Hooks/ThemeHook";
import SharedBg from "./Components/SharedBg/SharedBg";
import "./App.css";

function App() {
    const [isHome, setIsHome] = useState(true);
    const [darkMode, toggleDarkMode] = useDarkMode();

    const handleScroll = () => {
        const scrollPos = window.scrollY || document.documentElement.scrollTop;
        setIsHome(scrollPos < 730);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <Navbar isHome={isHome} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

            {/* HOME keeps its own background */}
            <section id="home">
                <Home />
            </section>

            {/* MID SECTIONS share one animated background */}
            <main className="mid-sections" role="main">
                <SharedBg />  {/* one background for all sections below */}

                <section id="about-me">
                    <AboutMe darkMode={darkMode} />
                </section>

                <section id="expertise">
                    <Expertise darkMode={darkMode} />
                </section>

                <section id="projects">
                    <Projects darkMode={darkMode} />
                </section>

                <section id="gamejams">
                    <Gamejams darkMode={darkMode} />
                </section>

                <section id="contact">
                    <Contact />
                </section>
            </main>

            {/* FOOTER keeps its own background */}
            <Footer />
        </>
    );
}

export default App;
