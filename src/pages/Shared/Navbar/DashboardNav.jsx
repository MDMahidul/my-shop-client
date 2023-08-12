import React from 'react';
import logo from '../../../assets/img/logo.png'

const DashboardNav = () => {
    return (
      <div>
          <button
            data-drawer-target="default-sidebar"
            data-drawer-toggle="default-sidebar"
            aria-controls="default-sidebar"
            type="button"
            className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          >
            <span className="sr-only">Open sidebar</span>
          </button>
          <aside
            id="default-sidebar"
            className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 pt-4"
            aria-label="Sidebar"
          >
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">
                <div className='flex items-center'>
                    <img className='w-10' src={logo} alt="" />
                    <span>my shop</span>
                </div>
              <ul className="space-y-2 font-medium">
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                  >
                    <span className="ml-3">Dashboard</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group"
                  >
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Kanban
                    </span>
                    <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full ">
                      Pro
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group"
                  >
                    <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group"
                  >
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Products
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group"
                  >
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Sign In
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group"
                  >
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Sign Up
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </aside>
      </div>
    );
};

export default DashboardNav;