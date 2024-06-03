import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AvailableCamp from "../Pages/AvailableCamp/AvailableCamp";
import JoinUs from "../Pages/JoinUs/JoinUs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";

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
        element: <PrivateRoute>
          <AvailableCamp />
        </PrivateRoute>
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