import Products from "../../Data.js";
import IconTrash from "../../Images/icon-delete.svg";

const ProductCart = ({ counter }) => {
  // Obtén el precio del primer producto
  const precioProducto = Products[0].price;

  // Calcula el total
  const total = precioProducto * counter;

  return (
    <div className="Main-Cart">
      <div className="Main-image">
        <img src={Products[0].img} alt="" />
      </div>
      <div className="Product-data">
        <p>
          {Products[0].name} {precioProducto} x {counter}
        </p>
        {/* Muestra el total */}
        <span>Total: ${125 * counter}</span>
      </div>
      <div className="Trash-container">
        <img src={IconTrash} alt="" />
      </div>
      <button className="Checkout">Checkout</button>
    </div>
  );
};

export default ProductCart;
