import React from "react";

const ClassicProduct = () => {
  return (
    <div className="flex items-center justify-between bg-[#23856D] h-screen px-10">
      <div className="text-white space-y-6 max-w-md">
        <p className="uppercase text-sm font-semibold tracking-wide">Summer 2020</p>
        <h1 className="text-4xl font-bold">Vita Classic Product</h1>
        <p className="text-sm leading-relaxed">
          We know how large objects will act. We know how are objects will act. We know.
        </p>
        <div className="flex items-center space-x-4">
          <span className="text-lg font-bold">$16.48</span>
          <button className="bg-green-300 hover:bg-green-400 text-green-900 font-medium py-2 px-4 rounded">
            ADD TO CART
          </button>
        </div>
      </div>
      <div className="h-full flex-1 flex justify-center items-center">
        <img
          src="/images/shop-hero.png" 
          alt="Classic Product"
          className="h-96 object-cover"
        />
      </div>
    </div>
  );
};

export default ClassicProduct;
