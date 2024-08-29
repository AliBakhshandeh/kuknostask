import { Outlet } from "react-router-dom";
import classes from "./layouts.module.scss";
const GuestLayout = () => (
  <main className={classes.main}>
    <Outlet />
  </main>
);

export default GuestLayout;
