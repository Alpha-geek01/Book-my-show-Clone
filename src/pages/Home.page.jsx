import React from "react";

// Components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

//config
import TempPosters from "../config/TempPoster.config";

const HomePage = () => {
    return (
        <>  
            <div className="container mx-auto px-24 my-8">
                <PosterSlider 
                    images={TempPosters} 
                    title="Recommended Movies"
                    isDark = {false}
                />
            </div>

            <div className="hidden md:flex px-28 my-28">
                    <img
                        src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/lead-in-v3-collection-202102040828.png"
                        alt="premiere"
                        className="w-full h-full"
                    />
            </div>

            <div className="flex flex-col gap-10">
                <div className="container mx-auto px-28">
                    <h1 className="text-3xl font-bold text-gray-800 my-3">The Best of Entertainment</h1>
                    <EntertainmentCardSlider />
                </div>

                <div className ="bg-bmsNav-800 px-20 py-4">
                    <div className="container mx-auto px-4 flex flex-col gap-3">
                        <div className="hidden md:flex px-6">
                                <img
                                    src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                                    alt="premiere"
                                    className="w-full h-full"
                                />
                        </div>
                        <PosterSlider 
                            images={TempPosters} 
                            title="Premieres" 
                            subtitle="Brand new releases every friday"
                            isDark
                        />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-24 my-8">
                <PosterSlider 
                    images={TempPosters} 
                    title="Online Streaming Events"
                    isDark = {false}
                />
            </div>

            <div className="container mx-auto px-24 my-8">
                <PosterSlider 
                    images={TempPosters} 
                    title="Outdoor Events"
                    isDark = {false}
                />
            </div>

            <div className="container mx-auto px-24 my-8">
                <PosterSlider 
                    images={TempPosters} 
                    title="Laughter Therapy"
                    isDark = {false}
                />
            </div>

            <div className="container mx-auto px-24 my-8">
                <PosterSlider 
                    images={TempPosters} 
                    title="Popular Events"
                    isDark = {false}
                />
            </div>
        </>
    );
};

export default HomePage;