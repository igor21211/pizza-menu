import { useState } from "react";
import "./App.css";
import Header from "./сomponents/Header";
import pizzaData from "./data/data";
import Menu from "./сomponents/Menu";
import Footer from "./сomponents/Footer";

function App() {
  const [pizza, setPizza] = useState(pizzaData);

  return (
    <div className="container">
      <Header />
      <Menu pizza={pizza} />
      <Footer />
    </div>
  );
}

export default App;
