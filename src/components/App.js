import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import WOW from "wowjs";

import SearchArea from "./Shared/SearchArea";
import NavigationBar from "./Shared/NavigationBar";
import Footer from "./Shared/Footer";
import NotificationProvider from "./Shared/Notification/NotificationProvider";
import Cart from "./Shared/Cart";
import { AUTHENTICATION, DASHBOARD, LayoutRoutes } from "routes";
import AuthRoute from "./Routing/AuthRoute";
import RestrictRoute from "./Routing/RestrictRoute";

const LayoutsRoute = () => LayoutRoutes.map((route) => <Route path={route.path} exact={route.exact} render={() => <route.component />} />);

function App() {
    useEffect(() => {
        new WOW.WOW().init();
    }, []);

    const [search, setSearch] = useState(false);

    return (
        <BrowserRouter>
            <NotificationProvider>
                <NavigationBar />
                <SearchArea search={search} setSearch={setSearch} />
                <Cart />
                <Switch>
                    <AuthRoute path={DASHBOARD.path} exact={DASHBOARD.exact} component={DASHBOARD.component} />
                    <RestrictRoute path={AUTHENTICATION.path} exact={AUTHENTICATION.exact} component={AUTHENTICATION.component} />
                    {LayoutsRoute()}
                </Switch>
                <Footer />
            </NotificationProvider>
        </BrowserRouter>
    );
}

export default App;
