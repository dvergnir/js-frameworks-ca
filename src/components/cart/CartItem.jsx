import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({ item, handleRemoveFromCart }) => {
  return (
    <div className="product-detail-wrapper">
      <div className="product-info">
        <div className="product-text">
          <h2 className="cart-title">{item.title}</h2>
          <div className="cart-product-price">
            {item.discountedPrice && item.discountedPrice !== item.price ? (
              <>
                <b>
                  Price: <strike>${item.price}</strike>
                </b>{" "}
                <b className="discounted-price">${item.discountedPrice}</b>
                <span className="sale-percentage">
                  {" "}
                  {Math.round(
                    ((item.price - item.discountedPrice) / item.price) * 100
                  )}
                  %
                </span>
              </>
            ) : (
              <b>Price: ${item.price}</b>
            )}
          </div>
        </div>
        <img src={item.imageUrl} className="cart-image" alt={item.title} />
      </div>
      <button
        className="remove-item-btn"
        onClick={() => handleRemoveFromCart(item.id)}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  );
};

export default CartItem;
