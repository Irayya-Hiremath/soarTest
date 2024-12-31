import React from "react";

const TransactionCard = ({ icon, title, date, amount, isPositive }) => {
  return (
    <div className="border w-[301px] h-[55px] flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex justify-center items-center rounded-full bg-gray-100">
          {icon}
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-800">{title}</h4>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
      </div>
      <p
        className={`text-sm font-bold ${
          isPositive ? "text-green-500" : "text-red-500"
        }`}
      >
        {isPositive ? `+${amount}` : `-${amount}`}
      </p>
    </div>
  );
};

export default TransactionCard;
