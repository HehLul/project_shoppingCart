import { Link } from "react-router-dom";
import "../styles/Navbar.css";
function Navbar({ cartQuantity }) {
  return (
    <div className="navbar">
      <h1>InsaneTech</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="shop">Shop</Link>
        </li>
        <li>
          <img width="35px" src="src/assets/shopping-cart.png" alt="cart" />
        </li>
        <p className="cartQuantity">{cartQuantity}</p>
      </ul>
    </div>
  );
}
export default Navbar;
