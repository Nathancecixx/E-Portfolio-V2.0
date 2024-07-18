import React, { useState, useEffect } from 'react';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import Footer from "./Pages/Footer"
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

function App() {
    const [IsHome, setIsHome] = useState(true);

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

    useEffect(() => {
        console.log("IsHome = " + IsHome)
    }, [IsHome]);

    return (
        <>
            <Navbar IsHome={IsHome}/>

            <section id="home">
                <Home />
            </section>

            <section id="about-me">
                <AboutMe />
            </section>

            <section id="projects">

            </section>

            <Footer/>

        </>
    );
}

export default App;