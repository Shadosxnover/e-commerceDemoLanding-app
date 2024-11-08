import {useState , React } from 'react';

const CartComponent = ({ cart, onRemoveFromCart }) => {
    const [productQuantity, setProductQuantity] = useState({});
  
    const handleIncrement = (index) => {
      setProductQuantity({
        ...productQuantity,
        [index]: (productQuantity[index] || 0) + 1
      });
    };
  
    const handleDecrement = (index) => {
      setProductQuantity({
        ...productQuantity,
        [index]: Math.max((productQuantity[index] || 1) - 1, 0)
      });
    };
  
    return (
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-medium mb-4">Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((product, index) => (
              <div key={index} className="flex items-center mb-4">
                <img src={product.image} alt={product.name} className="h-16 w-16 object-cover rounded-lg mr-4" />
                <div>
                  <h3 className="text-gray-800 font-medium">{product.name}</h3>
                  <div className="flex items-center space-x-2">
                    <button
                      className="text-red-600 hover:text-red-700 font-medium transition-colors duration-300"
                      onClick={() => handleDecrement(index)}
                    >
                      -
                    </button>
                    <span className="text-gray-700">{productQuantity[index] || 1}</span>
                    <button
                      className="text-red-600 hover:text-red-700 font-medium transition-colors duration-300"
                      onClick={() => handleIncrement(index)}
                    >
                      +
                    </button>
                  </div>
                  <p className="text-gray-700">${product.price}</p>
                  <button
                    className="text-red-600 hover:text-red-700 font-medium transition-colors duration-300"
                    onClick={() => onRemoveFromCart(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <p className="text-gray-700 font-medium">
              Total: $
              {cart.reduce(
                (total, product, index) =>
                  total + product.price * (productQuantity[index] || 1),
                0
              ).toFixed(2)}
            </p>
          </div>
        )}
      </div>
    );
  };
export default CartComponent;
