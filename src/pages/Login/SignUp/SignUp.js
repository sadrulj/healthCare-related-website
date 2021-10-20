import React from "react";
import useAuth from "../../../hooks/useAuth";

const SignUp = () => {
  const {
    signInUsingGoogle,
    handleEmailChange,
    handlePasswordChange,
    handleRegistration,
    toggleLogin,
    isLogin,
  } = useAuth();
  console.log(isLogin);
  return (
    <div>
      <section className="bg-blueGray-500">
        <div className="w-full lg:w-4/12 px-4 mx-auto pt-6">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h6 className="text-gray-500 text-sm font-bold">
                  Sign in with
                </h6>
              </div>
              <div className="btn-wrapper text-center">
                <button
                  onClick={signInUsingGoogle}
                  className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                  type="button"
                >
                  <img
                    alt=""
                    className="w-5 mr-1"
                    src="https://demos.creative-tim.com/notus-js/assets/img/google.svg"
                  />
                  Google{" "}
                </button>
              </div>
              <hr className="mt-6 border-b-1 border-gray-300" />
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <div className="text-gray-400 text-center mb-3 text-2xl font-bold">
                <small>
                  Or {isLogin ? "sign in" : "Register"} with credentials
                </small>
              </div>
              <form onSubmit={handleRegistration}>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  <input
                    onChange={handleEmailChange}
                    type="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Email"
                    required
                  />
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2 pt-3"
                    htmlFor="grid-password"
                  >
                    Password
                  </label>
                  <input
                    onBlur={handlePasswordChange}
                    type="password"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Password"
                    required
                  />
                </div>
                <div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      onChange={toggleLogin}
                      id="customCheckLogin"
                      type="checkbox"
                      className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                    />
                    <span className="ml-2 text-sm font-semibold text-blueGray-600">
                      Already Registered?
                    </span>
                  </label>
                </div>
                <div className="text-center mt-6">
                  <button
                    onClick={handleRegistration}
                    className="bg-gray-800 text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="submit"
                  >
                    {isLogin ? "Log In" : "Register"}{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
