import React, { useEffect } from "react";
import { useCart } from "../CartProvider";
import { StyledButton } from "../../style";
import CartItemsList from "../CartItemsList";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      const parsedCartItems = JSON.parse(savedCartItems);
    }
  }, []);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const totalPrice = cartItems.reduce((acc, item) => {
    const price = item.discountedPrice || item.price;
    return acc + price;
  }, 0);

  return (
    <div>
      <h1>Cart</h1>
      <CartItemsList
        cartItems={cartItems}
        handleRemoveFromCart={handleRemoveFromCart}
      />
      {cartItems.length > 0 && (
        <h3 className="total-price">
          Total Price: ${totalPrice.toLocaleString()}
        </h3>
      )}
      {cartItems.length > 0 && (
        <Link to="/checkout">
          <StyledButton>Proceed to Checkout</StyledButton>
        </Link>
      )}
    </div>
  );
};

export default CartPage;
