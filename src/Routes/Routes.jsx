import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AvailableCamp from "../Pages/AvailableCamp/AvailableCamp";
import JoinUs from "../Pages/JoinUs/JoinUs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import DashboardLayout from "../Components/DashBoard/Dashboard/DashboardLayout";
import Organizer from "../Components/DashBoard/Organizer Routes/OrganizerProfile/Organizer";
import AddCamp from "../Components/DashBoard/Organizer Routes/AddCamp/AddCamp";
import ManageCamp from "../Components/DashBoard/Organizer Routes/ManageCamp/ManageCamp";
import ManageRegisteredCamp from "../Components/DashBoard/Organizer Routes/ManageRegisteredCamp/ManageRegisteredCamp";
import PerticipantProfile from "../Components/DashBoard/Perticipant Routes/PerticipantProfile/PerticipantProfile";
import Analytics from "../Components/DashBoard/Perticipant Routes/Analytics/Analytics";
import RegisteredCamps from "../Components/DashBoard/Perticipant Routes/RegisterdCamps/RegisterdCamps";
import PaymentHistory from "../Components/DashBoard/Perticipant Routes/PaymentHistory/PaymentHistory";


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

    ],
  },

  {
    path: '/joinUs',
    element: <JoinUs />
  },
  {
    path: '/signUp',
    element: <SignUp />
  },

  // dashboard
  {
    path: '/dashboard',
    element: <PrivateRoute>
      <DashboardLayout />
    </PrivateRoute>,
    children: [
      // organizer
      {
        path: 'OrganizerProfile',
        element: <Organizer />
      },
      {
        path: 'addCamp',
        element: <AddCamp />
      },
      {
        path: 'manageCamp',
        element: <ManageCamp />
      },
      {
        path: 'ManageRegisteredCamp',
        element: <ManageRegisteredCamp />
      },

      // perticipant
     {
      path:'perticipantProfile',
      element:<PerticipantProfile/>
     },
     {
      path:'analytics',
      element:<Analytics/>
     },
     {
      path:'RegisteredCamps',
      element:<RegisteredCamps/>
     },
     {
      path:'PaymentHistory',
      element:<PaymentHistory/>
     },
    ]
  }

]);

export default router