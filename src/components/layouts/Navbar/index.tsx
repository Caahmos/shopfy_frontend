import React from "react";
import Logo from "../../../assets/logo-Jm4BVSCI.png";
import Switch from "../Switch";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { MenuItems } from "../../../utils/MenuItems";
import { DropdownItems } from "../../../utils/DropdownItems";

const Navbar: React.FC = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10 uppercase" />
              Shopsy
            </a>
          </div>
          <div className="flex justify-between gap-3 items-center">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-orange-400"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            <button
              onClick={() => {
                alert("Ordering not avaiable yet");
              }}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            <Switch />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4 py-3">
          {MenuItems.map((data) => (
            <li key={data.id} className="">
              <a
                href={data.link}
                className="inline-block px-4 hover:text-orange-500 transition-all duration-300"
              >
                {data.name}
              </a>
            </li>
          ))}
          <li className="group relative cursor-pointer">
            <a href="/" className="flex items-center gap-[2px]">
              Trending
              <span>
                <FaCaretDown 
                className="trasition-all duration-200 group-hover:rotate-180"
                />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
                <ul>
                    {
                        DropdownItems.map((data) => (
                            <li key={data.id}>
                              <a
                                href={data.link}
                                className="inline-block w-full rounded-md p-2 hover:text-orange-500 transition-all duration-300 hover:bg-primary/20"
                              >
                                {data.name}
                              </a>
                            </li>
                          ))
                    }
                </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
