import PropTypes from "prop-types";
import "../styles/Listing.css";
import AddToCart from "./AddToCart";
const Listing = (props) => {
  return (
    <div className="listing">
      <div className="listingContent">
        <img src={props.image} alt="listing image" />
        <h3>{props.title}</h3>
        <p className="description">{props.description}</p>
        <p>${props.price}</p>
      </div>
      <AddToCart handleAddToCart={props.handleAddToCart} />
    </div>
  );
};
Listing.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
};
Listing.defaultProps = {
  title: "some cool gadget",
  description:
    "this is the latest and coolest gadget and thats why you should buy",
  price: 122,
};
export default Listing;
