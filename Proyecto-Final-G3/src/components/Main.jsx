/* import React from "react"; */
import SelectedImage1 from "../Images/image-product-1.jpg";
import MiniSelectImage1 from "../Images/image-product-1-thumbnail.jpg";
/* import SelectedImage2 from "../Images/image-product-2.jpg"; */
import MiniSelectImage2 from "../Images/image-product-2-thumbnail.jpg";
/* import SelectedImage3 from "../Images/image-product-3.jpg"; */
import MiniSelectImage3 from "../Images/image-product-3-thumbnail.jpg";
/* import SelectedImage4 from "../Images/image-product-4.jpg"; */
import MiniSelectImage4 from "../Images/image-product-4-thumbnail.jpg";
import ImageCartButton from "../Images/icon-cart.svg";
import IconMinus from "../Images/icon-minus.svg";
import IconPlus from "../Images/icon-plus.svg";

const Main = () => {
  return (
    <section className="main-section">
      <div className="left-container">
        <img className="selected-image" src={SelectedImage1} alt="" />
        <div className="mini-images">
          <img src={MiniSelectImage1} alt="" />
          <img src={MiniSelectImage2} alt="" />
          <img src={MiniSelectImage3} alt="" />
          <img src={MiniSelectImage4} alt="" />
        </div>
        {/*         Imagenes en tamaño grande de las mini que se van a usar mas adelante
        <img src={SelectedImage2} alt="" />
        <img src={SelectedImage3} alt="" />
        <img src={SelectedImage4} alt="" /> */}
      </div>

      <div className="right-container">
        <h3>SNEAKER COMPANY</h3>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <span>$125.00</span>
        <span>50%</span>
        <h3>$250.00</h3>
        <div>
          <span>
            <button>
              <img src={IconMinus} alt="" />
            </button>
            <span>0</span>
            <button>
              <img src={IconPlus} alt="" />
            </button>
          </span>
          <span>
            <button>
              <img src={ImageCartButton} alt="" />
              <span>Add to cart</span>
            </button>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Main;
