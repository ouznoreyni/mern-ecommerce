import React from "react";

const RowTableCategory = ({ value }) => {
  return (
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p class="text-gray-900 whitespace-no-wrap">{value}</p>
    </td>
  );
};

export default RowTableCategory;
