import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddCustomer = () => {
  const navigate = useNavigate();
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const uploadData = { name, email,phone, address };
    console.log(uploadData);

    fetch("http://localhost:5000/addcustomer", {
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
        navigate("/dashboard/customers");
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
      <p className="text-3xl text-center py-5   font-bold text-red-700">
        Add Customer
      </p>
      <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-xl xl:p-4 mx-auto">
        <form
          onSubmit={handleAddProduct}
          className="space-y-4 md:space-y-6"
          action="#"
        >
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Customer Name
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
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="input-field "
              placeholder="example@.email.com"
              required=""
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="input-field "
              placeholder="phone number"
              required=""
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              className="input-field "
              placeholder="address"
              required=""
            />
          </div>

          <button type="submit" className="submit-btn">
            Add Customer
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCustomer;
