import peacock from "../public/promocard-peacock.jpg";
import stva from "../public/tv-app-own-all-rise.webp";
import { RiNewspaperFill } from "react-icons/ri";
import { GrSupport } from "react-icons/gr";
import { MdStoreMallDirectory, MdOutlineSettings } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaFileInvoiceDollar } from "react-icons/fa";

export const benefitData = [
  {
    name: "Spectrum TV Select",
    img: peacock.src,
    header: "$49.99/Mo for 12 Mos",
    description:
      "Enjoy 125+ channels and 85,000+ On Demand titles. Get Peacock Premium at no additional cost with eligible Spectrum package.",
    href: "https://www.spectrum.com/address/localization?v=ORG",
    hrefName: "Shop Spectrum TV",
  },
  {
    name: "Spectrum TV App",
    img: stva.src,
    header: "Stream on All Your Devices ",
    description:
      "Watch live TV and On Demand shows at home or on-the-go. Get FREE access with any Spectrum TV plan.",
    href: "https://www.spectrum.com/cable-tv/spectrum-tv-app.html",
    hrefName: "Discover the app",
  },
];

export const quickLinksData = [
  {
    name: "Manage Account",
    LinkIcon: RiNewspaperFill,
    href: "#",
    hrefName: "Account summary",
  },
  {
    name: "Spectrum Support",
    LinkIcon: GrSupport,
    href: "#",
    hrefName: "Get support",
  },
  {
    name: "Spectrum Stores",
    LinkIcon: MdStoreMallDirectory,
    href: "#",
    hrefName: "Find a store",
  },
  {
    name: "Spectrum Apps",
    LinkIcon: IoMdPhonePortrait,
    href: "#",
    hrefName: "Download apps",
  },
  {
    name: "Changes Services",
    LinkIcon: MdOutlineSettings,
    href: "#",
    hrefName: "Manage your services",
  },
  {
    name: "Pay Your Bill",
    LinkIcon: FaFileInvoiceDollar,
    href: "#",
    hrefName: "Accounts & billing",
  },
];

export const footerDisclosureData = [
  {
    name: "Company",
    links: [
      {
        title: "About Charter",
        href: "#",
      },
      {
        title: "Careers",
        href: "#",
      },
      {
        title: "Spectrum Enterprise Solutions",
        href: "#",
      },
      {
        title: "Spectrum Reach",
        href: "#",
      },
      {
        title: "Spectrum Community Solutions",
        href: "#",
      },
      {
        title: "Spectrum Business",
        href: "#",
      },
      {
        title: "Retailers",
        href: "#",
      },
    ],
  },
  {
    name: "Shop",
    links: [
      {
        title: "Bundles & Promotiions",
        href: "#",
      },
      {
        title: "Internet",
        href: "#",
      },
      {
        title: "TV",
        href: "#",
      },
      {
        title: "Home Phone",
        href: "#",
      },
      {
        title: "Mobile",
        href: "#",
      },
      {
        title: "Spectrum Internet Assist",
        href: "#",
      },
    ],
  },
  {
    name: "Explore",
    links: [
      {
        title: "Spectrum Apps",
        href: "#",
      },
      {
        title: "Spectrum WiFi Access Points",
        href: "#",
      },
      {
        title: "Test Your Internet Speed",
        href: "#",
      },
      {
        title: "Contract Buyout",
        href: "#",
      },
      {
        title: "Channel Lineup",
        href: "#",
      },
      {
        title: "Why Spectrum?",
        href: "#",
      },
      {
        title: "Service In Your Area",
        href: "#",
      },
      {
        title: "Rural Broadband Expansion",
        href: "#",
      },
    ],
  },
  {
    name: "Help & Support",
    links: [
      {
        title: "Contact Spectrum",
        href: "#",
      },
      {
        title: "Manage Account",
        href: "#",
      },
      {
        title: "Pay Your Bill",
        href: "#",
      },
      {
        title: "Support",
        href: "#",
      },
      {
        title: "Store Locator",
        href: "#",
      },
      {
        title: "Upgrade",
        href: "#",
      },
      {
        title: "Move Your Services",
        href: "#",
      },
      {
        title: "Service Rates & Disclosures",
        href: "#",
      },
      {
        title: "Rural Carrier Call Completion",
        href: "#",
      },
    ],
  },
];

export const footerLinksData = [
  {
    title: "Terms of Service/Policies",
    href: "#",
  },
  {
    title: "Your Privacy Rights",
    href: "#",
  },
  {
    title: "Accessibility",
    href: "#",
  },
  {
    title: "California Privacy Policy",
    href: "#",
  },
  {
    title: "California Consumer Do Not Sell My Personal Information",
    href: "#",
  },
];
