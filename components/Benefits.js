import React from "react";
import { benefitData } from "../data";

const Benefits = () => {
  return (
    <div className="py-16 px-6">
      <h1 className="mb-12 text-center font-spectrum-light text-3xl text-[#0099d8]">
        Spectrum TV Benefits
      </h1>
      <div className="grid grid-cols-1 gap-12 bg-white md:grid-cols-2">
        {benefitData.map((item) => {
          const { name, img, header, description, href, hrefName } = item;
          return (
            <div
              key={name}
              className="group relative border-b border-gray-900/20 text-center transition duration-200 ease-in hover:cursor-pointer hover:rounded-md hover:shadow-lg"
            >
              <img src={img} className="mb-12" alt={name} />
              <div className="mb-28 flex flex-col">
                <h3 className="font-spectrum-medium uppercase tracking-wide text-[#0099d8]">
                  {name}
                </h3>
                <h1 className="mb-2 font-spectrum text-2xl">{header}</h1>
                <p className="px-12 text-center font-spectrum-light text-base md:px-8">
                  {description}
                </p>
              </div>
              <div className="absolute bottom-6 w-full font-spectrum-medium text-lg">
                <a href={href} className="hover:underline">
                  {hrefName}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Benefits;
