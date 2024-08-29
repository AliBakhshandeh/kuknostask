import { lazy } from "react";
// components
import Loadable from "../components/Loadable";
// guards
import AuthGuard from "../guards/authGuard";
// layouts
import PagesLayout from "../layouts/pagesLayout";
// pages
const Receive = Loadable(lazy(() => import("../pages/receive")));
const Send = Loadable(lazy(() => import("../pages/send")));

const PagesRoutes = {
  path: "/",
  element: (
    <AuthGuard>
      <PagesLayout />
    </AuthGuard>
  ),
  children: [
    {
      path: "/receive",
      element: <Receive />,
    },
    {
      path: "/send",
      element: <Send />,
    },
  ],
};
export default PagesRoutes;
