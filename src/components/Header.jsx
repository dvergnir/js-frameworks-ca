import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "./cart/CartProvider";

function Header({ children }) {
  const { cartSize } = useCart();

  return (
    <header>
      <div className="logo">{children}</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </li>
          <li id="cart">
            <NavLink to="/cart" className="nav-link">
              <FontAwesomeIcon icon={faShoppingCart} />
              {cartSize > 0 && <span className="cart-count">{cartSize}</span>}
            </NavLink>
          </li>
        </ul>
        <form className="searchbar"></form>
      </nav>
    </header>
  );
}

export default Header;
