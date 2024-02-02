import { useState } from "react";
import ProductContext from "./product-context";

const ProductProvider = (props) => {
  const [product, setProduct] = useState([]);
  let [quantity, setQuantity] = useState(0);
  const addItemtoCart = (item) => {
    let isAvail = false;
    let updatedProduct = [...product];
    updatedProduct.forEach((items) => {
      if (items.title === item.title) {
        items.quantity = Number(items.quantity) + 1;
        isAvail = true;
      }
    });
    if (isAvail) {
      setProduct(updatedProduct);
    } else {
      setProduct([...product, item]);
    }
    // const filteredProduct = updatedProduct.filter(
    //   (items) => items.quantity > 0
    // );
    // console.log(filteredProduct, "filter prod is");
    // setProduct(filteredProduct);
    console.log(product);
  };
  const addQuantity = (newQuantity) => {
    quantity = quantity + newQuantity;
    setQuantity(quantity);
  };
  const subQuantity = (newQuantity) => {
    quantity = quantity - newQuantity;
    setQuantity(quantity);
  };
  const removeItemfromCart = (name) => {
    const updatedProduct = product.filter((item) => item.title !== name);
    let quantity = 0;
    updatedProduct.forEach((item) => {
      quantity = quantity + Number(item.quantity);
    });

    setProduct(updatedProduct);
    setQuantity(quantity);
  };
  const totatAmount = () => {};
  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 1,
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 1,
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      quantity: 1,
    },
  ];
  let totalQuantity = 0;

  const itemContext = {
    items: product,
    totalQuantity: quantity,
    addQuantity: addQuantity,
    subQuantity: subQuantity,
    removeItem: removeItemfromCart,
    addItem: addItemtoCart,
    defaultItem: productsArr,
    totatAmount: 0,
  };
  return (
    <ProductContext.Provider value={itemContext}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
