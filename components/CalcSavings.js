import React from "react";

const CalcSavings = () => {
  return (
    <div className="z-[9999] flex flex-col items-center bg-gradient-to-r from-[#00629c] to-[#0097d6] p-2 md:mt-0 md:flex-row md:justify-center md:gap-8 md:py-4 md:px-24 lg:py-8 lg:px-28">
      <div>
        <h1 className="font-spectrum-light text-2xl text-white">
          Are you paying too much for your Mobile plan?
        </h1>
        <p className="font-spectrum-medium text-lg text-white">
          Compare with Spectrum Mobile™ and see how much you could save.
        </p>
      </div>
      <button className="mt-4 w-full rounded-md bg-white py-2 font-spectrum-bold uppercase text-[#0099d8] hover:bg-gray-100 md:max-w-max md:px-4">
        Calculate Savings
      </button>
    </div>
  );
};

export default CalcSavings;
