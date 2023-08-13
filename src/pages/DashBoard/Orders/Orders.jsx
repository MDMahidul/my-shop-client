import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://my-shop-server-omega.vercel.app/orders")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      });
  }, []);
  return (
    <div className="py-4 mb-10">
      <Helmet>
        <title>my shop | orders</title>
      </Helmet>
      <p className="text-3xl text-center py-5   font-bold text-red-700">
        Orders List
      </p>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                SL
              </th>
              <th scope="col" className="px-6 py-3">
                Customer name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Payment Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={order._id}
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{order.customerName}</td>
                <td className="px-6 py-4">{order.email}</td>
                <td className="px-6 py-4">{order.phone}</td>
                <td className="px-6 py-4">{order.productName}</td>
                <td className="px-6 py-4">{order.quantity}</td>
                <td className="px-6 py-4">{order.paymentStatus}</td>
                <td className="px-6 py-4">
                  <Link
                    to={`/dashboard/orderdetails/${order._id}`}
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
