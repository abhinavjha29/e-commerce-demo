import styles from "./SingleproductPage.module.css";
const SingleProductPage = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-10">
          <div className={styles.card}>
            <div className="row">
              <div className="col-md-6">
                <div className="images p-3">
                  <div className="text-center p-4">
                    <img
                      id="main-image"
                      src="https://i.imgur.com/Dhebu4F.jpg"
                      width="250"
                    />
                  </div>
                  <div className="thumbnail text-center">
                    <img
                      onclick="change_image(this)"
                      src="https://i.imgur.com/Rx7uKd0.jpg"
                      width="70"
                    />
                    <img
                      onclick="change_image(this)"
                      src="https://i.imgur.com/Dhebu4F.jpg"
                      width="70"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className={`${styles.product} p-4`}>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-long-arrow-left"></i>
                      <div
                        class="btn-group btn-group-sm"
                        role="group"
                        aria-label="Small button group"
                      >
                        <button type="button" class="btn btn-outline-primary">
                          {" "}
                          back
                        </button>
                      </div>
                    </div>
                    <i className="fa fa-shopping-cart text-muted"></i>
                  </div>
                  <div className="mt-4 mb-3">
                    <span
                      className={`"text-uppercase text-muted ${styles.brand}`}
                    >
                      Orianz
                    </span>
                    <h5 className="text-uppercase">Men's slim fit t-shirt</h5>
                    <div className="price d-flex flex-row align-items-center">
                      <small className={styles.disprice}>$59</small>
                      <div className="ml-2">
                        <span className={styles.actprice}>$20</span>
                        <span>40% OFF</span>
                      </div>
                    </div>
                  </div>
                  <p className={styles.about}>
                    Shop from a wide range of t-shirt from orianz. Pefect for
                    your everyday use, you could pair it with a stylish pair of
                    jeans or trousers complete the look.
                  </p>
                  <div className="sizes mt-5">
                    <h6 className="text-uppercase">Size</h6>
                    <label className={styles.radio}>
                      <input
                        type="radio"
                        name="size"
                        value="S"
                        className={styles.radio_input}
                        checked
                      />
                      <span>S</span>
                    </label>
                    <label className={styles.radio}>
                      <input
                        type="radio"
                        name="size"
                        value="M"
                        className={styles.radio_input}
                      />
                      <span>M</span>
                    </label>
                    <label className={styles.radio}>
                      <input
                        type="radio"
                        name="size"
                        value="L"
                        className={styles.radio_input}
                      />
                      <span>L</span>
                    </label>
                    <label className={styles.radio}>
                      <input
                        type="radio"
                        name="size"
                        value="XL"
                        className={styles.radio_input}
                      />
                      <span>XL</span>
                    </label>{" "}
                    <label className={styles.radio}>
                      <input
                        type="radio"
                        name="size"
                        value="XXL"
                        className={styles.radio_input}
                      />
                      <span>XXL</span>
                    </label>
                  </div>
                  <div className="cart mt-4 align-items-center">
                    <button className="btn btn-danger text-uppercase mr-2 px-4">
                      Add to cart
                    </button>
                    <i className="fa fa-heart text-muted"></i>
                    <i className="fa fa-share-alt text-muted"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
