import React from "react";
import { useNavigate } from "react-router-dom";
import "styles/ProductItemStyles.css";

interface ProductItemProps {
  id:string;
  image: string;
  name: string;
  binomialName: string;
  price: number;
}

const ProductItem: React.FC<ProductItemProps> = ({ id,image, name, binomialName, price }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  }

  return (
    <div className="product-item" onClick={handleClick}>
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-binomial-name">{binomialName}</p>
      <p className="product-price">{price.toFixed(2)} €</p>
    </div>
  );
};

export default ProductItem;
