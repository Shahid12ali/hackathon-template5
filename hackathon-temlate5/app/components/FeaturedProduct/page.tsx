import React from "react";
import Image from "next/image";

const FeaturedProducts = () => {
  const products = [
    { oldPrice: 16.48, newPrice: 6.48 },
    { oldPrice: 16.48, newPrice: 6.48 },
    { oldPrice: 16.48, newPrice: 6.48 },
    { oldPrice: 16.48, newPrice: 6.48 },
    { oldPrice: 16.48, newPrice: 6.48 },
    { oldPrice: 16.48, newPrice: 6.48 },
    { oldPrice: 16.48, newPrice: 6.48 },
    { oldPrice: 16.48, newPrice: 6.48 },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-10 border-t-2 border-gray-300/50">
      <h2 className="text-xl">Featured Products</h2>
      <h1 className="text-2xl font-bold mb-10">BESTSELLER PRODUCTS</h1>
      <p className="mb-10 text-gray-600">Problems trying to resolve the conflict between</p>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="h-96 w-72 shadow-lg rounded-lg overflow-hidden">
              <Image
                className="h-full w-full object-cover"
                src={`/images/pic${index + 1}.png`}
                alt={`Product ${index + 1}`}
                width={600}
                height={400}
                objectFit="cover"
              />
            </div>
            <div className="mt-4 text-center">
              <h1 className="text-xl font-bold text-black">Graphic Design</h1>
              <p className="text-sm text-gray-700 italic">English Department</p>
              <div className="mt-2">
                <span className="text-gray-500 line-through mr-2">${product.oldPrice.toFixed(2)}</span>
                <span className="text-green-600 font-bold">${product.newPrice.toFixed(2)}</span>
              </div>
              <div className="mt-4 flex space-x-2">
                <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
                <div className="h-3 w-3 bg-gradient-to-r bg-green-500 rounded-full"></div>
                <div className="h-3 w-3 bg-gradient-to-r bg-yellow-500 rounded-full"></div>
                <div className="h-3 w-3 bg-cyan-500 rounded-full"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
