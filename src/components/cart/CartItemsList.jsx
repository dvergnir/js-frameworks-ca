import { StyledCartProduct } from "../../style";
import CartItem from "./CartItem";

const CartItemsList = ({ cartItems, handleRemoveFromCart }) => {
  return (
    <StyledCartProduct>
      {cartItems && cartItems.length === 0 ? (
        <h2>Your cart is empty.</h2>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <CartItem
              key={`${item.id}-${index}`}
              item={item}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          ))}
        </>
      )}
    </StyledCartProduct>
  );
};

export default CartItemsList;
