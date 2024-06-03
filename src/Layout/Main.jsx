import { Outlet } from "react-router-dom";
import Nav from "../Shared/Navbar/Nav";
import Foot from "../Shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Nav />
            <div className="flex-grow min-h-[calc(100vh-200px)]">
                <Outlet ></Outlet>
            </div>
            <Foot />
        </div>
    );
};

export default Main;