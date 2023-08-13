import React from "react";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const OrderDetails = () => {
  const order = useLoaderData();
  const { customerName, email, phone,productName,quantity,paymentStatus, address } = order;
  return (
    <div className="mt-[15vh]">
      <Helmet>
        <title>my shop | order details</title>
      </Helmet>
      <p className="text-3xl text-center py-5 mb-10  font-bold text-red-700">
        Order Details
      </p>
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-2xl mx-auto ">
        <div className="flex flex-col justify-between p-8 leading-normal">
          <p className="mb-2 text-2xl font-bold  text-red-700 ">
            Customer Name: {customerName}
          </p>
          <p className="mb-3 text-2xl font-normal text-gray-700 ">
            <span className="font-semibold">Email:</span> {email}
          </p>
          <p className="mb-3 text-2xl font-normal text-gray-700 ">
            <span className="font-semibold">Phone Number:</span> {phone}
          </p>
          <p className="mb-3 text-2xl font-normal text-gray-700 ">
            <span className="font-semibold">Product Name:</span> {productName}
          </p>
          <p className="mb-3 text-2xl font-normal text-gray-700 ">
            <span className="font-semibold">Quantity:</span> {quantity}
          </p>
          <p className="mb-3 text-2xl font-normal text-gray-700 ">
            <span className="font-semibold">Payment Status:</span>{" "}
            {paymentStatus}
          </p>
          <p className="mb-3 text-2xl font-normal text-gray-700 ">
            <span className="font-semibold">Address:</span> {address}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
