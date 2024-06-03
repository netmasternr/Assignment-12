import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AvailableCamp from "../Pages/AvailableCamp/AvailableCamp";
import JoinUs from "../Pages/JoinUs/JoinUs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/availableCamp',
        element: <AvailableCamp />
      },
      {
        path: '/joinUs',
        element: <JoinUs />
      },
      {
        path: '/signUp',
        element: <SignUp />
      }
    ]
  },
]);

export default router