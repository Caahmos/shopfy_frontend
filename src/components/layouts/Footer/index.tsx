import React from "react";
import Logo from "../../../assets/logo-Jm4BVSCI.png";

const Footer: React.FC = () => {
  return (
    <div data-aos="zoom in" className="dark:bg-gray-950 dark:text-white bg-gray-100 py-12">
      <div className="container">
        <div className="grid grid-cols-1 gap-5 md:gap-0 md:grid-cols-4 place-items-center text-center md:text-left">
          <div className="flex flex-col gap-5">
            <div className="flex gap-3 items-center">
              <img className="w-12 h-12" src={Logo} alt="" />
              <p className="text-xl">Shopfy</p>
            </div>
            <p className="text-sm text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores labore necessitatibus, eius odio porro illo assumenda quidem quibusdam qui ducimus corporis. Debitis laborum accusamus placeat voluptatum. Illo hic eos repudiandae.</p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-xl">Important Links</h1>
            <ul className="flex flex-col gap-2 text-sm">
                <li><a href="/" className="hover:text-orange-400 transition-all duration-300">Home</a></li>
                <li><a href="/" className="hover:text-orange-400 transition-all duration-300">About</a></li>
                <li><a href="/" className="hover:text-orange-400 transition-all duration-300">Contact</a></li>
                <li><a href="/" className="hover:text-orange-400 transition-all duration-300">Blog</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-xl">Links</h1>
            <ul className="flex flex-col gap-2 text-sm">
                <li><a href="/" className="hover:text-orange-400 transition-all duration-300">Home</a></li>
                <li><a href="/" className="hover:text-orange-400 transition-all duration-300">About</a></li>
                <li><a href="/" className="hover:text-orange-400 transition-all duration-300">Contact</a></li>
                <li><a href="/" className="hover:text-orange-400 transition-all duration-300">Blog</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-xl">Contact</h1>
            <ul className="flex flex-col gap-2 text-sm">
                <li><a href="/" className="hover:text-orange-400 transition-all duration-300">Home</a></li>
                <li><a href="/" className="hover:text-orange-400 transition-all duration-300">About</a></li>
                <li><a href="/" className="hover:text-orange-400 transition-all duration-300">Contact</a></li>
                <li><a href="/" className="hover:text-orange-400 transition-all duration-300">Blog</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
