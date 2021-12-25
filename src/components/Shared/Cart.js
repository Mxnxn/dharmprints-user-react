import React from "react";
import { Link } from "react-router-dom";
import { classManager } from "utils/CommonFunctions";

const Cart = (props) => {
    return (
        <>
            <div id="cart__sidebar" class="cart__sidebar">
                <div class="container">
                    <div class="cart__content d-flex flex-column align-items-center justify-content-center">
                        <button
                            class="btn btn-sm btn-danger"
                            onClick={() => {
                                classManager("cart__sidebar", "open-cart");
                                classManager("cart-offcanvas-overlay", "open-cart-overlay");
                            }}
                        >
                            <i class="fal fa-times" style={{ fontSize: 14 }}></i>
                        </button>
                        <p style={{ marginTop: 24 }}>Please Sign In for continue or Register if new</p>
                        <Link class="btn btn-info text-white">Sign In / Register</Link>
                    </div>
                </div>
            </div>
            {/* add open-cart to open */}
            <div id="cart__sidebar" class="cart__sidebar">
                <div class="container">
                    <div class="cart__content">
                        <div class="cart-text">
                            <h3 class="mb-40">Shopping cart</h3>
                            <div class="add_cart_product">
                                <div class="add_cart_product__thumb">
                                    <img src={require("../../assets/img/product/29-3.jpg").default} alt="" />
                                </div>
                                <div class="add_cart_product__content">
                                    <h5>
                                        <a href="shop.html">Running 3-Stripes</a>
                                    </h5>
                                    <p>1 × $66.00</p>
                                    <button class="cart_close">
                                        <i class="fal fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="add_cart_product">
                                <div class="add_cart_product__thumb">
                                    <img src={require("../../assets/img/product/17.jpg").default} alt="" />
                                </div>
                                <div class="add_cart_product__content">
                                    <h5>
                                        <a href="shop.html">Buddy non Stripes</a>
                                    </h5>
                                    <p>1 × $40.00</p>
                                    <button class="cart_close">
                                        <i class="fal fa-times"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div
                            class="cart-icon"
                            onClick={() => {
                                classManager("cart__sidebar", "open-cart");
                                classManager("cart-offcanvas-overlay", "open-cart-overlay");
                            }}
                        >
                            <i class="fal fa-times"></i>
                        </div>
                        <div class="cart-bottom">
                            <div class="cart-bottom__text">
                                <span>Subtotal:</span>
                                <span class="end">$121.00</span>
                                <a href="cart.html">view cart</a>
                                <a href="checkout.html">checkout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="cart-offcanvas-overlay" class="cart-offcanvas-overlay"></div>
        </>
    );
};

export default Cart;
