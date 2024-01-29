import { FaRupeeSign } from "react-icons/fa";
const SingleItem = ({ title, imageUrl, price }) => {
  return (
    <div className="card single-card" style={{ width: "18rem" }}>
      <h5 className="card-title">{title}</h5>

      <div className="card-body">
        <img src={imageUrl} className="card-img-top" alt="..." />
        <p>
          <FaRupeeSign />
          {price}
        </p>
        <button type="button" class="btn btn-info">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
