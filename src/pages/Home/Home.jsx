import React from 'react';
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
      <div>
        <Helmet>
          <title>my shop | home</title>
        </Helmet>
        <section className="bg-white min-h-screen">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
                MY SHOP{" "}
                <span className="text-xl text-red-700 tracking-wide">
                  Shop. Click. Smile.
                </span>
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
                Discover an array of handpicked products at My Shop. Elevate
                your shopping experience with quality, style, and convenience in
                one place.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-red-700 hover:bg-gray-200 hover:text-red-700 focus:ring-4 focus:ring-red-300 "
              >
                Explore More
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-red-700 hover:text-white focus:ring-4 focus:ring-gray-100 "
              >
                Contact Us
              </a>
            </div>
            <div className="lg:mt-0 lg:col-span-5 lg:flex order-first md:order-last">
              <img
                src="https://i.ibb.co/DrsXYZC/Ecommerce-web-page-pana.png"
                alt="mockup"
              />
            </div>
          </div>
        </section>
      </div>
    );
};

export default Home;