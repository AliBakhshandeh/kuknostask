import AuthGuard from "../guards/authGuard";
import MainLayout from "../layouts/mainLayout";
import Dashboard from "../pages/dashboard";

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
