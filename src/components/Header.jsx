import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li id="cart">
            <Link to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
