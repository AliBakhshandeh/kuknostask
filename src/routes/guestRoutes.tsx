// guards
import { lazy } from "react";
import Loadable from "../components/Loadable";
import GuestGuard from "../guards/guestGuard";

// layouts
import GuestLayout from "../layouts/guestLayout";

// pages
const RecoveryKeys = Loadable(
  lazy(() => import("../pages/registerWallet/recoverykeys"))
);
const RequestToCreate = Loadable(
  lazy(() => import("../pages/registerWallet/requestToCreate"))
);

const GuestRoutes = {
  path: "/",
  element: (
    <GuestGuard>
      <GuestLayout />
    </GuestGuard>
  ),
  children: [
    { path: "/", element: <RequestToCreate /> },
    { path: "/recovery", element: <RecoveryKeys /> },
  ],
};

export default GuestRoutes;
