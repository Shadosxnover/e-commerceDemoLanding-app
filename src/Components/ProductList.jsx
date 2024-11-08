import React from 'react';
import ProductComponent from './ProductComponent';

import boxingBagImage from '../assets/boxingbag.png';
import boxingGlovesImage from '../assets/boxinggloves.png';
import bicycleImage from '../assets/bycicle.png';
import iphone11Image from '../assets/iphone11.png';
import iphone12Image from '../assets/iphone12.png';
import jumpRopeImage from '../assets/jumprope.png';
import ninja300Image from '../assets/ninja300.png';
import ninjaH2Image from '../assets/ninjah2.png';
import parallettesImage from '../assets/parallets.png';

const ProductList = ({ onAddToCart }) => {
  const products = [
    {
      id: 1,
      name: 'Boxing Bag',
      price: 49.99,
      description: 'Heavy-duty boxing bag for training.',
      image: boxingBagImage,
    },
    {
      id: 2,
      name: 'Boxing Gloves',
      price: 79.99,
      description: 'Comfortable and durable boxing gloves.',
      image: boxingGlovesImage,
    },
    {
      id: 3,
      name: 'Bicycle',
      price: 199.99,
      description: 'Sturdy bicycle for outdoor adventures.',
      image: bicycleImage,
    },
    {
      id: 4,
      name: 'iPhone 11',
      price: 699.99,
      description: 'Latest model of the iPhone 11.',
      image: iphone11Image,
    },
    {
      id: 5,
      name: 'iPhone 12',
      price: 799.99,
      description: 'Latest model of the iPhone 12.',
      image: iphone12Image,
    },
    {
      id: 6,
      name: 'Jump Rope',
      price: 19.99,
      description: 'High-quality jump rope for cardio.',
      image: jumpRopeImage,
    },
    {
      id: 7,
      name: 'Ninja 300',
      price: 5499.99,
      description: 'Sporty and stylish Ninja 300 motorcycle.',
      image: ninja300Image,
    },
    {
      id: 8,
      name: 'Ninja H2',
      price: 29999.99,
      description: 'High-performance Ninja H2 motorcycle.',
      image: ninjaH2Image,
    },
    {
      id: 9,
      name: 'Parallettes',
      price: 34.99,
      description: 'Durable parallettes for strength training.',
      image: parallettesImage,
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map(product => (
        <ProductComponent
          key={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
          image={product.image}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
