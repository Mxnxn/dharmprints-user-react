import React from "react";
import { render } from "react-dom";
import App from "./components/App";

import "./assets/css/bootstrap.min.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/animate.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/fontawesome-all.min.css";
import "./assets/css/themify-icons.css";
import "./assets/css/futura-std-font.css";
import "./assets/css/meanmenu.css";
import "./assets/css/swiper-bundle.min.css";
import "./assets/css/slick.css";
import "./assets/css/responsive.css";

import "./assets/css/style.css";
import "./assets/css/custom.css";

render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
