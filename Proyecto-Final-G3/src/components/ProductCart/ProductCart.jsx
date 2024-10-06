import Products from "../../Data.js";
import IconTrash from "../../Images/icon-delete.svg";

const ProductCart = ({ counter, deleteProductFromCart }) => {

  const precioProducto = Products[0].price;

  return (
    <div className="Main-Cart">
      {counter > 0}
      <div className="Main-image">
        <img src={Products[0].img} alt="" />
      </div>
      <div className="Product-data">
        <p>
          {Products[0].name} {precioProducto} x {counter}
        </p>
        <span>Total: ${125 * counter}</span>
      </div>
      <div className="Trash-container">
        <img onClick={deleteProductFromCart} src={IconTrash} alt="" />
      </div>
      <button className="Checkout">Checkout</button>
    </div>
  );
};

export default ProductCart;
