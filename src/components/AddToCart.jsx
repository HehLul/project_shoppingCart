import "../styles/AddToCart.css";
import { useState } from "react";
function AddToCart() {
  const [quantity, setQuantity] = useState(1);
  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleDecrease = () => {
    if (quantity == 0) {
      setQuantity(quantity);
    } else {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleQuantityChange = () => {
    console.log("quantity->" + quantity);
  };
  return (
    <div className="addToCart">
      <div className="input">
        <button onClick={handleDecrease}>-</button>
        <input type="text" value={quantity} />
        <button onClick={handleIncrease}>+</button>
      </div>

      <button type="submit" onClick={handleQuantityChange}>
        Add
      </button>
    </div>
  );
}

export default AddToCart;
