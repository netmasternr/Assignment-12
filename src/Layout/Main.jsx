import { Outlet } from "react-router-dom";
import Nav from "../Shared/Navbar/Nav";
import Foot from "../Shared/Footer/Footer";

const Main = () => {
    return (
        <div>
          <Nav/>
            <Outlet></Outlet>
            <Foot/>
        </div>
    );
};

export default Main;