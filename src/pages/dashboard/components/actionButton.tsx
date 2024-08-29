interface IProps {
  onClick: () => void;
  label: string;
}
const ActionButton = ({ onClick, label }: IProps) => (
  <button
    onClick={onClick}
    className="bg-indigo-600 text-white p-2 rounded-md min-w-[120px] hover:bg-indigo-700"
  >
    {label}
  </button>
);
export default ActionButton;
