import PropTypes from "prop-types";
import "../styles/Listing.css";
const Listing = (props) => {
  return (
    <div className="listing">
      <img src={props.imageURL} alt="listing image" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>${props.price}</p>
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