import React from "react";
import HeroSlider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {
    const settingsLG = { 
        arrows:true,
        autoplay:true,
        centerMode:true,
        centerPadding: "390px",
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
    };

    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const images = [
        "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1631084948908-1b921a1a59cc?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1631110744806-5dea4afe7685?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5MXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMTR8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    ];

    return (
        <>
            <div className="lg:hidden" >
                <HeroSlider {...settings} >
                    {images.map((image) => (
                        <div className="w-full h-56 md:h-80 py-3">
                            <img 
                                src={image} 
                                alt=" testing" 
                                className="w-full h-full" 
                            />
                        </div>
                    ))}
                </HeroSlider>
            </div>
            <div className="hidden lg:block">
                <HeroSlider {...settingsLG} >
                    {images.map((image) => (
                        <div className="w-full h-96 px-2 py-3">
                            <img 
                                src={image} 
                                alt=" testing" 
                                className="w-full h-full rounded-md" 
                            />
                        </div>
                    ))}
                </HeroSlider>
            </div>
        </>
    );
};

export default HeroCarousal;