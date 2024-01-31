import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import SingleItem from "./components/SingleItem";
import Content from "./components/content";

import Heading from "./components/heading";
import Cart from "./components/overlay/cart";
import { useState } from "react";
import ProductContext from "./components/store/product-context";
import ProductProvider from "./components/store/product-provider";

function App() {
  const [selectedTab, setSelectedTab] = useState("home");

  return (
    <ProductProvider>
      <Header setSelectedTab={setSelectedTab}></Header>
      <main>
        <Heading></Heading>
        <Content></Content>
        {selectedTab === "cart" && (
          <Cart setSelectedTab={setSelectedTab}></Cart>
        )}
      </main>
      <Footer></Footer>
    </ProductProvider>
  );
}

export default App;
