import React from "react";
import { Link } from "react-router-dom";

const FooterLink = ({ values, iconClass, path = "#" }) => {
  return (
    <Link
      to={path}
      className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
    >
      {iconClass && <i className={iconClass}></i>} {values}
    </Link>
  );
};

export default FooterLink;
