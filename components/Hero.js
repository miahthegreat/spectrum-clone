import React from "react";
import smlogo from "../public/hero-sm.jpeg";
import mdlogo from "../public/hero-md.jpeg";

const Hero = () => {
  return (
    <div className="relative flex flex-col gap-6 md:min-h-screen md:flex-row">
      <div>
        <div className="absolute inset-0 z-[5] bg-gradient-to-b from-transparent to-white md:hidden" />
        <img
          src={smlogo.src}
          className="absolute inset-0 block h-full w-full object-contain md:hidden"
          alt="Spectrum Mobile"
        />
        <img
          src={mdlogo.src}
          className="hidden h-full w-full object-cover md:absolute md:z-10 md:block"
          alt="Spectrum Mobile"
        />
      </div>
      <div className="hidden md:block md:w-full" />
      <div className="relative z-[15] mt-10 px-4 pr-16 md:mt-16 md:flex-row-reverse md:pl-28">
        <h3 className="font-spectrum text-xl tracking-widest text-[#03629c]">
          BEST DEAL IN MOBILE
        </h3>
        <h1 className="font-spectrum-medium text-4xl text-[#03629c] md:text-[2.5rem]">
          Big Savings for Our Internet Customers
        </h1>
        <p className="mt-4 font-spectrum-light text-base">
          You could save up to 60% on your wireless bill with the
          fastest-growing mobile provider in the nation. Bring your own phone or
          shop for a new device and save big.
        </p>
        <div className="mt-6 flex flex-col text-gray-800">
          <h4 className="font-spectrum-light text-2xl">Unlimited Data</h4>
          <div className="flex items-center md:mt-6">
            <div className="relative font-spectrum-medium">
              <span className="absolute top-1 text-4xl">$</span>
              <span className="ml-5 text-8xl font-bold">29</span>
            </div>
            <div>
              <p className="relative flex items-center font-spectrum">
                <span className="font-spectrum-medium text-3xl">99</span>
                <span className="absolute bottom-0 left-[35px] text-xl">
                  /mo
                </span>
              </p>
              <div className="font-spectrum text-xs">
                <p>per line with</p>
                <p>2+ lines</p>
              </div>
            </div>
          </div>
        </div>
        <button className="mt-4 w-full rounded-md bg-[#0099d8] py-[0.4rem] px-2 font-spectrum-bold text-xl font-extrabold uppercase tracking-wide text-white shadow-md hover:bg-[#0082c0] md:w-1/2">
          Shop Mobile
        </button>
        <p className="mt-6 py-10 font-spectrum-light text-xs">
          Spectrum Internet&#174; required
        </p>
      </div>
    </div>
  );
};

export default Hero;
