import React from "react";

// Components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import Premiere from "../components/Premiere/premiere.components";

const HomePage = () => {
    return (
        <>
            <div className="container mx-auto px-28">
                <h1 className="text-3xl font-bold text-gray-800 my-3">The Best of Entertainment</h1>
                <EntertainmentCardSlider />
                <Premiere />
            </div>
        </>
    );
};

export default HomePage;