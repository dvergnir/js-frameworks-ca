import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "./CartProvider";

function Header({ children }) {
  const { cartSize } = useCart();

  return (
    <header>
      <div className="logo">{children}</div>
      <nav>
        <ul>
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li id="cart">
            <Link to="/cart" className="nav-link">
              <FontAwesomeIcon icon={faShoppingCart} />
              {cartSize > 0 && <span className="cart-count">{cartSize}</span>}
            </Link>
          </li>
        </ul>
        <form className="searchbar"></form>
      </nav>
    </header>
  );
}

export default Header;
