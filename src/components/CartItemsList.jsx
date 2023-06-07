import React from "react";
import { StyledCartProduct } from "../style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const CartItemsList = ({ cartItems, handleRemoveFromCart }) => {
  return (
    <StyledCartProduct>
      {cartItems.length === 0 ? (
        <h2>Your cart is empty.</h2>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div className="product-detail-wrapper" key={`${item.id}-${index}`}>
              <div className="product-info">
                <div className="product-text">
                  <h2 className="cart-title">{item.title}</h2>
                  <div className="cart-product-price">
                    {item.discountedPrice &&
                    item.discountedPrice !== item.price ? (
                      <>
                        <b>
                          Price: <strike>${item.price}</strike>
                        </b>{" "}
                        <b className="discounted-price">
                          ${item.discountedPrice}
                        </b>
                      </>
                    ) : (
                      <b>Price: ${item.price}</b>
                    )}
                  </div>
                </div>
                <img
                  src={item.imageUrl}
                  className="cart-image"
                  alt={item.title}
                />
              </div>
              <button
                className="remove-item-btn"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          ))}
        </>
      )}
    </StyledCartProduct>
  );
};

export default CartItemsList;
