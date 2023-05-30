import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Header({ children }) {
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
            </Link>
          </li>
        </ul>
        <form className="searchbar">
          <label htmlFor="search" className="search-label">
            Search by title
          </label>
          <input type="search" id="search" name="search" />
        </form>
      </nav>
    </header>
  );
}

export default Header;
