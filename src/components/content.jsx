import { useContext } from "react";
import SingleItem from "./SingleItem";
import ProductContext from "./store/product-context";

const Content = () => {
  // const productsArr = [
  //   {
  //     title: "Colors",

  //     price: 100,

  //     imageUrl:
  //       "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  //   },

  //   {
  //     title: "Black and white Colors",

  //     price: 50,

  //     imageUrl:
  //       "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  //   },

  //   {
  //     title: "Yellow and Black Colors",

  //     price: 70,

  //     imageUrl:
  //       "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  //   },

  //   {
  //     title: "Blue Color",

  //     price: 100,

  //     imageUrl:
  //       "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  //   },
  // ];
  const productContext = useContext(ProductContext);

  const productsArr = productContext.defaultItem;
  return (
    <div class="container text-center d-flex align-items-center justify-content-center ">
      <div class="row">
        {productsArr.map((item) => (
          <div
            className="col-5 card-holder align-items-center d-flex justify-content-center"
            key={item.title}
          >
            <SingleItem
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              quantity={item.quantity}
            ></SingleItem>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Content;
