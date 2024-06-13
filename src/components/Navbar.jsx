import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import shoppingCart from "../assets/shopping-cart.png"; // Import the image
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
          <img width="35px" src={shoppingCart} alt="cart" />
        </li>
        <p className="cartQuantity">{cartQuantity}</p>
      </ul>
    </div>
  );
}
export default Navbar;
