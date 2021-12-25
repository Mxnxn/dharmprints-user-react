import { Link } from "react-router-dom";

const Page404 = (props) => {
    return ( <div class=" error-page" >
    <div class="container">
        <div class="row">
            <div class="col xl-12 col-lg-12 col-md-12">
                <div class="contact__inner_2 error_inner text-center">
                    <h2 class="mb-40">404</h2>
                    <h3 class="mb-30">Page Not Found</h3>
                    <p class="mb-40">Sorry for the inconvenience. Go to our homepage or check out our latest collections for Fashion, Chair, Decoration...</p>
                    <Link to="/">back to homepage</Link>
                </div>
            </div>
        </div>
    </div>
</div> );
}
 
export default Page404;