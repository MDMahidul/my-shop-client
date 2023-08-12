import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const product = useLoaderData();
    const { name, img, price, ratings,stock } = product;
    return (
      <div className="mt-[15vh]">
        <p className="text-3xl text-center py-5 mb-10  font-bold text-red-700">
          Products Details
        </p>
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-3xl mx-auto ">
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-96 md:rounded-none md:rounded-l-lg"
            src={img}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-3xl font-bold  text-gray-900 ">{name}</h5>
            <p className="mb-3 text-lg font-normal text-gray-700 ">
              <span className="font-bold">Price:</span> ${price}
            </p>
            <p className="mb-3 text-lg font-normal text-gray-700 ">
              <span className="font-bold">Stock:</span> {stock}
            </p>
            <p className="mb-3 text-lg font-normal text-gray-700 ">
              <span className="font-bold">Ratings:</span> {ratings}
            </p>
          </div>
        </div>
      </div>
    );
};

export default Details;