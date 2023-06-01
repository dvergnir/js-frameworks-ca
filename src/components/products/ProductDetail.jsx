import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../utils/getProductById.jsx";
import Button from "../Button.jsx";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await getProductById(id);
      setProduct(productData);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <img
        src={product.imageUrl}
        className="product-image"
        alt={product.title}
      />
      <p>{product.description}</p>
      <h3>Price: ${product.price}</h3>
      <Button>Add to Cart</Button>
    </div>
  );
};

export default ProductDetail;
