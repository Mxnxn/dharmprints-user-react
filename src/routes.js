import Authentication from "components/Authentication";
import Register from "components/Authentication/Register";
import Signin from "components/Authentication/Signin";
import Contact from "components/Contact";
import Dashboard from "components/Dashboard";
import Profile from "components/Dashboard/Profile";
import Recharge from "components/Dashboard/Recharge";
import Table from "components/Dashboard/Table";
import Wallet from "components/Dashboard/Wallet";
import LandingPage from "components/LandingPage";
import Page404 from "components/Page404";
import AllProducts from "components/Product/AllProducts";
import CategorisedProducts from "components/Product/CategoriseProducts";
import SoloProduct from "components/Product/SoloProduct";
import { IoBagCheckOutline, IoPersonOutline, IoSync, IoWalletOutline } from "react-icons/io5";

export const ROOT = "/";
export const DASHBOARDROOT = "/dashboard";
export const AUTHROOT = "/user";
export const CONTACTROOT = "/contactus";

// use in everylayout
// remember it should be loaded with all other routes
export const ROOT404 = "*";
export const ROUTE404 = { name: "404 Unknow Route", component: Page404, exact: true, path: ROOT404 };

const getDashboardPath = (path) => DASHBOARDROOT + path;
const getAuthPath = (path) => AUTHROOT + path;
const getLandingPagePath = (path) => ROOT + path;

export const ACCOUNT = {
    name: "Account",
    component: Profile,
    exact: true,
    icon: <IoPersonOutline style={{ fontSize: 24 }} />,
    path: getDashboardPath("/accountsetting"),
};

export const WALLET = {
    name: "Wallet",
    component: Wallet,
    exact: true,
    icon: <IoWalletOutline style={{ fontSize: 24 }} />,
    path: getDashboardPath("/userwallet"),
};

export const RECHARGE = {
    name: "Recharge",
    component: Recharge,
    exact: true,
    icon: <IoSync style={{ fontSize: 24 }} />,
    path: getDashboardPath("/recharge"),
};

export const ORDERS = {
    name: "Orders",
    component: Table,
    exact: true,
    icon: <IoBagCheckOutline style={{ fontSize: 24 }} />,
    path: getDashboardPath("/orderhistory"),
};

export const DashboardRoutes = [ACCOUNT, WALLET, RECHARGE, ORDERS];

export const SIGNIN = {
    id: 1,
    surl: "/signin",
    component: Signin,
    exact: true,
    path: getAuthPath("/signin"),
};

export const REGISTER = {
    id: 2,
    surl: "/register/new",
    component: Register,
    exact: true,
    path: getAuthPath("/register/new"),
};

export const AuthRoutes = [SIGNIN, REGISTER, ROUTE404];

export const ALLPATHS = [...DashboardRoutes.map((el) => el.path), ...AuthRoutes.map((el) => el.path), ROUTE404, DASHBOARDROOT, AUTHROOT, CONTACTROOT];

export const DASHBOARD = {
    name: "Dashboard",
    component: Dashboard,
    exact: false,
    path: DASHBOARDROOT,
};

export const AUTHENTICATION = {
    name: "Authentication",
    component: Authentication,
    exact: false,
    path: AUTHROOT,
};

export const LANDINGPAGE = {
    name: "Landing Page",
    component: LandingPage,
    exact: true,
    path: ROOT,
};

export const PRODUCTS = {
    name: "Product Detail",
    component: AllProducts,
    exact: true,
    path: getLandingPagePath("products"),
};

export const CATEGORISEDPRODUCT = {
    name: "Product Detail",
    component: CategorisedProducts,
    exact: true,
    dynamicPath: getLandingPagePath("category"),
    path: getLandingPagePath("category/:id"),
};

export const PRODUCTDETAIL = {
    name: "Product Detail",
    component: SoloProduct,
    exact: true,
    dynamicPath: getLandingPagePath("product"),
    path: getLandingPagePath("product/:id"),
};

export const CONTACT = {
    name: "Contact Us",
    component: Contact,
    exact: true,
    path: CONTACTROOT,
};

// OPEN ROUTES
export const LayoutRoutes = [LANDINGPAGE, PRODUCTS, CATEGORISEDPRODUCT, PRODUCTDETAIL, CONTACT, ROUTE404];
