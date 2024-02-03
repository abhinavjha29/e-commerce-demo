import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";

import Content from "./components/content";

import Heading from "./components/heading";
import Cart from "./components/overlay/cart";
import { useState } from "react";
import ProductProvider from "./components/store/product-provider";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import AboutUs from "./components/pages/About-us";
import Store from "./components/pages/Store";
import SingleProductPage from "./components/SingleproductPage";

function App() {
  //const [selectedTab, setSelectedTab] = useState("home");
  // const router = createBrowserRouter([
  //   { path: "/aboutus", element: <AboutUs /> },
  //   { path: "/", element: <Store /> },
  // ]);
  const [selectedTab, setSelectedTab] = useState("home");
  return (
    <ProductProvider>
      <BrowserRouter>
        <Header setSelectedTab={setSelectedTab} />
        <SingleProductPage></SingleProductPage>
        <Routes>
          <Route
            path="/"
            element={
              <Store
                setSelectedTab={setSelectedTab}
                selectedTab={selectedTab}
              />
            }
          />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
