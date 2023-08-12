import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo.png'
import ActiveLink from '../ActiveLink/ActiveLink';

const HomeNav = () => {
    const user='';
    return (
      <div>
        <nav className="bg-white border-gray-200 shadow-md mb-2">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to="/" className="flex items-center">
              <img className="w-10 mr-2" src={logo} alt="" />
              <span className="self-center text-2xl font-bold whitespace-nowrap text-red-700">
                My Shop
              </span>
            </Link>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white font-semibold">
                <li className="mb-3">
                  <ActiveLink
                    to="/"
                    className="block py-2 pl-3 pr-4 text-gray-900  rounded md:bg-transparent  md:p-0 "
                    aria-current="page"
                  >
                    Home
                  </ActiveLink>
                </li>
                <li className="mb-3">
                  <ActiveLink
                    to="dashboard"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100  md:border-0  md:p-0 "
                  >
                    Dashboard
                  </ActiveLink>
                </li>
                {user ? (
                  <>
                    <div
                      className="tooltip tooltip-bottom"
                      data-tip={user.displayName}
                    >
                      <img
                        className="w-10 rounded-full border-red-600 border mr-2 mt-[-5px]"
                        src={
                          user.photoURL
                            ? user.photoURL
                            : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
                        }
                        alt=""
                      />
                    </div>
                    <button className="btn-sm  btn-warning rounded mt-[-10px]">
                      Log Out
                    </button>
                  </>
                ) : (
                  <>
                    <li className="mb-3">
                      <ActiveLink
                        className="block py-2 pl-3 pr-4 text-gray-900  rounded md:bg-transparent  md:p-0 "
                        to="login"
                      >
                        Login
                      </ActiveLink>
                    </li>
                    <li className="mb-3">
                      <ActiveLink
                        className="block py-2 pl-3 pr-4 text-gray-900  rounded md:bg-transparent  md:p-0 "
                        to="register"
                      >
                        Register
                      </ActiveLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
};

export default HomeNav;