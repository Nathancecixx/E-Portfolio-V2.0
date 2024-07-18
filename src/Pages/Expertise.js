
import React from 'react'
import InfoCard from "../Components/InfoCard/InfoCard";
import C_Logo from "../Resources/Icons/C_Logo.png";

const Expertise = () => {
    return (
        <div className="expertise-section">

            <h1>My Expertise</h1>

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

export default Expertise;