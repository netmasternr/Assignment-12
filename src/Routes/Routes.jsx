import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AvailableCamp from "../Pages/AvailableCamp/AvailableCamp";
import JoinUs from "../Pages/JoinUs/JoinUs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import DashboardLayout from "../Components/DashBoard/Dashboard/DashboardLayout";
import Organizer from "../Components/DashBoard/Organizer Routes/OrganizerProfile/Profile";
import AddCamp from "../Components/DashBoard/Organizer Routes/AddCamp/AddCamp";
import ManageCamp from "../Components/DashBoard/Organizer Routes/ManageCamp/ManageCamp";
import ManageRegisteredCamp from "../Components/DashBoard/Organizer Routes/ManageRegisteredCamp/ManageRegisteredCamp";
import PerticipantProfile from "../Components/DashBoard/Perticipant Routes/PerticipantProfile/PerticipantProfile";
import Analytics from "../Components/DashBoard/Perticipant Routes/Analytics/Analytics";
import RegisteredCamps from "../Components/DashBoard/Perticipant Routes/RegisterdCamps/RegisterdCamps";
import PaymentHistory from "../Components/DashBoard/Perticipant Routes/PaymentHistory/PaymentHistory";
import CardDetails from "../Pages/Home/Card/CardDetails/CardDetails";
import Profile from "../Components/DashBoard/Organizer Routes/OrganizerProfile/Profile";
import AdminRoute from "../Components/PrivateRoute/AdminRoute/AdminRoute";
import UpdateCamp from "../Components/DashBoard/Organizer Routes/UpdateCamp/UpdateCamp";


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
        path: '/Details/:id',
        element: <PrivateRoute>
          <CardDetails />
        </PrivateRoute>

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
        path: 'Profile',
        element: <Profile />
      },
      {
        path: 'addCamp',
        element: <AdminRoute>
          <AddCamp />
        </AdminRoute>
      },
      {
        path: 'manageCamp',
        element: <AdminRoute>
          <ManageCamp />
        </AdminRoute>
      },
      {
        path: 'ManageRegisteredCamp',
        element: <AdminRoute>
          <ManageRegisteredCamp />
        </AdminRoute>
      },
      {
        path: 'updateCamp/:id',
        element: <AdminRoute>
          <UpdateCamp />
        </AdminRoute>,
        loader: ({params})=> fetch(`https://assignment12-server-lilac-six.vercel.app/addCamp/update/${params.id}`, {
          headers:{ 'Authorization': 'Bearer '+  localStorage.getItem('access-token') }
        })  
      },

      // perticipant
      {
        path: 'Profile',
        element: <Profile />
      },
      {
        path: 'analytics',
        element: <Analytics />
      },
      {
        path: 'RegisteredCamps',
        element: <RegisteredCamps />
      },
      {
        path: 'PaymentHistory',
        element: <PaymentHistory />
      },
    ]
  }

]);

export default router