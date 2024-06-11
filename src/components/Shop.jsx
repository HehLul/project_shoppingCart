import Listing from "./Listing";
import Navbar from "./Navbar";
import "../styles/Shop.css";
function Shop() {
  return (
    <div className="content">
      <Navbar></Navbar>
      <div className="shop">
        <h1>Shop</h1>
        <div className="listings">
          <Listing></Listing>
          <Listing></Listing>
          <Listing></Listing>
          <Listing></Listing>
          <Listing></Listing>
          <Listing></Listing>
          <Listing></Listing>
          <Listing></Listing>
        </div>
      </div>
    </div>
  );
}
export default Shop;
