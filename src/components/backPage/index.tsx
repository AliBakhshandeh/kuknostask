import { useNavigate } from "react-router-dom";

const BackPage = () => {
  const Navigate = useNavigate();
  return (
    <div className="w-full flex justify-end">
      <button
        onClick={() => Navigate(-1)}
        className="bg-slate-500 p-2 text-sm rounded-full text-white w-[50px] h-[50px]"
      >
        →
      </button>
    </div>
  );
};

export default BackPage;
