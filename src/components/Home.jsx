import { Link } from "react-router-dom";
import "../styles/Home.css";
function Home() {
  return (
    <div className="home">
      <h1>Tech2024</h1>
      <h2>Buy the latest and coolest tech in the world!</h2>
      <Link to="shop">Start Shopping</Link>
    </div>
  );
}
export default Home;
