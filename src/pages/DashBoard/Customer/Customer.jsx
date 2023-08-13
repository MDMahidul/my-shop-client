import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Customer = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("https://my-shop-server-omega.vercel.app/customers")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCustomers(data);
      });
  }, []);
  return (
    <div className="py-4 mb-10">
      <Helmet>
        <title>my shop | customers</title>
      </Helmet>
      <p className="text-3xl text-center py-5   font-bold text-red-700">
        Customers List
      </p>
      <div className="text-center">
        <Link to="/dashboard/addcustomer" className="card-btn">
          Add Customer
        </Link>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                SL
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr
                key={customer._id}
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{customer.name}</td>
                <td className="px-6 py-4">{customer.email}</td>
                <td className="px-6 py-4">{customer.phone}</td>
                <td className="px-6 py-4">
                  <Link
                    to={`/dashboard/customerdetails/${customer._id}`}
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

export default Customer;
