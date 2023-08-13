import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { TbFidgetSpinner } from "react-icons/tb";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const [errors, setErrors] = useState("");
  const { createUser, updateUserProfile, loading, setLoading } =useContext(AuthContext);
  const navigate = useNavigate();

  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, password, email);

    //image upload
    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    //use imgbb api to store the user photo
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;

    //using fetch method post the image to the imgbb api
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        console.log(imageData);
        const imageUrl = imageData.data.display_url;

        //create user using firebase 
        createUser(email, password)
          .then((result) => {
            console.log(result.user);
            updateUserProfile(name, imageUrl)
              .then(() => {
                //console.log(result.user);
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Sign Up Successful!!!",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              })
              .catch((err) => {
                setLoading(false);
                console.log(err.message);
                setErrors(err.message);
              });
          })
          .catch((err) => {
            setLoading(false);
            console.log(err.message);
            setErrors(err.message);
          });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        setErrors(err.message);
      });

    return;
  };
  return (
    <section className="bg-gray-50 ">
      <Helmet>
        <title>my shop | register</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
              Create an account
            </h1>
            <form
              onSubmit={handleCreateUser}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="input-field"
                  placeholder="your name"
                  required=""
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input-field "
                  placeholder="name@email.com"
                  required=""
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Select Image
                </label>
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none"
                  name="image"
                  id="file_input"
                  type="file"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="input-field "
                  required=""
                />
              </div>
              <button type="submit" className="submit-btn">
                {loading ? (
                  <TbFidgetSpinner className="m-auto animate-spin" size={24} />
                ) : (
                  "Create an account"
                )}
              </button>
              <p className="text-sm font-light text-red-500 text-center">
                {errors}
              </p>
              <p className="text-sm font-light text-gray-500 ">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-red-600 hover:underline d"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
