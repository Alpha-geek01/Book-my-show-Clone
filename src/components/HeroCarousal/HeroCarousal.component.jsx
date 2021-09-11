import React from "react";
import HeroSlider from "react-slick";

/// Component
import { NextArrow, PrevArrow } from "./Arrows.component"; 

const HeroCarousal = () => {
    const settingsLG = { 
        arrows:true,
        autoplay:true,
        centerMode:true,
        centerPadding: "220px",
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,        
    };

    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const images = [
        "https://in.bmscdn.com/promotions/cms/creatives/1630432985528_incinemasthisfriday_shangchiandthelegendofthetenrings_webshowcase_1240x300.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1629887023798_rugbyworldcuplisting_webshowcasenew_1240x300.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1630995773558_moviethailavi_eng_incinemasnow_booknow_webshowcase_1240x300_7sep.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1631109603599_loveisintheair_webshowcase_1240x300.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1629829991978_celebfiecruisewiththestarsrevised_webshowcase_1240x300_24aug.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1631108812072_paradox_webshowcase_1240x300.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1630608713679_matrixfightnight6_webshowcase_1240x300.jpg",

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