import { useContext } from "react";
import { FaRupeeSign } from "react-icons/fa";
import ProductContext from "./store/product-context";
const SingleItem = ({ title, imageUrl, price, quantity }) => {
  const productContext = useContext(ProductContext);
  const addItem = productContext.addItem;
  const addQuantity = productContext.addQuantity;
  const handleAddtocartbtn = (e) => {
    e.preventDefault();
    const item = { title, imageUrl, price, quantity };

    addItem(item);
    addQuantity(1);
  };
  return (
    <div className="card single-card" style={{ width: "18rem" }}>
      <h5 className="card-title">{title}</h5>

      <div className="card-body">
        <img src={imageUrl} className="card-img-top" alt="..." />
        <p>
          <FaRupeeSign />
          {price}
        </p>
        <button
          type="button"
          class="btn btn-info"
          onClick={(e) => {
            handleAddtocartbtn(e);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
