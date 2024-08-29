import { useNavigate } from "react-router-dom";

const RequestToCreate = () => {
  const Navigate = useNavigate();

  const createWalletBtnHandler = () => {
    Navigate("/recovery");
  };
  return (
    <div className="flex h-full w-full justify-center items-center flex-col gap-28">
      <h1>جهت ساخت ولت جدید بر روی دکمه زیر کلیک کنید</h1>
      <button
        onClick={createWalletBtnHandler}
        className="p-2 bg-indigo-500 text-white rounded-md min-w-[120px] hover:bg-indigo-700"
      >
        ساخت ولت
      </button>
    </div>
  );
};
export default RequestToCreate;
