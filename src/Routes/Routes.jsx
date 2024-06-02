import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AvailableCamp from "../Pages/AvailableCamp/AvailableCamp";
import JoinUs from "../Pages/JoinUs/JoinUs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path: '/availableCamp',
          element:<AvailableCamp/>
        },
        {
          path: '/joinUs',
          element:<JoinUs/>
        }
      ]
    },
  ]);

  export default router