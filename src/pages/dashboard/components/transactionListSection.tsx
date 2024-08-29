import { useMemo } from "react";

import { CryptoTransaction } from "../dashboard.types";

interface IProps {
  transactions: CryptoTransaction[];
}

const TransactionListSection = ({ transactions }: IProps) => {
  const renderTransaction = useMemo(() => {
    const conventDate = (isoDate: string) => {
      const date = new Date(isoDate);
      const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const persianDate = new Intl.DateTimeFormat(
        "fa-IR-u-ca-persian",
        options
      ).format(date);
      return persianDate;
    };

    return (
      <>
        {transactions?.map((item, i) => (
          <div key={i}>
            <p>
              <span>افزایش : </span>
              {item.amount}
              <span></span>
            </p>
            <p>
              <span>ارز : </span>
              {item.crypto_currency_symbol}
              <span></span>
            </p>
            <p>
              <span>تاریخ : </span>
              {conventDate(item.transaction_date)}
              <span></span>
            </p>
            <div className="border-b-2"></div>
          </div>
        ))}
      </>
    );
  }, [transactions]);

  return (
    <div className="Transaction text-right">
      <div className="transaction-items-container pr-5 mt-2">
        {renderTransaction}
      </div>
    </div>
  );
};

export default TransactionListSection;
