import Products from "../../Data.js";
import IconTrash from "../../Images/icon-delete.svg";

const ProductCart = ({ counter }) => {
  return (
    <div className="Main-Cart">
      <div className="Main-image">
        <img src={Products[0].img} alt="" />
      </div>
      <div className="Product-data">
        <p>
          {[Products[0].name]} {[Products[0].price]}x{[Products[0].counter]}
        </p>
        {/* <span>Total:{[Products[0].price] * counter}</span> */}
      </div>
      <div className="Trash-container">
        <img src={IconTrash} alt="" />
      </div>
      <button className="Checkout">Checkout</button>
    </div>
  );
};

export default ProductCart;
