import { Outlet } from "react-router-dom";
import classes from "./layouts.module.scss";
import BackPage from "../components/backPage";

const PagesLayout = () => (
  <main className={classes.page}>
    <div className={classes.nav}>
      <BackPage />
    </div>
    <div className={classes.content}>
      <Outlet />
    </div>
  </main>
);

export default PagesLayout;
