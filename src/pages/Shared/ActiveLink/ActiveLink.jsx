import React from "react";
import { NavLink } from "react-router-dom";
const ActiveLink = ({ to, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "border-b-2 border-red-700 pb-1 text-red-700 hover:text-red-800" : " hover:text-red-800"
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveLink;
