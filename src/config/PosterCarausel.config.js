const settings = {
    Infinity: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    InitialScale: 0,
    responsive: [{
            breakpoints: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
            },
        },
        {
            breakpoints: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                InitialSlide: 1,
            },
        },
        {
            breakpoints: 400,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
    ],
};

export default settings;