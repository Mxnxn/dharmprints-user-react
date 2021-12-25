import ProductThumb from "./ProductThumb";
import ShopSidebar from "./ShopSidebar";

const { default: ProductShopBanner } = require("./ProductShopBanner");

const AllProducts = (props) => {
    return (
        <>
            <ProductShopBanner />

            <div class="shop-page pt-85">
                <div class="container">
                    <div class="row">
                        <ShopSidebar />
                        <div class="col-xl-9 col-lg-8 col-md-9 col-sm-12">
                            <div class="shop-top-bar position-relative">
                                <div class="showing-result">
                                    <p> Showing all 21 results</p>
                                </div>
                            </div>
                            <div class="shop-page-product pt-50 pb-100">
                                <div class="row">
                                    <div class="col-xl-12 col-lg-12 col-md-12">
                                        <div class="tab-content" id="nav-tabContent">
                                            <div class="tab-pane fade  show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                                <div class="row">
                                                    <div class="col-xl-4">
                                                        <ProductThumb />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllProducts;
