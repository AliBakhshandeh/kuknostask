import { lazy, useState } from "react";
import Loadable from "../../components/Loadable";
// mocks
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import transaction from "../../mocks/transaction.json";
import { CryptoTransaction } from "./dashboard.types";

const HeaderSection = Loadable(
  lazy(() => import("./components/headerSection"))
);
const TransactionListSection = Loadable(
  lazy(() => import("./components/transactionListSection"))
);

const Dashboard = () => {
  const [cookies, setCookie] = useCookies(["walletTransactions"]);

  const appendRandomTransaction = () => {
    function getRandomTransaction() {
      const symbols = ["BTC", "ETH", "XRP", "ADA", "LTC", "DOGE", "SOL"];

      const getRandomAmount = (min: number, max: number) =>
        (Math.random() * (max - min) + min).toFixed(3);
      const getRandomSymbol = () =>
        symbols[Math.floor(Math.random() * symbols.length)];
      const getRandomDate = () => {
        const startDate = new Date("2024-08-10T00:00:00Z");
        const endDate = new Date("2024-08-19T00:00:00Z");
        const date = new Date(
          startDate.getTime() +
            Math.random() * (endDate.getTime() - startDate.getTime())
        );
        return date.toISOString();
      };

      return {
        amount: parseFloat(getRandomAmount(0.01, 50)),
        crypto_currency_symbol: getRandomSymbol(),
        transaction_date: getRandomDate(),
      };
    }
    const randomTransaction = getRandomTransaction();
    setCookie("walletTransactions", [
      ...cookies.walletTransactions,
      randomTransaction,
    ]);
    toast.success("به موجودی ولت شما اضافه شد");
  };

  return (
    <div className="dashboard">
      <HeaderSection appendRandomTransaction={appendRandomTransaction} />
      <TransactionListSection transactions={cookies.walletTransactions} />
    </div>
  );
};

export default Dashboard;
