import { createBrowserRouter } from "react-router-dom";
import GuestRoutes from "./guestRoutes";
import MainRoutes from "./mainRoutes";

const router = createBrowserRouter([GuestRoutes, MainRoutes], {
  basename: import.meta.env.VITE_APP_BASE_NAME,
});
export default router;
