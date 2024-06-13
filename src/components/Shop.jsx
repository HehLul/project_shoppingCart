import Listing from "./Listing";
import Navbar from "./Navbar";
import "../styles/Shop.css";
function Shop({ cartQuantity, setCartQuantity, handleAddToCart }) {
  return (
    <div className="content">
      <Navbar cartQuantity={cartQuantity}></Navbar>
      <div className="shop">
        <h1>Shop</h1>
        <div className="listings">
          <Listing handleAddToCart={handleAddToCart}></Listing>
          <Listing handleAddToCart={handleAddToCart}></Listing>
          <Listing handleAddToCart={handleAddToCart}></Listing>
          <Listing handleAddToCart={handleAddToCart}></Listing>
          <Listing handleAddToCart={handleAddToCart}></Listing>
          <Listing handleAddToCart={handleAddToCart}></Listing>
          <Listing handleAddToCart={handleAddToCart}></Listing>
          <Listing handleAddToCart={handleAddToCart}></Listing>
        </div>
      </div>
    </div>
  );
}
export default Shop;
