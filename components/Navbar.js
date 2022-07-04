import React from "react";
import { CgMenuLeft } from "react-icons/cg";
import logo from "../public/spectrum-logo.svg";
import FindOffers from "./FindOffers";

const Navbar = () => {
  return (
    <>
      {/* Mobile & Tablet */}
      <div className="fixed top-0 z-20 w-full md:flex ld:hidden">
        <div className="w-full bg-white/70 px-4 py-4 shadow backdrop-blur-md md:flex md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <button>
              <CgMenuLeft className="translate-x-[-1] translate-y-[-1] transform text-3xl" />
            </button>
            <span>
              <img src={logo.src} className="w-28" alt="Spectrum Logo" />
            </span>
          </div>
          <div className="hidden md:block">
            <button className="rounded-md bg-[#0099d8] py-3 px-2 font-spectrum-bold text-base font-extrabold uppercase leading-4 tracking-wide text-white shadow-md hover:bg-[#0082c0]">
              Find Best Offers
            </button>
          </div>
        </div>
        <div className="block md:hidden">
          <FindOffers />
        </div>
      </div>
      {/* Desktop */}
      <div className="fixed top-0 z-20 hidden w-full ld:block">
        <div className="flex items-center justify-end gap-4 bg-[#001b33] px-8 py-[0.5rem] font-spectrum-medium text-sm text-white">
          <a className="hover:cursor-pointer hover:underline">My Account</a>
          <a className="hover:cursor-pointer hover:underline">Español</a>
        </div>
        <div className="w-full bg-white/70 p-4 shadow backdrop-blur-md md:flex md:items-center md:justify-between ld:justify-start">
          <div className="flex items-center gap-3">
            <span>
              <img src={logo.src} className="w-36" alt="Spectrum Logo" />
            </span>
          </div>
          <div className="ml-6 flex flex-col gap-1 text-sm text-gray-900">
            <div className="flex gap-4 font-spectrum">
              <a className="border-b-2 border-[#0099d7]">Residential</a>
              <a>Business</a>
            </div>
            <div className="flex gap-4 font-spectrum-medium text-lg">
              <a>Packages</a>
              <a>Internet</a>
              <a>TV</a>
              <a>Mobile</a>
              <a>Home Phone</a>
              <a>Contact Us</a>
            </div>
          </div>
        </div>
        <div className="mx-auto flex w-full items-center justify-center gap-2 border-b bg-white py-4">
          <h1 className="font-spectrum text-lg">Find Best Offers</h1>
          <div className="flex justify-start">
            <div class="relative">
              <input
                type="text"
                id="address"
                className="border-1 peer block w-full appearance-none rounded-l-lg border-r-0 border-gray-300 bg-white px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label
                htmlFor="address"
                className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
              >
                Address
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                id="apt"
                className="border-1 peer block w-full appearance-none border-r-0 border-gray-300 bg-white px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label
                htmlFor="apt"
                className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
              >
                Apt/Unit
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                id="zip"
                className="border-1 peer block w-full appearance-none border-r-0 border-gray-300 bg-white px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label
                htmlFor="zip"
                className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
              >
                Zip Code
              </label>
            </div>
            <button className="rounded-r-lg border-blue-400 bg-blue-400 px-4 py-2 font-spectrum-bold uppercase text-white">
              Go
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
