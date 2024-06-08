import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { Helmet } from "react-helmet-async";

const DashboardLayout = () => {
    return (
        <div className="relative min-h-screen md:flex">
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <div>
                <Sidebar />
            </div>

            <div className="flex-1 w-full  md:ml-64">
                <div className="p-5">
                    <Outlet />
                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;