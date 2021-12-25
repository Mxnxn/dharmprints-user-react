import React from "react";

const Banner = (props) => {
    return (
        <div class="slider-active swiper-container height">
            <div class="swiper-wrapper">
                <div class="swiper-slide slider-item">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="slider_images">
                                    <img class="back" src={require("../../assets/img/slider/slider-img-1.png").default} alt="" />
                                    <img class="top" src={require("../../assets/img/slider/text.png").default} alt="" />
                                    {/* <img class="back" src={require("../../assets/img/LP_MAIN.png").default} alt="" />
                                    <img class="top" src={require("../../assets/img/slider/text.png").default} alt="" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide slider-item">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="slider_images">
                                    <img class="back" src={require("../../assets/img/slider/slider-img-1.png").default} alt="" />
                                    <img class="top" src={require("../../assets/img/slider/text.png").default} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide slider-item">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="slider_images">
                                    <img class="back" src={require("../../assets/img/slider/slider-img-1.png").default} alt="" />
                                    <img class="top" src={require("../../assets/img/slider/text.png").default} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    );
};

export default Banner;
