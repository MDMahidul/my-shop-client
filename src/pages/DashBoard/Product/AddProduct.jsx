import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddProduct = () => {
  const navigate = useNavigate();
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const ratings = form.ratings.value;
    const stock = form.quantity.value;
    const img = form.image.value;
    const uploadData = { name, price, ratings, stock, img };
    console.log(uploadData);

    fetch("https://my-shop-server-omega.vercel.app/addproduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(uploadData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Data Added Successfullyl!!!",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
        navigate("/dashboard/products");
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: err,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div className="py-4">
      <Helmet>
        <title>my shop | add product</title>
      </Helmet>
      <p className="text-3xl text-center py-5   font-bold text-red-700">
        Add Product
      </p>
      <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-xl xl:p-4 mx-auto">
        <form
          onSubmit={handleAddProduct}
          className="space-y-4 md:space-y-6"
          action="#"
        >
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="input-field"
              placeholder="product name"
              required=""
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Price
            </label>
            <input
              type="text"
              name="price"
              id="price"
              className="input-field "
              placeholder="$ price"
              required=""
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              className="input-field "
              placeholder="quantity"
              required=""
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Ratings
            </label>
            <input
              type="text"
              name="ratings"
              id="ratings"
              className="input-field "
              placeholder="ratings"
              required=""
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Image URL
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none"
              name="image"
              type="url"
              placeholder="url"
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
