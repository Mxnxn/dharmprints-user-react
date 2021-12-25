import DashboardSidebar from "components/Dashboard/DashboardSidebar";
import { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router";
import { ACCOUNT, DASHBOARDROOT, DashboardRoutes, ROOT404 } from "routes";
import anime from "animejs";
import Loader from "./Shared/Loader";
import { GetUserWallet } from "Api/User";
import useCustomSnackbar from "./Shared/Notification/CustomSnackbar";
import { GlobalLogout } from "utils/CommonFunctions";

const Dashboard = (props) => {
    window.scrollTo(0, 200);
    useEffect(() => {
        let animeVar = anime.timeline({
            easing: "easeOutSine",
        });
        animeVar
            .add({
                targets: ".dashboard-h2-wrapper h2",
                translateY: [60, 0],
                opacity: [0, 1],
                duration: 500,
            })
            .add({
                targets: ".dashboard-p-wrapper p",
                opacity: [0, 1],
                translateY: [50, 0],
                duration: 500,
            })
            .add({
                targets: ".contact-wrapper",
                translateY: [100, 0],
                opacity: [0, 1],
                duration: 400,
            });
    }, []);

    const mSnackbar = useCustomSnackbar();

    const [state, setState] = useState({
        dataFetch: false,
        user: {},
        wallet: {},
    });

    useEffect(() => {
        const fetch = async () => {
            const response = await GetUserWallet();
            if (response.code === 401) {
                GlobalLogout();
                mSnackbar({ variant: "danger", head: "Oops", message: "Your session has expired! please signin again." });
                return setTimeout(() => window.location.reload(), 1500);
            }
            if (response.code !== 200) return mSnackbar({ variant: "danger", head: "Sorry", message: "Error getting your data." });
            const user = {
                _id: response.message._id,
                city: response.message.city,
                companyName: response.message.companyName,
                email: response.message.email,
                name: response.message.name,
                phone: response.message.phone,
                pincode: response.message.pincode,
                state: response.message.state,
                street: response.message.street,
            };
            setState({ dataFetch: true, user: user, wallet: response.message.wallet });
            return mSnackbar({ variant: true, head: "Welcome", message: "Now, You can access your Dashboard." });
        };
        fetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div class="contact__area">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12">
                            <div class="contact__content text-center mb-80">
                                <div className="dashboard-h2-wrapper" style={{ height: 92, overflow: "hidden" }}>
                                    <h2 onClick={() => mSnackbar({ variant: true, head: "Welcome", message: "Now, You can access your dashboard." })}>
                                        Dashboard
                                    </h2>
                                </div>
                                <div className="dashboard-p-wrapper" style={{ height: 52, overflow: "hidden" }}>
                                    <p>
                                        Advance dashboard for managing profile, account information, addresses, adding balance to wallet <br /> information on
                                        order history and status and many more.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="contact-wrapper">
                        <div class="row">
                            <DashboardSidebar />
                            <div class="col-xl-10 col-lg-10 col-md-12 col-md-6">
                                {state.dataFetch ? (
                                    <>
                                        <Route path={DASHBOARDROOT} exact render={() => <Redirect to={ACCOUNT.path} />} />
                                        <Switch>
                                            {[
                                                ...DashboardRoutes.map((route) => (
                                                    <Route
                                                        path={route.path}
                                                        exact={route.exact}
                                                        render={() => <route.component state={state} setState={setState} />}
                                                    />
                                                )),
                                                <Route path={ROOT404} exact render={() => <Redirect to={ACCOUNT.path} />} />,
                                            ]}
                                        </Switch>
                                    </>
                                ) : (
                                    <div class="form">
                                        <div className="d-flex justify-content-center">
                                            <Loader />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="map__area">
                <div class="google-map contact-map">
                    <iframe
                        class="w-100"
                        title="map"
                        height="800"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14764.504393688501!2d73.1974457!3d22.3110703!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x68f1e59ee76d48f!2sManan%20graphics!5e0!3m2!1sen!2sin!4v1638599444601!5m2!1sen!2sin"
                    />
                </div>
            </div>
        </>
    );
};

export default Dashboard;
