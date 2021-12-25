import anime from "animejs";
import { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router";
import { AUTHROOT, AuthRoutes, SIGNIN } from "routes";

const Routes = () => AuthRoutes.map((route) => <Route path={route.path} exact={route.exact} render={() => <route.component />} />);

const Authentication = (props) => {
    useEffect(() => {
        var animeStart = anime.timeline({
            easing: "easeInOutQuad",
        });
        animeStart.add({
            targets: ".page-layout",
            scale: [1, 1.03],
            delay: 100,
            duration: 800,
        });
        anime({
            targets: ".page-title-h2",
            translateY: [200, 0],
            duration: 800,
            easing: "linear",
        });
        anime({
            targets: ".breadcrum-anim",
            translateY: [200, 0],
            opacity: [0, 1],
            duration: 1200,
            easing: "easeInOutQuad",
        });
        animeStart.add({
            targets: ".animeFadeInLeft",
            translateX: [-200, 0],
            opacity: [0, 1],
            duration: 400,
            easing: "easeInOutQuad",
        });
    }, []);
    return (
        <>
            <div className="page-layout-wrapper" style={{ overflow: "hidden" }}>
                <div class="page-layout about">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div class="breadcrumb-area text-center">
                                    <div className="page-title " style={{ overflow: "hidden", height: 72 }}>
                                        <h2 className="page-title page-title-h2">Welcome</h2>
                                    </div>
                                    <div class="breadcrumb-menu" style={{ height: 24, overflow: "hidden" }}>
                                        <nav aria-label="breadcrumb ">
                                            <ol class="breadcrumb justify-content-center breadcrum-anim">
                                                <li class="breadcrumb-item">
                                                    <a href="index.html">Home</a>
                                                </li>
                                                <li class="breadcrumb-item">
                                                    <a href="login.html">My Account</a>
                                                </li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="login_register_area">
                <div class="container">
                    <div class="row gx-5">
                        <Route path={AUTHROOT} exact render={() => <Redirect to={SIGNIN.path} />} />
                        <Switch>{Routes()}</Switch>
                        {/* <div class="col-xl-5 col-lg-6 col-md-12 col-sm-12"></div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Authentication;
