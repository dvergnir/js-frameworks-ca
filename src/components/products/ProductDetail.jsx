import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../utils/getProductById";
import { StyledButton } from "../../style";
import { ProductDetailContainer } from "../../style";
import { useCart } from "../cart/CartProvider";
import LoadingIndicator from "../../utils/LoadingIndicator";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await getProductById(id);
      setProduct(productData);
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
  };

  if (!product) {
    return <LoadingIndicator>Loading...</LoadingIndicator>;
  }

  return (
    <ProductDetailContainer>
      <div className="product-detail">
        <h2>{product.title}</h2>
        <img
          src={product.imageUrl}
          className="detail-image"
          alt={product.title}
        />
        <p>{product.description}</p>
        <div>
          {product.discountedPrice &&
          product.discountedPrice !== product.price ? (
            <>
              <b>
                Price: <strike>${product.price}</strike>
              </b>{" "}
              <b className="discounted-price">${product.discountedPrice}</b>
            </>
          ) : (
            <b>Price: ${product.price}</b>
          )}
        </div>
        {product.reviews && product.reviews.length > 0 ? (
          <div className="review-container">
            <h3>Reviews:</h3>
            {product.reviews.map((review, index) => (
              <div key={index}>
                <p>
                  {review.username}: {review.description}{" "}
                  <b>({review.rating}/5)</b>
                </p>
              </div>
            ))}
          </div>
        ) : null}
        <StyledButton onClick={handleAddToCart}>Add to Cart</StyledButton>
      </div>
    </ProductDetailContainer>
  );
};

export default ProductDetail;
