import { useState } from "react";
import Content from "../content";
import Footer from "../footer";
import Header from "../header";
import Heading from "../heading";
import Cart from "../overlay/cart";
import ProductProvider from "../store/product-provider";

const Store = ({ selectedTab, setSelectedTab }) => {
  // const [selectedTab, setSelectedTab] = useState("home");
  return (
    <>
      <main>
        <Heading></Heading>
        <Content></Content>
        {selectedTab === "cart" && (
          <Cart setSelectedTab={setSelectedTab}></Cart>
        )}
      </main>
    </>
  );
};
export default Store;
