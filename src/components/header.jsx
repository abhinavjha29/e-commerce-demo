import { useContext } from "react";
import ProductContext from "./store/product-context";
import { Link, NavLink } from "react-router-dom";

const Header = ({ setSelectedTab }) => {
  const productContext = useContext(ProductContext);
  const product = productContext.items;
  // const totalQuantity = productContext.totalQuantity;
  console.log(productContext, "product is");
  let totalQuantity = 0;
  if (product.length > 0) {
    product.forEach((item) => {
      console.log(item, "item is");
      totalQuantity = totalQuantity + item.quantity;
    });
  }

  console.log(totalQuantity);
  return (
    <header className="d-flex justify-content-center py-3 header">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a href="#" className="nav-link li-content" aria-current="page">
            Home
          </a>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link li-content">
            store
          </Link>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link li-content">
            FAQs
          </a>
        </li>
        <li className="nav-item">
          <NavLink to="/aboutus" className="nav-link li-content">
            About Us
          </NavLink>
        </li>
        <div className="text-end">
          <button
            type="button"
            className="btn btn-danger position-relative"
            style={{ textAlign: "right" }}
            onClick={() => {
              setSelectedTab("cart");
            }}
          >
            Cart
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {totalQuantity}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </div>
      </ul>
    </header>
  );
};

export default Header;
