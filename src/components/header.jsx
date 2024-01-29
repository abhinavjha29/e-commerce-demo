const Header = () => {
  return (
    <header className="d-flex justify-content-center py-3 header">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a href="#" className="nav-link li-content" aria-current="page">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link li-content">
            Features
          </a>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link li-content">
            FAQs
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link li-content">
            About
          </a>
        </li>
        <div className="text-end">
          <button
            type="button"
            className="btn btn-danger position-relative"
            style={{ textAlign: "right" }}
          >
            Cart
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              3<span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </div>
      </ul>
    </header>
  );
};

export default Header;
