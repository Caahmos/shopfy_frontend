import React from "react";

const Email: React.FC = () => {
  return (
    <div className="py-12 bg-gradient-to-r from-orange-600 to-orange-400 text-white">
      <div className="container">
        <div data-aos="fade up" className="flex flex-col items-center gap-12">
            <h1 className="text-3xl md:text-4xl font-bold">Get Notified About New Products</h1>
            <input type="text" className="w-full p-4 rounded-md text-gray-600" placeholder="Enter your email"/>
        </div>
      </div>
    </div>
  );
};

export default Email;
