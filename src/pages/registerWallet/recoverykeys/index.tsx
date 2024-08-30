import { useMemo } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import transactions from "../../../mocks/transaction.json";
import generateRandomPhrases from "../../../utils/generateRandomPhrases";

const RecoveryKeys = () => {
  const Navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["walletId", "walletTransactions"]);
  const phrases = useMemo(() => [...generateRandomPhrases()], []);

  const createWalletHandler = () => {
    if (!cookies.walletId) {
      const uuid = uuidv4();
      setCookie("walletId", uuid);
      setCookie("walletTransactions", transactions.data);
      Navigate("/recovery");
    } else {
      Navigate("/dashboard");
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="h-full">
        <ul className="grid grid-cols-3 gap-2">
          {phrases.map((item, i) => (
            <li className="bg-gray-200 p-2" key={i}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="h-[120px] flex justify-center items-center">
        <button
          className="p-2 bg-indigo-500 text-white rounded-md min-w-[120px] hover:bg-indigo-700"
          onClick={createWalletHandler}
        >
          برو به کیف پول من
        </button>
      </div>
    </div>
  );
};
export default RecoveryKeys;
