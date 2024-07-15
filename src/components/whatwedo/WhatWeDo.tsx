import React from 'react'
import Carousel from 'react-multi-carousel';
import { ArrowIcon, CarouselBtn1, CarouselBtn2, DevelopmentIcon, HeroImage, SliderImage1, SliderImage2, SliderImage3 } from '../../assets';
import 'react-multi-carousel/lib/styles.css';

import "./whatwedo.css";
import useDeviceType from '../../customHooks/useDevicetype';

const WhatWeDo = () => {
    const deviceType = useDeviceType();
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1124 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1124, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
        const { carouselState: { currentSlide } } = rest;
        return (
            <div className="carousel-button-group"
                style={{ position: "absolute", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 6, bottom: 70, left: 80 }}
            >
                {[SliderImage1, SliderImage2, HeroImage, SliderImage3].map((_, index) => {
                    return (
                        <div key={index} onClick={() => goToSlide(index)}
                            style={{ cursor: 'pointer' }}
                        >
                            {currentSlide === index ? <img src={CarouselBtn1} width={30} height={30} alt="btn-1" /> :
                                <img src={CarouselBtn2} width={8} height={8} alt="btn-2" />}
                        </div>
                    );
                })}
            </div>
        );
    };

    const handleOpenNewTab = () => {
        window.open("https://www.fylehq.com/", "_blank")
    }

    return (
        <div className='what-we-do-container padding' style={{ position: "relative" }}>
            <div className='what-we-do-header section-header'>
                What We do
            </div>
            <div className='what-we-do-sub-header-content' style={{ padding: 20 }}>
                <div className='section-sub-header'>
                    Services provide <br /> for you
                </div>
                <div className='section-sub-header-1'>
                    Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque <br />
                    vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus <br />
                    feugiat et fermentum.
                </div>
            </div>
            <div className='what-we-do-carousel-container' >
                <Carousel
                    swipeable={true}
                    draggable={false}
                    showDots={false}
                    arrows={false}
                    renderButtonGroupOutside
                    customButtonGroup={< ButtonGroup />}
                    responsive={responsive}
                    ssr={false} // means to render carousel on server-side.
                    infinite={false}
                    // autoPlay={deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    deviceType={deviceType}
                    itemClass="carousel-item-padding-20-px"
                >
                    {[SliderImage1, SliderImage2, HeroImage, SliderImage3].map((each, idx) => {
                        return (
                            <div className='what-we-do-carousel-items' key={idx}>
                                <img src={each} alt='what-we-do-carousel-item' width={370} height={500} />
                                <div className='item-overlay'>
                                    <img src={DevelopmentIcon} width={57} height={57} alt="development-icon" />
                                    <div className='overlay-header'>WEB DEVELOPMENT</div>
                                    <div className='overlay-sub-header'>
                                        Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque
                                    </div>
                                    <div className='overlay-btn' onClick={handleOpenNewTab}>
                                        <span className='btn-header'>Read More</span>
                                        <span>
                                            <img src={ArrowIcon} alt="arrow-icon" width={37} height={10} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        </div>
    )
}

export default WhatWeDo