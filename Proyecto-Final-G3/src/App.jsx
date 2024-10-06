import React, { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  return (
    <div>
      <Header />
      <Main counter={counter} increment={increment} decrement={decrement} />
    </div>
  );
}

export default App;
