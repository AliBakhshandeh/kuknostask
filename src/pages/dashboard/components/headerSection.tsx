import { useNavigate } from "react-router-dom";
import ActionButton from "./actionButton";
import { useCookies } from "react-cookie";
import { CryptoTransaction } from "../dashboard.types";
import { useMemo } from "react";
interface IProps {
  appendRandomTransaction: () => void;
}
const HeaderSection = ({ appendRandomTransaction }: IProps) => {
  const Navigate = useNavigate();
  const [cookies] = useCookies(["walletTransactions"]);

  const totalAmounts = useMemo(() => {
    const totalAmount = cookies.walletTransactions?.reduce(
      (sum: number, transaction: CryptoTransaction) => sum + transaction.amount,
      0
    );
    return totalAmount?.toFixed(2);
  }, [cookies.walletTransactions]);

  const recevieActionBtnHandler = () => {
    Navigate("/receive");
  };

  const sendActionBtnHandler = () => {
    Navigate("/send");
  };
  return (
    <div className="sticky top-0 bg-white text-right">
      <div className="flex flex-col justify-center items-center gap-20 bg-indigo-400 min-h-[250px] w-full rounded-md">
        <h1 className="text-4xl text-white">{totalAmounts}</h1>
        <div className="relative flex gap-5">
          <ActionButton
            onClick={appendRandomTransaction}
            label="افزایش موجودی"
          />
          <ActionButton onClick={recevieActionBtnHandler} label="دریافت" />
          <ActionButton onClick={sendActionBtnHandler} label="ارسال" />
        </div>
      </div>
      <p className="text-xl border-b-2 py-5">تراکنش‌ها</p>
    </div>
  );
};
export default HeaderSection;
