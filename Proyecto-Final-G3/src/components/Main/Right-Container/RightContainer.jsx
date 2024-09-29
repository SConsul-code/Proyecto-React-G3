import { useState } from "react";
import ImageCartButton from "../../../Images/icon-cart.svg";
import IconMinus from "../../../Images/icon-minus.svg";
import IconPlus from "../../../Images/icon-plus.svg";

const RightContainer = () => {
  const [counter, setCounter] = useState(2);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 0) setCounter(counter - 1);
  };
  return (
    <div className="right-container">
      <h3 className="company-name">SNEAKER COMPANY</h3>
      <h1 className="product-title">Fall Limited Edition Sneakers</h1>
      <p className="product-description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <span className="discount-price">$125.00</span>
      <span className="discount">50%</span>
      <h3 className="original-price">$250.00</h3>
      <div className="buy-Container">
        <span className="add-article">
          <span>
            <button onClick={decrement} className="button-minus">
              <img className="iconMinus" src={IconMinus} alt="" />
            </button>
          </span>
          <span>
            <span className="counter">{counter}</span>
          </span>
          <span>
            <button onClick={increment} className="button-plus">
              <img src={IconPlus} alt="" />
            </button>
          </span>
        </span>
        <div className="ButtonAddToCart">
          <span>
            <button>
              <img src={ImageCartButton} alt="" />
              <span>Add to cart</span>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RightContainer;
