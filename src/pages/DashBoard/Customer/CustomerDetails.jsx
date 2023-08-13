import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from "react-helmet-async";

const CustomerDetails = () => {
    const customer = useLoaderData();
    const { name, email,phone,address } = customer;
    return (
      <div className="mt-[15vh]">
        <Helmet>
          <title>my shop | customer details</title>
        </Helmet>
        <p className="text-3xl text-center py-5 mb-10  font-bold text-red-700">
          Customer Details
        </p>
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-2xl mx-auto ">
          <div className="flex flex-col justify-between p-8 leading-normal">
            <h5 className="mb-2 text-3xl font-bold  text-gray-900 ">{name}</h5>
            <p className="mb-3 text-2xl font-normal text-gray-700 ">
              <span className="font-semibold">Email:</span> {email}
            </p>
            <p className="mb-3 text-2xl font-normal text-gray-700 ">
              <span className="font-semibold">Phone Number:</span> {phone}
            </p>
            <p className="mb-3 text-2xl font-normal text-gray-700 ">
              <span className="font-semibold">Address:</span> {address}
            </p>
          </div>
        </div>
      </div>
    );
};

export default CustomerDetails;