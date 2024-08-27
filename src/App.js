import React, { useState, useEffect } from 'react';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import Footer from "./Pages/Footer"
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Expertise from "./Pages/Expertise";
import useDarkMode from "./Components/Hooks/ThemeHook";

function App() {
    const [isHome, setIsHome] = useState(true);
    const [darkMode, toggleDarkMode] = useDarkMode();

    const handleScroll = () => {
        const scrollPos = window.scrollY || document.documentElement.scrollTop;

        if(scrollPos >= 730){
            setIsHome(false);
        } else {
            setIsHome(true);
        }

    };



    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Navbar isHome={isHome} darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>

            <section id="home">
                <Home />
            </section>

            <section id="about-me">
                <AboutMe darkMode={darkMode}/>
            </section>

            <section id="expertise">
                <Expertise darkMode={darkMode}/>
            </section>

            <section id="projects">
                <Projects darkMode={darkMode}/>
            </section>

            <Footer/>

        </>
    );
}

export default App;