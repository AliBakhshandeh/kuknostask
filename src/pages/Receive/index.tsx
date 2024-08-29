import { lazy } from "react";
import Loadable from "../../components/Loadable";

const WalletIdWithQr = Loadable(
  lazy(() => import("./components/walletIdWithQr"))
);

const Receive = () => {
  return (
    <div className="flex flex-col h-full">
      <WalletIdWithQr />
    </div>
  );
};
export default Receive;
