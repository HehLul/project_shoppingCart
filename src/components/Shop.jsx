import Listing from "./Listing";
import "../styles/Shop.css";
function Shop() {
  return (
    <div className="shop">
      <h1>Shop</h1>
      <div className="listings">
        <Listing></Listing>
      </div>
    </div>
  );
}
export default Shop;
