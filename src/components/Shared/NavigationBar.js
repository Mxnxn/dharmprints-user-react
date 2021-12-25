import React from "react";
import { Link } from "react-router-dom";
import { CONTACTROOT, DASHBOARD, DASHBOARDROOT, PRODUCTS, ROOT, SIGNIN } from "routes";
import { classManager, GlobalLogout } from "utils/CommonFunctions";

const DynamicButton = () =>
    window.localStorage.getItem("_t") ? (
        <Link
            onClick={() => {
                GlobalLogout();
                window.location.reload();
            }}
        >
            Logout
        </Link>
    ) : (
        <Link to={SIGNIN.path}>Login & register</Link>
    );

const NavigationBar = (props) => {
    return (
        <header class="header-area">
            <div class="gota_top bg-soft d-none d-sm-block">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div class="gota_lang">
                                <ul>
                                    {/* <li>
                                        <a href="#">
                                            usd<i class="fal fa-chevron-down"></i>
                                        </a>
                                        <ul class="additional_dropdown">
                                            <li>
                                                <a href="#">euro</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">
                                            english<i class="fal fa-chevron-down"></i>
                                        </a>
                                        <ul class="additional_dropdown">
                                            <li>
                                                <a href="#">frences</a>
                                            </li>
                                            <li>
                                                <a href="#">japanes</a>
                                            </li>
                                        </ul>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-4 offset-xl-5 col-lg-6 col-md-6 col-sm-6 text-end">
                            <div class="gota_right">
                                <ul>
                                    <li>
                                        <Link to={DASHBOARD.path}>Account</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Checkout</Link>
                                    </li>
                                    <li>{DynamicButton()}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="gota_bottom position-relative">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 d-none d-sm-block">
                            <div class="gota_search">
                                <form class="search_form">
                                    <button class="search_action">
                                        <i class="fal fa-search d-sm-none d-md-block"></i>
                                    </button>
                                    <input type="text" placeholder="search" />
                                </form>
                            </div>
                        </div>
                        <div class="col-xl-8 col-lg-8 col-md-4 col-sm-4">
                            <div class="sidemenu sidemenu-1 d-lg-none d-md-block">
                                <a class="open" href="#">
                                    <i class="fal fa-bars"></i>
                                </a>
                            </div>
                            <div class="main-menu">
                                <nav id="mobile-menu">
                                    <ul>
                                        <li>
                                            <Link to={ROOT}>Home</Link>
                                        </li>
                                        <li>
                                            <Link to={PRODUCTS.path}>Shop</Link>
                                        </li>

                                        <li>
                                            <img class="pl-50 pr-50" style={{ height: 70 }} src={require("../../assets/images/xx.png").default} alt="" />
                                        </li>
                                        <li>
                                            <Link to={DASHBOARDROOT}>Dashboard</Link>
                                        </li>
                                        <li>
                                            <Link to={CONTACTROOT}>Contact</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4">
                            <div
                                class="gota_cart gotat_cart_1 text-end"
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    classManager("cart__sidebar", "open-cart");
                                    classManager("cart-offcanvas-overlay", "open-cart-overlay");
                                }}
                            >
                                <span style={{ fontWeight: 600, fontSize: 18 }}>
                                    <i class="fal fa-shopping-cart " style={{ marginRight: 8 }} />
                                    Cart
                                    <span class="counter">{/**ITEM COUNT HERE */}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavigationBar;
