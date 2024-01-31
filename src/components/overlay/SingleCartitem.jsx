import { useContext } from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import ProductContext from "../store/product-context";

// import classes from "./Singlecartitems.module.css";

const SingleCartItem = ({ imageUrl, title, price, quantity }) => {
  const productContext = useContext(ProductContext);
  const addQuantity = productContext.addQuantity;
  const addItem = productContext.addItem;
  const removeItem = productContext.removeItem;
  const handleaddbtn = (e) => {
    e.preventDefault();
    addQuantity(1);
    const item = { imageUrl, title, price, quantity };
    addItem(item);
  };
  const handleRemovebtn = (e) => {
    e.preventDefault();
    console.log(1);
    removeItem(title);
  };
  return (
    <>
      <div className="card-rounded-2">
        <div class="card-body w-380">
          <div class="row d-flex justify-content-between align-items-center">
            <div class="col-md-2 col-lg-2 col-xl-2">
              <img
                src={imageUrl}
                class="img-fluid rounded-3"
                alt="Cotton T-shirt"
              />
            </div>
            <div class="col-md-3 col-lg-3 col-xl-3">
              <p class="lead fw-normal mb-2">{title}</p>
              <p>{price}</p>
            </div>
            <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
              <button class="btn btn-link px-2">
                <FaMinus />
              </button>

              <input
                type="text"
                value={` x${quantity}`}
                className="quant-input"
                readOnly
              />

              <button
                class="btn btn-link px-2"
                onClick={(e) => handleaddbtn(e)}
              >
                <FaPlus />
              </button>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
              <h5 class="mb-0">{price}</h5>
            </div>
            <div class="col-md-1 col-lg-1 col-xl-1 text-end">
              <a href="#!" class="text-danger">
                <button
                  className="btn-btn-danger"
                  onClick={(e) => {
                    handleRemovebtn(e);
                  }}
                >
                  <MdDelete />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleCartItem;
