import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Error = () => {
  const { error } = useRouteError();
  return (
    <div className=" py-10 bg-[#F0F0F0] min-h-screen">
      <Helmet>
        <title>error</title>
      </Helmet>
      <div>
        <img
          className="w-2/5 mx-auto"
          src="https://cdn.dribbble.com/users/381530/screenshots/3949858/404.gif"
          alt=""
        />
      </div>
      <div className="text-center">
        <p className="mb-4 text-gray-800 font-bold text-xl">{error.message}</p>
        <Link to="/" className="card-btn">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
