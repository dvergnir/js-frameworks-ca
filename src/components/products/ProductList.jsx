import React from "react";
import { Link } from "react-router-dom";
import {
  ProductCard,
  GridContainer,
  ButtonContainer,
  StyledButton,
} from "../../style";

export default function ProductList({ products }) {
  return (
    <GridContainer>
      {products.map((product) => (
        <ProductCard className="product-card" key={product.id}>
          <Link to={`/products/${product.id}`}>
            <h2>{product.title}</h2>
            <div className="cart-product-price">
              {product.discountedPrice &&
              product.discountedPrice !== product.price ? (
                <>
                  <b>
                    Price: <strike>${product.price}</strike>
                  </b>{" "}
                  <b className="discounted-price">${product.discountedPrice}</b>
                  <span className="sale-percentage">
                    {" "}
                    {Math.round(
                      ((product.price - product.discountedPrice) /
                        product.price) *
                        100
                    )}
                    %
                  </span>
                </>
              ) : (
                <b>Price: ${product.price}</b>
              )}
            </div>

            <img
              src={product.imageUrl}
              className="product-image"
              alt={product.title}
            />
            <ButtonContainer>
              <StyledButton>View Product</StyledButton>
            </ButtonContainer>
          </Link>
        </ProductCard>
      ))}
    </GridContainer>
  );
}
