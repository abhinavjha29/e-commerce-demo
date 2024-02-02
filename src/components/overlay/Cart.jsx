import { useContext } from "react";
import Modal from "./Modal";
import SingleCartItem from "./SingleCartitem";
import { MdCurrencyRupee } from "react-icons/md";
import ProductContext from "../store/product-context";
import Order from "./order";
const Cart = ({ setSelectedTab }) => {
  const productContext = useContext(ProductContext);
  const cartElements = productContext.items;
  console.log(cartElements);
  const totalAmount = cartElements.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <Modal>
      <div class="col cart-card">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>
          <div>
            <p class="mb-0">
              <span class="text-muted">Sort by:</span>
              <a href="#!" class="text-body">
                price <i class="fas fa-angle-down mt-1"></i>
              </a>
            </p>
          </div>
        </div>
        {cartElements.map((item) => (
          <SingleCartItem
            title={item.title}
            key={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            quantity={item.quantity}
          ></SingleCartItem>
        ))}
        <div class="card">
          {cartElements.length > 0 && (
            <Order
              totalAmount={totalAmount}
              setSelectedTab={setSelectedTab}
            ></Order>
          )}
          {cartElements.length === 0 && (
            <>
              <h2 className="empty">Cart is Empty</h2>
              <button
                className="btn btn-danger"
                onClick={() => setSelectedTab("home")}
              >
                Close
              </button>
            </>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
