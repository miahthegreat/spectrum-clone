import React from "react";
import { HiOutlineChatAlt2 } from "react-icons/hi";

const ChatButton = () => {
  return (
    <div className="fixed bottom-0 z-20 w-full md:right-8 md:w-[20%]">
      <button className="group flex w-full items-center justify-center gap-3 rounded-t-xl bg-[#03629c] py-3 transition duration-200 ease-in hover:bg-[#1ebafb]">
        <HiOutlineChatAlt2 className="text-xl text-white transition duration-200 ease-in group-hover:text-gray-800" />
        <p className="font-spectrum-bold text-base text-white transition duration-200 ease-in group-hover:text-gray-800">
          Chat With Us
        </p>
      </button>
    </div>
  );
};

export default ChatButton;
