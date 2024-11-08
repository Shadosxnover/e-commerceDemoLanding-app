import React, { useState } from 'react';
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import CartComponent from './Components/CartComponent';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header />
      <div className="max-w-5xl mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <ProductList onAddToCart={addToCart} />
          </div>
          <div>
            <CartComponent cart={cart} onRemoveFromCart={removeFromCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
