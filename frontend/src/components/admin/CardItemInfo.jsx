import React from "react";

const CardItemInfo = ({ title, icon, count, moreValue, moreDetails }) => {
  return (
    <div className="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div className="flex flex-col space-y-2">
          <span className="text-gray-400">{title}</span>
          <span className="text-lg font-semibold">{count}</span>
        </div>
        <div className="p-10 bg-purple-500 rounded-md"></div>
      </div>
      <div>
        <span className="inline-block px-2 text-sm text-white bg-green-300 rounded">
          {moreValue}
        </span>
        <span>{moreDetails}</span>
      </div>
    </div>
  );
};

export default CardItemInfo;
