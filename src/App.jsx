import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import SingleItem from "./components/SingleItem";
import Content from "./components/content";

import Heading from "./components/heading";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Heading></Heading>
        <Content></Content>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
