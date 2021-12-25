import React from "react";

const FeatureSection = (props) => {
    return (
        <div class="features-area d-none d-md-block fix">
            <div class="row g-0">
                <Feature1 />
                <Feature2 />
                <Feature3 />
            </div>
        </div>
    );
};

const Feature1 = () => {
    return (
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div class="fetures">
                <div class="fetures__thumb fix">
                    <a href="shop.html">
                        <img src={require("../../assets/img/features/fe1.png").default} alt="features1" />
                    </a>
                </div>
                <div class="fetures__content">
                    <h4 class="feature-title mb-40">
                        Sport
                        <br /> Baseball
                    </h4>
                    <p class="d-md-none d-lg-block">
                        all products{" "}
                        <span class="discount">
                            <a href="#">up to 70% off</a>
                        </span>{" "}
                        limited time discount
                    </p>
                </div>
            </div>
        </div>
    );
};

const Feature2 = (props) => {
    return (
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div class="fetures">
                <div class="fetures__thumb fix">
                    <a href="shop.html">
                        <img src={require("../../assets/img/features/banner-home2.jpg").default} alt="features1" />
                    </a>
                </div>
                <div class="fetures__content pt-200">
                    <p class="d-md-none d-lg-block">Gota store with a tool that makes design simple for everyone</p>
                </div>
            </div>
        </div>
    );
};

const Feature3 = (props) => {
    return (
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div class="fetures">
                <div class="fetures__thumb fix">
                    <a href="shop.html">
                        <img src={require("../../assets/img/features/fe3.png").default} alt="features1" />
                    </a>
                </div>
                <div class="fetures__content">
                    <h4 class="feature-title mb-40">
                        Jacket
                        <br />
                        For women’s
                    </h4>
                    <p class="d-md-none d-lg-block">
                        all products{" "}
                        <span class="discount">
                            <a href="#">up to 70% off</a>
                        </span>{" "}
                        limited time discount
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;
