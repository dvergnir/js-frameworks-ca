import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../utils/getProductById.jsx";
import Button from "../Button.jsx";
import { ProductDetailContainer } from "./style.jsx";

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
  console.log(product.reviews);
  return (
    <ProductDetailContainer>
      <div className="product-detail">
        <h2>{product.title}</h2>
        <img
          src={product.imageUrl}
          className="product-image"
          alt={product.title}
        />
        <p>{product.description}</p>
        <b>Price: ${product.price}</b>
        {product.reviews && product.reviews.length > 0 ? (
          <div className="review-container">
            <h3>Reviews:</h3>
            {product.reviews.map((review, index) => (
              <div key={index}>
                <p>
                  {review.username}: {review.description}{" "}
                  <b>({review.rating}/10)</b>
                </p>
              </div>
            ))}
          </div>
        ) : null}
        <Button>Add to Cart</Button>
      </div>
    </ProductDetailContainer>
  );
};

export default ProductDetail;
