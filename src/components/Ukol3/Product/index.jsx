import { useState } from 'react';
import './style.css';

export const Product = ({ image, name, price, onAddToCart }) => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
    onAddToCart(price);
  };

  return (
    <div onClick={handleCount} className="product">
      <img src={image} className="product__image" />
      <div className="product__body">
        {name}: {price} Kč <br />
        {count} ks
      </div>
    </div>
  );
};
