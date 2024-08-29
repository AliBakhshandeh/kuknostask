import { useCookies } from "react-cookie";
import QRCode from "react-qr-code";
import { toast } from "react-toastify";

const WalletIdWithQr = () => {
  const [cookies] = useCookies(["walletId"]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("شناسه ولت با موفقیت کپی شد");
  };
  return (
    <div className="flex justify-center items-center flex-col h-full gap-36">
      <div className="flex justify-center items-center flex-col gap-5">
        <p>{cookies.walletId}</p>
        <button
          className="p-2 bg-indigo-500 text-white rounded-md min-w-[120px] hover:bg-indigo-700"
          onClick={() => copyToClipboard(cookies.walletId)}
        >
          کپی
        </button>
      </div>
      <QRCode value={cookies.walletId} />
    </div>
  );
};
export default WalletIdWithQr;
