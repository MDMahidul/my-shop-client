import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { TbFidgetSpinner } from "react-icons/tb";

const Login = () => {
    const [errors, setErrors] = useState("");
    const { signIn, loading, setLoading } =
      useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSignIn = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;

      signIn(email, password)
        .then((result) => {
          console.log(result.user);
          navigate(from, { replace: true });
          setErrors('');
        })
        .catch((err) => {
          setLoading(false);
          console.log(err.message);
          setErrors(err.message);
        });
    };

    return (
      <section className="bg-gray-50 ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
                Sign in to your account
              </h1>
              <form
                onSubmit={handleSignIn}
                className="space-y-4 md:space-y-6"
                action="#"
              >
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
                    <TbFidgetSpinner
                      className="m-auto animate-spin"
                      size={24}
                    />
                  ) : (
                    "Sign In"
                  )}
                </button>
                <p className="text-sm  font-medium text-red-500 text-center">
                  {errors}
                </p>
                <p className="text-sm font-light text-gray-500 ">
                  Already have an account?{" "}
                  <Link
                    to="/register"
                    className="font-medium text-red-600 hover:underline d"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Login;