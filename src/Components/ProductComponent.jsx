import React from 'react';

const ProductComponent = ({ name, price, description, image, onAddToCart }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={name} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-medium mb-2">{name}</h2>
        <p className="text-gray-700 mb-4">${price}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
          onClick={() => onAddToCart({ name, price, description, image })}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductComponent;
