export const getTotal = (cart, productQuantity) => {
    return cart.reduce((total, product) => {
      return total + product.price * (productQuantity[product.name] || 1);
    }, 0);
  };
  