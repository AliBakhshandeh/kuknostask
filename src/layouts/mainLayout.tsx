import { Outlet } from "react-router-dom";
import classes from "./layouts.module.scss";

const MainLayout = () => (
  <main className={classes.main}>
    <div className={classes.content}>
      <Outlet />
    </div>
  </main>
);

export default MainLayout;
