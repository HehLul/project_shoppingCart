import Listing from "./Listing";
import Navbar from "./Navbar";
import "../styles/Shop.css";
import { useEffect, useState } from "react";

function Shop({ cartQuantity, setCartQuantity, handleAddToCart }) {
  const [jsonRetrieved, setJsonRetrieved] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setJsonRetrieved(json));
  }, []);

  return (
    <div className="content">
      <Navbar cartQuantity={cartQuantity}></Navbar>
      <div className="shop">
        <h1>Shop</h1>
        <div className="listings">
          {jsonRetrieved ? (
            jsonRetrieved.map((item, index) => (
              <Listing
                key={index}
                handleAddToCart={handleAddToCart}
                title={item.title}
                price={item.price}
                description={item.description}
                image={item.image}
              />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Shop;
