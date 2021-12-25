import { Link } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";

import { DashboardRoutes } from "../../routes";

const DashboardSidebarTab = ({ path, icon, name }) => {
    return (
        <Link to={path} className={path === window.location.pathname ? "dashboard__icon_button dashboard__icon_button_active" : "dashboard__icon_button"}>
            {icon}
            <h6 className="icon__text">{name}</h6>
        </Link>
    );
};

const DashboardSidebar = (props) => {
    return (
        <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12">
            <div className="cbox">
                <h4 className="contactbox-h4">Features</h4>
                <div class="contactbox">
                    {DashboardRoutes.map((tab) => DashboardSidebarTab(tab))}
                    <div className="dashboard__icon_button">
                        <IoLogOutOutline style={{ fontSize: 24 }} />
                        <h6 className="icon__text">Logout</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardSidebar;
