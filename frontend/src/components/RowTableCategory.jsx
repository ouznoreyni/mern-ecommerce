import React from "react";

const RowTableCategory = ({ value }) => {
  return (
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p className="text-gray-900 whitespace-no-wrap">{value}</p>
    </td>
  );
};

export default RowTableCategory;
