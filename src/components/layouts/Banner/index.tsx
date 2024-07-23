import React from "react";
import BannerImg from "../../../assets/women2-wroTMLvf.jpg";
import { GrSecure } from "react-icons/gr";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";

const Banner: React.FC = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 dark:bg-gray-900 dark:text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <div data-aos="zoom in">
            <img
              src={BannerImg}
              alt=""
              className="max-w-[400px] rounded-2xl w-full mx-auto shadow-2xl object-cover"
            />
          </div>
          <div data-aos="fade-up" className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 className="text-3xl sm:text-4xl font-bold">
              Winter Sale Upto 50% off
            </h1>
            <p data-aos="fade-up" className="text-sm text-gray-500 tracking-wide leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ut
              esse perspiciatis iste impedit nam corrupti! Omnis molestiae esse
              recusandae voluptatibus illum, officiis, minus maxime asperiores
              laborum cupiditate, magni quos!
            </p>
            <div data-aos="fade-up" className="flex items-center gap-4">
              <GrSecure 
              className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400"
              />
              <p>Quality Products</p>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-4">
              <FaShippingFast 
              className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400"
              />
              <p>Fast Delivery</p>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-4">
              <MdOutlinePayment 
              className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400"
              />
              <p>Easy Payment Method</p>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-4">
              <BiSolidOffer 
              className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400"
              />
              <p>Get Offers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
