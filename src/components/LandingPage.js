import Banner from "./LandingPage/Banner";
import FeatureSection from "./LandingPage/FeatureSection";
import LandingPageProducts from "./LandingPage/LandingPageProducts";
import NewProduct from "./LandingPage/NewProduct";
import FeaturedProduct from "./LandingPage/FeaturedProduct";

const LandingPage = (props) => {
    return (
        <>
            <Banner />
            <FeatureSection />
            <LandingPageProducts />
            <FeaturedProduct />
            <NewProduct />
        </>
    );
};

export default LandingPage;
