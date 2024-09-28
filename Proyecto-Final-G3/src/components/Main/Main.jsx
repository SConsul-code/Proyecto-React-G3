/* import React from "react"; */
import SelectedImage1 from "../../Images/image-product-1.jpg";
import MiniSelectImage1 from "../../Images/image-product-1-thumbnail.jpg";
/* import SelectedImage2 from "../Images/image-product-2.jpg"; */
import MiniSelectImage2 from "../../Images/image-product-2-thumbnail.jpg";
/* import SelectedImage3 from "../Images/image-product-3.jpg"; */
import MiniSelectImage3 from "../../Images/image-product-3-thumbnail.jpg";
/* import SelectedImage4 from "../Images/image-product-4.jpg"; */
import MiniSelectImage4 from "../../Images/image-product-4-thumbnail.jpg";
import ImageCartButton from "../../Images/icon-cart.svg";
import IconMinus from "../../Images/icon-minus.svg";
import IconPlus from "../../Images/icon-plus.svg";

const Main = () => {
  return (
    <section className="main-section">
      <div className="left-container">
        <img className="selected-image" src={SelectedImage1} alt="" />
        <div className="mini-images">
          <img className="item" src={MiniSelectImage1} alt="" />
          <img className="item" src={MiniSelectImage2} alt="" />
          <img className="item" src={MiniSelectImage3} alt="" />
          <img className="item" src={MiniSelectImage4} alt="" />
        </div>
        {/*         Imagenes en tamaño grande de las mini que se van a usar mas adelante
        <img src={SelectedImage2} alt="" />
        <img src={SelectedImage3} alt="" />
        <img src={SelectedImage4} alt="" /> */}
      </div>

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
        <div>
          <span className="spanButtons">
            <div>
              <button className="button-minus">
                <img className="iconMinus" src={IconMinus} alt="" />
              </button>
            </div>
            <div>
              <span className="counter">0</span>
            </div>
            <div>
              <button className="button-plus">
                <img src={IconPlus} alt="" />
              </button>
            </div>
          </span>
          <div className="divAddToCart">
            <span>
              <div>
                <button>
                  <img src={ImageCartButton} alt="" />
                  <span>Add to cart</span>
                </button>
              </div>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
