import Modal from "./Modal";
import SingleCartItem from "./SingleCartitem";
import { MdCurrencyRupee } from "react-icons/md";
const Cart = ({ setSelectedTab }) => {
  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];
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
          <div class="card-body p-4 d-flex justify-content-between">
            <button type="button" class="btn btn-warning btn-block">
              Order
            </button>
            <p>
              Total Amount <MdCurrencyRupee />
              31
            </p>
            <button
              type="button"
              class="btn btn-danger btn-block float-right"
              onClick={() => setSelectedTab("home")}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
