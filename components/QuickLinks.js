import React from "react";
import { quickLinksData } from "../data";

const QuickLinks = () => {
  return (
    <div className="bg-gray-50 py-16">
      <h1 className="pb-8 text-center font-spectrum-light text-5xl text-[#0099d8]">
        Quick Links
      </h1>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 px-2 md:grid-cols-2 md:gap-6 md:px-4 lg:grid-cols-3 lg:px-8">
        {quickLinksData.map((item) => {
          const { name, href, hrefName } = item;
          const Icon = item.LinkIcon;
          return (
            <a
              key={name}
              href={href}
              className="flex flex-col items-center justify-center gap-3 border-b border-gray-900/20 bg-white py-4 px-2 text-center transition duration-200 ease-in hover:cursor-pointer hover:shadow-md"
            >
              <Icon className="text-6xl text-[#003057]" />
              <h1 className="font-spectrum-light text-3xl text-[#0099d8]">
                {name}
              </h1>
              <h3 className="font-spectrum-medium text-lg">{hrefName}</h3>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default QuickLinks;
