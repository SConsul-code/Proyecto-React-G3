import { useState } from "react";
import ImageCartButtonBlack from "../../Images/icon-cart-black.svg";
import IconMinus from "../../Images/icon-minus.svg";
import IconPlus from "../../Images/icon-plus.svg";
import ProductCart from "../ProductCart/ProductCart";
import Cart from "../Cart/Cart";
import LeftContainer from "./LeftContainer/LeftContainer";

const Main = ({ counter, increment, decrement }) => {
 
  const [showCart, setShowCart] = useState(false);


  const handleAddToCart = () => {
    if (counter > 0) {
      setShowCart(true);
    }
  };

  function deleteProductFromCart() {
    setShowCart(false);
    decrement();
    
  }

  return (
    <section className="main-section">
      <LeftContainer />
      <div className="right-container">
        <h3 className="company-name">SNEAKER COMPANY</h3>
        <h1 className="product-title">Fall Limited Edition Sneakers</h1>
        <p className="product-description">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <span className="discount-price">$125.00</span>
        <span className="discount">50%</span>
        <h3 className="original-price">$250.00</h3>

        <div className="buy-Container">
          <span className="add-article">
            <button onClick={decrement} className="button-minus">
              <img className="iconMinus" src={IconMinus} alt="" />
            </button>
            <span className="counter">{counter}</span>
            <button onClick={increment} className="button-plus">
              <img src={IconPlus} alt="" />
            </button>
          </span>
          <button onClick={handleAddToCart} className="AddToCart">
            <img src={ImageCartButtonBlack} alt="" />
            Add to cart
          </button>
        </div>
      </div>


      {showCart && (
        <ProductCart
          counter={counter}
          deleteProductFromCart={deleteProductFromCart}
        />
      )}
    </section>
  );
};

export default Main;
