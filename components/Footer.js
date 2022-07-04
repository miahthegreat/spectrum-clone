import React from "react";
import logo from "../public/logo-alt.svg";
import { Disclosure } from "@headlessui/react";
import {
  FaFacebook,
  FaTwitterSquare,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { footerDisclosureData } from "../data";
import { footerLinksData } from "../data";

const Footer = () => {
  return (
    <div className="mb-8 flex flex-col bg-[#001b33] px-16 py-12 md:mb-0">
      {/* Heading */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div>
          <img src={logo.src} className="w-40" alt="Spectrum Logo" />
        </div>
        {/* Social Icons */}
        <div className="flex items-center gap-4 text-3xl">
          <a>
            <FaFacebook className="rounded-full bg-white text-[#1a77f2]" />
          </a>
          <a className="rounded-md bg-gradient-to-tr from-[#ff9343] to-[#a93dab]">
            <FaInstagram className="text-white" />
          </a>
          <a>
            <FaTwitterSquare className="rounded bg-white text-[#1ea1f1]" />
          </a>
          <a>
            <FaYoutube className="rounded-md bg-[#fe0100] p-1 text-white" />
          </a>
        </div>
      </div>
      {/* Disclosure Section */}
      <div className="mt-8 w-full">
        <div className="w-full rounded-2xl">
          {footerDisclosureData.map((item) => {
            const { name, links } = item;
            return (
              <Disclosure key={name}>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`flex w-full justify-between py-2 text-left font-spectrum-light text-lg font-medium uppercase tracking-[0.25em] text-[#0099d8] ${
                        open ? "" : "border-b border-[#34495c]"
                      }`}
                    >
                      <span>{name}</span>
                      <BsChevronDown
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-[#0099d8] transition duration-100 ease-in`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel
                      className={`flex flex-col gap-2 pb-4 font-spectrum text-sm text-gray-50 ${
                        open ? "border-b border-[#34495c]" : ""
                      }`}
                    >
                      <>
                        {links.map((link) => {
                          const { title, href } = link;
                          return (
                            <a
                              className="hover:cursor-pointer hover:underline"
                              key={title}
                              href={href}
                            >
                              {title}
                            </a>
                          );
                        })}
                      </>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            );
          })}
        </div>
      </div>
      {/* More Links */}
      <div className="flex flex-col gap-2 pt-6 text-white">
        {footerLinksData.map((link) => {
          const { title, href } = link;
          return (
            <a
              key={title}
              href={href}
              className="font-spectrum text-sm hover:cursor-pointer hover:underline"
            >
              {title}
            </a>
          );
        })}
      </div>
      {/* Fine Print */}
      <div className="prose pt-6 font-spectrum text-xs text-gray-50">
        <p>
          Not all products, pricing, and services are available in all areas.
          Pricing and actual speeds may vary. Internet speeds based on wired
          connection. Restrictions apply.
        </p>
        <p>©2022 Charter Communications. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
