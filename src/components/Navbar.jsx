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
          {/* <Link to="cart">Cart</Link> */}
          <img src="" alt="" />
        </li>
        <p className="cartQuantity">{cartQuantity}</p>
      </ul>
    </div>
  );
}
export default Navbar;
