import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/products")
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setProducts(data);
        })
    },[])
    return (
      <div className="py-4">
        <p className="text-3xl text-center py-5   font-bold text-red-700">
          Products
        </p>
        <div className="text-center">
          <Link to="/dashboard/addproduct" className="card-btn">
            Add Product
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
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Stock
                </th>
                <th scope="col" className="px-6 py-3">
                  Ratings
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr
                  key={product._id}
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{product.name}</td>
                  <td className="px-6 py-4">{product.price}</td>
                  <td className="px-6 py-4">{product.stock}</td>
                  <td className="px-6 py-4">${product.ratings}</td>
                  <td className="px-6 py-4">
                    <Link
                      to={`/dashboard/details/${product._id}`}
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

export default Product;