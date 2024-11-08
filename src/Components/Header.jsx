import React from 'react';

const Header = () => {
  return (
    <header className="bg-red-700 text-white py-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/api/placeholder/40/40" alt="Dragon Logo" className="h-8 w-8 mr-2" />
          <h1 className="text-2xl font-bold">Mystic Market</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">Products</a></li>
            <li><a href="#" className="hover:text-gray-300">Cart</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
