import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import ProductCart from "./components/ProductCart/ProductCart";

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <Header />
      <Main
        counter={counter}
        increment={increment}
        decrement={decrement}
        addToCart={addToCart}
      />
    </div>
  );
}

export default App;
