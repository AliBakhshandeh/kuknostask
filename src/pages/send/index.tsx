import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { validate as uuidValidate, version as uuidVersion } from "uuid";

const isValidUUIDv4 = (value: string) =>
  uuidValidate(value) && uuidVersion(value) === 4;

const isValidAmount = (value: string) => {
  const amount = parseFloat(value);
  return !isNaN(amount) && amount > 0;
};

const Send = () => {
  const Navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    value: "",
    isValid: true,
  });

  const [amountValue, setAmountValue] = useState({
    value: "",
    isValid: true,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(() => ({ value: value, isValid: isValidUUIDv4(value) }));
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmountValue(() => ({ value: value, isValid: isValidAmount(value) }));
  };
  const onClickButton = () => {
    Navigate("/");
    toast.success("ارسال با موفقیت انجام شد");
  };
  const isButtonDisabled =
    !inputValue.value ||
    !amountValue.value ||
    !inputValue.isValid ||
    !amountValue.isValid;

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="text-center text-2xl">
        <h1>ارسال</h1>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col">
          <span className="w-full text-right">آدرس ولت</span>
          <input
            type="text"
            value={inputValue.value}
            onChange={handleInputChange}
            className={`w-full p-2 border-2 rounded ${
              inputValue.isValid ? "border-gray-300" : "border-red-500"
            }`}
          />
          {!inputValue.isValid && (
            <p className="text-red-500 mt-[5px] text-right">
              آدرس ولت وارد شده صحیح نیست
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <span className="w-full text-right">مبلغ</span>
          <input
            type="text"
            value={amountValue.value}
            onChange={handleAmountChange}
            className={`w-full p-2 border-2 rounded ${
              amountValue.isValid ? "border-gray-300" : "border-red-500"
            }`}
          />
          {!amountValue.isValid && (
            <p className="text-red-500 mt-[5px] text-right">
              مبلغ وارد شده صحیح نیست
            </p>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center h-[120px]">
        <button
          onClick={onClickButton}
          className="bg-indigo-600 text-white p-2 rounded-md min-w-[120px] hover:bg-indigo-700 disabled:bg-indigo-200"
          disabled={isButtonDisabled}
        >
          ارسال
        </button>
      </div>
    </div>
  );
};

export default Send;
