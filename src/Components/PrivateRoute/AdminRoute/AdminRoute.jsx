/* eslint-disable react/prop-types */
import { Spinner } from "flowbite-react";
import UseOrganizer from "../../Hooks/UseOrganizer/UseOrganizer";
import UseAuth from "../../Hooks/useAuth/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {

    const { user, loading } = UseAuth();
    const [isOrganizer, isOrganizerLoading] = UseOrganizer();
    const location = useLocation();


    if (loading || isOrganizerLoading) {
        return <div className="flex flex-wrap gap-2">
            <div className="text-left">
                <Spinner aria-label="Left-aligned spinner example" />
            </div>
            <div className="text-center">
                <Spinner aria-label="Center-aligned spinner example" />
            </div>
            <div className="text-right">
                <Spinner aria-label="Right-aligned spinner example" />
            </div>
        </div>
    }

    if (user && isOrganizer) {
        return children;
    }

    return <Navigate to='/joinUs' state={{ from: location }} replace />

};

export default AdminRoute;