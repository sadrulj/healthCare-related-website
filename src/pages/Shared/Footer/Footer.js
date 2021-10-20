import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-800 body-font bg-gray-400">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              to="/home"
              className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
            >
              <h1 className="text-4xl text-blue-800 font-bold">
                Medi<span className="text-green-700 font-bolder">Care</span>+
              </h1>
            </Link>
            <h4 className="mt-2 text-xl text-gray-600">
              We care about your Health...
            </h4>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-right text-center">
            <div className="lg:w-5/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none text-gray-600 font-bold mb-10">
                <li>
                  <Link
                    to="/home"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Login
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2021 Copyright:
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a href="#facebook" className="text-gray-500">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#twitter" className="ml-3 text-gray-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#linkdin" className="ml-3 text-gray-500">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#youtube" className="ml-3 text-gray-500">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#instagram" className="ml-3 text-gray-500">
                <i className="fab fa-instagram"></i>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
