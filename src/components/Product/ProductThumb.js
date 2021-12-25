const ProductThumb = (props) => {
    return (
        <div class="product product-4">
            <div class="product__thumb">
                <a href="single.html">
                    <img class="product-primary" src={require("../../assets/img/product/17.jpg").default} alt="product_image" />
                    <img class="product-secondary" src={require("../../assets/img/product/17-2.jpg").default} alt="product_image" />
                </a>
                <div class="product__update">
                    <a class="#">new</a>
                </div>
                <div class="product-info mb-10">
                    <div class="product_category">
                        <span>Shoes, Clothing</span>
                    </div>
                </div>
                <div class="product__name">
                    <h4>
                        <a href="single.html">ndoor Shoes Home Slipper</a>
                    </h4>
                    <div class="pro-price">
                        <p class="p-absoulute pr-1">
                            <span>$</span>680.00 - <span>$</span>680.00
                        </p>
                        <a class="p-absoulute pr-2" href="#">
                            add to cart
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductThumb;
