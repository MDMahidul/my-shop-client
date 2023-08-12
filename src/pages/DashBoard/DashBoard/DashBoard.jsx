import React from 'react';
import { AiFillShop } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Chart from './Chart';

const DashBoard = () => {
    return (
      <div className="py-4">
        <p className="text-3xl text-center py-5 border-b-2 border-gray-400  font-bold text-red-700">
          Dashboard Overview
        </p>
        <div className="flex gap-6 justify-evenly my-10">
          <Link className="card-btn">Add Product</Link>
          <Link className="card-btn">Add Customer</Link>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
            <div className="flex justify-center items-center flex-col">
              <AiFillShop className="text-7xl text-red-700 my-2"></AiFillShop>
              <h5 className="mb-3 text-center text-2xl font-bold text-gray-900">
                Total Products: 200
              </h5>
              <Link to="dashboard/products" className="card-btn">
                Details
              </Link>
            </div>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
            <div className="flex justify-center items-center flex-col">
              <BsPeople className="text-7xl text-red-700 my-2"></BsPeople>
              <h5 className="mb-3 text-center text-2xl font-bold text-gray-900">
                Total Customers: 200
              </h5>
              <Link to="dashboard/customers" className="card-btn">
                Details
              </Link>
            </div>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
            <div className="flex justify-center items-center flex-col">
              <HiOutlineShoppingCart className="text-7xl text-red-700 my-2"></HiOutlineShoppingCart>
              <h5 className="mb-3 text-center text-2xl font-bold text-gray-900">
                Total Orders: 200
              </h5>
              <Link to="dashboard/orders" className="card-btn">
                Details
              </Link>
            </div>
          </div>
        </div>
        <Chart></Chart>
      </div>
    );
};

export default DashBoard;