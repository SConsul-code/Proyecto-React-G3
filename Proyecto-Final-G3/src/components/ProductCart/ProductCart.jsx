import React from "react";
import Products from "../../Data.js";
import IconTrash from "../../Images/icon-delete.svg";

const ProductCart = () => {
  return (
    <div className="Main-Cart">
      <div className="Main-image">
        <img src={Products[0].img} alt="" />
      </div>
      <div className="Product-data">
        <p>
          {[Products[0].name]} {[Products[0].price]}x{[Products[0].id]}
        </p>
        {/* <span>Total</span> */}
      </div>
      <div className="Trash-container">
        <img src={IconTrash} alt="" />
      </div>
      <div className="Button-container">
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default ProductCart;
