import { GetCategories } from "Api/Category";
import { GetProducts } from "Api/Product";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { ROOT } from "routes";

const LandingPageProducts = (props) => {
    const [state, setState] = useState({
        categories: [],
        products: [],
        ogProducts: [],
        fetchData: false,
        query: "all",
    });

    useEffect(() => {
        (async () => {
            const response = await GetCategories();
            const resp = await GetProducts();
            if (response.code === 200 && resp.code === 200)
                setState({ fetchData: true, products: resp.message, ogProducts: resp.message, categories: response.message, query: response.message[0]?._id });
        })();
    }, []);

    return (
        <div className="categories_area pt-85 mb-150">
            <div className="container-fluid">
                <Heading />
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="categories__tab">
                            <ul className="nav nav-tabs  justify-content-center mb-55">
                                <li className={"nav-item "}>
                                    <button
                                        className={"all" === state.query ? "nav-link active" : "nav-link"}
                                        onClick={() => {
                                            setState((state) => ({ ...state, query: "all", products: state.ogProducts }));
                                        }}
                                    >
                                        All
                                    </button>
                                </li>
                                <Tabs categories={state.categories} products={state.ogProducts} query={state.query} setState={setState} />
                            </ul>

                            <div className="tab-content">
                                <TabBody products={state.products} query={state.query} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Heading = (props) => {
    return (
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="section-wrapper text-center mb-35">
                <h2 className="section-title">Explore Our Bestsellers</h2>
                <p>We offer you, these Product with best quality for best rate. And Looking forward to have business with you</p>
            </div>
        </div>
    );
};

const contains = (categories, query) => {
    return categories.filter((el) => el._id === query).length > 0 ? true : false;
};

const Tabs = ({ categories, query, setState, products }) => {
    return categories.map((cat, idx) => (
        <li key={idx} className={"nav-item "}>
            <button
                className={cat._id === query ? "nav-link active" : "nav-link"}
                onClick={() => {
                    const filtered = products.filter((el) => contains(el.category, cat._id));
                    setState((state) => ({ ...state, query: cat._id, products: filtered }));
                }}
            >
                {cat.name}
            </button>
        </li>
    ));
};

const TabBody = ({ products }) => {
    return (
        <div className="tab-pane fade show active" id="home">
            <div className="container">
                <div className="row">
                    {products.map((prdct, idx) => (
                        <div key={idx} className="product-item wow fadeInUp col-sm-12 col-lg-3" data-wow-duration="1s" data-wow-delay="0.2s">
                            <div className="product">
                                <div className="product__thumb">
                                    <Link to={`product/${prdct._id}`}>
                                        {/* <img className="product-primary" src={require("../../assets/img/product/9.jpg").default} alt="product_image" />
                                        <img className="product-secondary" src={require("../../assets/img/product/9-2.jpg").default} alt="product_image" /> */}
                                        <img className="product-primary" src={`${process.env.REACT_APP_API_URL}/${prdct.images[0].url}`} alt="product_image" />
                                        {prdct.images.length > 1 && (
                                            <img
                                                className="product-secondary"
                                                src={`${process.env.REACT_APP_API_URL}/${prdct.images[1].url}`}
                                                alt="product_image"
                                            />
                                        )}
                                    </Link>
                                    <div className="product__update">
                                        <a className="#">new</a>
                                    </div>
                                    <div className="product-info mb-10">
                                        <div className="product_category">
                                            <span>{prdct.category.map((cat, idx) => (idx === 0 ? `${cat.name}` : `, ${cat.name}`))}</span>
                                        </div>
                                        {/* <div className="product_rating">
                                            <a href="#">
                                                <i className="fal fa-star start-color"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fal fa-star start-color"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fal fa-star start-color"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fal fa-star"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fal fa-star"></i>
                                            </a>
                                        </div> */}
                                    </div>
                                    <div className="product__name">
                                        <h4>
                                            <a href="shop.html">{prdct.name}</a>
                                        </h4>
                                        <div className="pro-price">
                                            <p className="p-absoulute pr-1">
                                                <span>₹</span> {prdct.price}
                                            </p>
                                            <Link className="p-absoulute pr-2" to={`product/${prdct._id}`}>
                                                Detail
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                </div>
            </div>
        </div>
    );
};

export default LandingPageProducts;
