
import "./Home.css"
import "../Components/InfoCard/InfoCard"
import C_Logo from "../Resources/Icons/C_Logo.png"
import InfoCard from "../Components/InfoCard/InfoCard";


const Home = () => {

    const scrollToNextSection = () => {
        document.getElementById("about-me").scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <div className="background">
            <div className="text-container">
                <h1 className="big-text">Hello,</h1>
                <h1 className="little-text">my name is Nathan nice to meet you!</h1>
                <div className="arrow" onClick={scrollToNextSection}>▼</div>
            </div>
        </div>
    );
};

export default Home;