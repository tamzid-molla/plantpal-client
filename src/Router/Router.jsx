import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import AddPlants from "../Pages/AddPlants";
import MyPlants from "../Pages/MyPlants";
import AllPlants from "../Pages/AllPlants";
import ViewDetails from "../Pages/ViewDetails";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Update from "../Pages/Update";
import ErrorPage from "../Pages/ErrorPage";
import DashBoardLayout from "../DashboardLayout/DashBoardLayout";
import DashBoardMain from "../Components/DashBoardComponents/DashBoardMain";
import Profile from "../Components/DashBoardComponents/Profile";
import Settings from "../Components/DashBoardComponents/DashboardCards/Settings";
import ReminderPlants from "../Components/DashBoardComponents/DashboardCards/ReminderPlants";
import HealthOverview from "../Components/DashBoardComponents/DashboardCards/HealthOverview";
import About from "../Components/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/allPlants",
        Component: AllPlants,
      },
      {
        path: "/addPlants",
        element: (
          <PrivateRoute>
            <AddPlants></AddPlants>
          </PrivateRoute>
        ),
      },
      {
        path: "/myPlants",
        element: (
          <PrivateRoute>
            <MyPlants></MyPlants>
          </PrivateRoute>
        ),
      },
      {
        path: "/plants/:id",
        loader: ({ params }) =>
          fetch(
            `${import.meta.env.VITE_baseURL}/plants/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(
            `${import.meta.env.VITE_baseURL}/plants/${params.id}`
          ),
        Component: Update,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
  {
     
        path: '/dashboard',
        element: <PrivateRoute>
          <DashBoardLayout></DashBoardLayout>
        </PrivateRoute>,
    children: [
      {
        index: true,
        Component: DashBoardMain
      },
      {
        path: "/dashboard/addPlants",
        element: (
          <PrivateRoute>
            <AddPlants></AddPlants>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/myPlants",
        element: (
          <PrivateRoute>
            <MyPlants></MyPlants>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/profile',
        Component: Profile
      },
      {
        path: '/dashboard/settings',
        Component: Settings
      },
      {
        path: '/dashboard/reminder',
        Component: ReminderPlants
      },
      {
        path: '/dashboard/health',
        Component: HealthOverview
      },
    ]
  }
]);
