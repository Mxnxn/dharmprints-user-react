const NewProduct = (props) => {
    return (
        <div class="new_product_area mb-80">
            <div class="container-fluid">
                <div class="row">
                    {[1, 2].map(() => (
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <div class="section-wrapper text-center mb-35">
                                        <h2 class="section-title">
                                            <a href="#">Explore Our New arrivals</a>
                                        </h2>
                                        <p>
                                            Commodo sociosqu venenatis cras dolor sagittis integer luctus sem primis
                                            <br /> eget maecenas sed urna malesuada.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="product-active2  col-sm-12 col-lg-4 ">
                                    <div class="swiper-wrapper">
                                        {[1, 2, 3].map(() => (
                                            <div class="product-item swiper-slide  wow fadeInLeft" data-wow-duration=".9s" data-wow-delay=".3s">
                                                <div class="product product-2">
                                                    <div class="product__thumb">
                                                        <a href="single.html">
                                                            <img
                                                                class="product-primary"
                                                                src={require("../../assets/img/product/6.jpg").default}
                                                                alt="product_image"
                                                            />
                                                            <img
                                                                class="product-secondary"
                                                                src={require("../../assets/img/product/6-2.jpg").default}
                                                                alt="product_image"
                                                            />
                                                        </a>
                                                        <div class="product__update">
                                                            <a class="#">new</a>
                                                        </div>
                                                        <div class="product-info mb-10">
                                                            <div class="product_category">
                                                                <span>Shoes, Clothing</span>
                                                            </div>
                                                            <div class="product_rating">
                                                                <a href="#">
                                                                    <i class="fal fa-star start-color"></i>
                                                                </a>
                                                                <a href="#">
                                                                    <i class="fal fa-star start-color"></i>
                                                                </a>
                                                                <a href="#">
                                                                    <i class="fal fa-star start-color"></i>
                                                                </a>
                                                                <a href="#">
                                                                    <i class="fal fa-star"></i>
                                                                </a>
                                                                <a href="#">
                                                                    <i class="fal fa-star"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div class="product__name">
                                                            <h4>
                                                                <a href="shop.html">Ladies Rose one Flower </a>
                                                            </h4>
                                                            <div class="pro-price">
                                                                <p class="p-absoulute pr-1">
                                                                    <span>$</span>180.00 -<span>$</span>280.00
                                                                </p>
                                                                <a class="p-absoulute pr-2" href="#">
                                                                    add to cart
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div class="product__action">
                                                            <div class="inner__action">
                                                                <div class="wishlist">
                                                                    <a href="#">
                                                                        <i class="fal fa-heart"></i>
                                                                    </a>
                                                                </div>
                                                                <div class="view">
                                                                    <a>
                                                                        <i class="fal fa-eye"></i>
                                                                    </a>
                                                                </div>
                                                                <div class="layer">
                                                                    <a href="#">
                                                                        <i class="fal fa-layer-group"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewProduct;
