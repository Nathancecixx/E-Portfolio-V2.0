
import React from 'react'
import InfoCard from "../Components/InfoCard/InfoCard";
import C_Logo from "../Resources/Icons/C_Logo.png";

const AboutMe = () => {
    return (
        <div id="about-me" className="about-me-section">

            <h1>My Skills</h1>

            <div className="card-container">
                <InfoCard
                    src={C_Logo}
                    title="Github"
                    text="This is a test card talking about github"
                />

                <InfoCard
                    src={C_Logo}
                    title="Github"
                    text="This is a test card talking about github"
                />

                <InfoCard
                    src={C_Logo}
                    title="Github"
                    text="This is a test card talking about github"
                />

                <InfoCard
                    src={C_Logo}
                    title="Github"
                    text="This is a test card talking about github"
                />

                <InfoCard
                    src={C_Logo}
                    title="Github"
                    text="This is a test card talking about github"
                />

                <InfoCard
                    src={C_Logo}
                    title="Github"
                    text="This is a test card talking about github"
                />

                <InfoCard
                    src={C_Logo}
                    title="Github"
                    text="This is a test card talking about github"
                />

                <InfoCard
                    src={C_Logo}
                    title="Github"
                    text="This is a test card talking about github"
                />

            </div>


        </div>
    );
};

export default AboutMe;