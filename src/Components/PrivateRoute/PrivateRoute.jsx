/* eslint-disable react/prop-types */
import { Spinner } from "flowbite-react";
import UseAuth from "../Hooks/useAuth/useAuth";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({Children}) => {
    const {user, loading} = UseAuth();

    if(loading){
        return   <div className="flex flex-wrap gap-2">
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

    if(user){
        return Children;
    }

    return <Navigate to='/joinUs'/>
};

export default PrivateRoute;