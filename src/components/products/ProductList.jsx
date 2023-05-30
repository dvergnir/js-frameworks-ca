import React from "react";
import { Link } from "react-router-dom";
import { ProductCard, GridContainer } from "./style";

export default function ProductList({ products }) {
  return (
    <GridContainer>
      {products.map((product) => (
        <ProductCard className="product-card" key={product.id}>
          <Link to={`/Products/${product.id}`}>
            <h2>{product.title}</h2>
            <p className="product-price">
              Price: {product.price.toLocaleString()} NOK
            </p>
            <img
              src={product.imageUrl}
              className="product-image"
              alt={product.title}
            />
          </Link>
        </ProductCard>
      ))}
    </GridContainer>
  );
}
