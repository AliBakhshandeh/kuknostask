import GuestGuard from "../guards/guestGuard";
import GuestLayout from "../layouts/guestLayout";
import RequestToCreate from "../pages/registerWallet/requestToCreate";

const GuestRoutes = {
  path: "/",
  element: (
    <GuestGuard>
      <GuestLayout />
    </GuestGuard>
  ),
  children: [{ path: "/", element: <RequestToCreate /> }],
};

export default GuestRoutes;
