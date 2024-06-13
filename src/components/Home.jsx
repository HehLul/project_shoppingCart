import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../styles/Home.css";
function Home({ cartQuantity }) {
  return (
    <div className="content">
      <Navbar cartQuantity={cartQuantity}></Navbar>
      <div className="home">
        <h1>InsaneTech</h1>
        <h2>Buy the latest and coolest tech in the world!</h2>
        <Link to="shop">
          <button>Start Shopping</button>
        </Link>
      </div>
    </div>
  );
}
export default Home;
