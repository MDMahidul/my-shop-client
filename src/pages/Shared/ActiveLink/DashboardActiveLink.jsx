import React from "react";
import { Link, NavLink } from "react-router-dom";
const DashboardActiveLink = ({ to, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "bg-red-700 text-white hover:bg-gray-100 p-2 rounded-lg group flex items-center  hover:text-red-700"
            : "flex items-center hover:text-red-700  hover:bg-gray-100 p-2 rounded-lg group"
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default DashboardActiveLink;
