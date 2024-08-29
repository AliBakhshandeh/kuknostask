import { createBrowserRouter } from "react-router-dom";
import GuestRoutes from "./guestRoutes";
import MainRoutes from "./mainRoutes";
import PagesRoutes from "./pagesRoutes";

const router = createBrowserRouter([GuestRoutes, MainRoutes, PagesRoutes], {
  basename: import.meta.env.VITE_APP_BASE_NAME,
});
export default router;
