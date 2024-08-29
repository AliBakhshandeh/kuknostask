import { lazy } from "react";
// components
import Loadable from "../components/Loadable";
// guards
import AuthGuard from "../guards/authGuard";
// layouts
import MainLayout from "../layouts/mainLayout";
// pages
const Dashboard = Loadable(lazy(() => import("../pages/dashboard")));

const MainRoutes = {
  path: "/",
  element: (
    <AuthGuard>
      <MainLayout />
    </AuthGuard>
  ),
  children: [
    { path: "/", element: <Dashboard /> },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "*",
      element: <h1>Not Found</h1>,
    },
  ],
};
export default MainRoutes;
