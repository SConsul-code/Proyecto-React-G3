import RightContainer from "./Right-Container/RightContainer";
import LeftContainer from "./Left-Container/LeftContainer";
import { useState } from "react";
import Cart from "../Cart/Cart";

const Main = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  return (
    <section className="main-section">
      <LeftContainer />
      <RightContainer
        counter={counter}
        increment={increment}
        decrement={decrement}
      />
    </section>
  );
};

export default Main;
