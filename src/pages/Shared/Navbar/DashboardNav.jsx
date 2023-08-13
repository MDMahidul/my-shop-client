import React, { useContext, useState } from "react";
import logo from "../../../assets/img/logo.png";
import { BiMenu, BiSolidDashboard,BiX } from "react-icons/bi";
import { AiFillShop } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import DashboardActiveLink from "../ActiveLink/DashboardActiveLink";
import ActiveLink from "../ActiveLink/ActiveLink";
import "flowbite";

const DashboardNav = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <button
        onClick={handleSidebarToggle}
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-xl text-red-500 rounded-lg sm:hidden hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-200 "
      >
        <BiMenu />
      </button>
      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <button
          onClick={handleSidebarToggle}
          className={`absolute top-2 right-2 p-2 text-gray-600 hover:text-gray-900 focus:outline-none ${
            isSidebarOpen ? "block" : "hidden" // Show button only when sidebar is open
          }`}
        >
          <BiX /> {/* Close icon */}
        </button>
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-200 ">
          <Link to="/" className="flex items-center pt-4 ps-2 mb-3">
            <img className="w-8" src={logo} alt="" />
            <span className="text-gray-900 font-semibold text-base ml-2">
              my shop
            </span>
          </Link>
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <BiSolidDashboard className="text-xl "></BiSolidDashboard>
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <DashboardActiveLink to="products">
                <AiFillShop className="text-xl "></AiFillShop>
                <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
              </DashboardActiveLink>
            </li>
            <li>
              <DashboardActiveLink to="customers">
                <BsPeople className="text-xl "></BsPeople>
                <span className="flex-1 ml-3 whitespace-nowrap">Customers</span>
              </DashboardActiveLink>
            </li>
            <li>
              <DashboardActiveLink to="orders">
                <HiOutlineShoppingCart className="text-xl "></HiOutlineShoppingCart>
                <span className="flex-1 ml-3 whitespace-nowrap">Orders</span>
              </DashboardActiveLink>
            </li>
          </ul>
          <div className="pt-48 ">
            {user ? (
              <div className="flex  items-center justify-center  flex-col">
                <div className="flex  items-center justify-center  flex-col">
                  <img
                    className="w-14 h-14 rounded-full border-red-600 border"
                    src={
                      user.photoURL
                        ? user.photoURL
                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
                    }
                    alt=""
                  />
                  <span className="text-red-700 text-xl font-bold py-4 text-center">
                    Admin: <br /> {user.displayName}
                  </span>
                </div>
                <button
                  onClick={handleLogOut}
                  className="bg-red-700 text-white font-semibold px-8 py-2 hover:text-red-700 rounded-lg hover:bg-gray-200  group"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default DashboardNav;
