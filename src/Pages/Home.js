import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css"


const Home = () => {

    useEffect(() => {
        AOS.init({
            duration: 500,
            once: true,
        });
    }, []);

    const scrollToNextSection = () => {
        document.getElementById("about-me").scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <div className="background">
            <div className="text-container" data-aos="fade-up">
                <h1 className="big-text">Hello,</h1>
                <h1 className="little-text">my name is Nathan nice to meet you!</h1>
                <div className="arrow" onClick={scrollToNextSection}>▼</div>
            </div>
        </div>
    );
};

export default Home;